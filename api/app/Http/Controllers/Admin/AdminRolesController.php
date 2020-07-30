<?php

namespace App\Http\Controllers\Admin;

use App\Exports\AdminRoles;
use App\Http\Controllers\Controller;
use App\Imports\RoleImport;
use App\Model\AdminPermission;
use App\Model\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Sentinel;
use Excel;
use DB;

class AdminRolesController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per = Role::select('id','name','slug','permissions');
        if ($request->orderBy === 'Newest'){
            $per->orderBy('id','desc');
        }elseif ($request->orderBy === 'Name'){
            $per->orderBy('name','asc');
        }else{
            $per->orderBy('id','asc');
        }
        $search_input = $request->input('search');
        if ($search_input) {
            $per->where(function($per) use ($search_input) {
                $per->where('name', 'like', '%' . $search_input . '%')
                    ->orWhere('slug', 'like', '%' . $search_input . '%');
            });
        }
        $permissions = $per->paginate($request->perPage);
        return $permissions;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $permissions = AdminPermission::all();
        return Inertia::render('Users/Admin/RoleAdd',[
            'permissions'=>$permissions
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles',
            'slug' => 'required'
        ]);
        $permissions = [];
        foreach ($request->alls as $a){
            if (in_array($a,$request->permissions)){
                $permissions[$a] = true;
            }
        }
        $role = Sentinel::getRoleRepository()->createModel()->create([
            'name' => $request->name,
            'slug' => $request->slug,
            'permissions'=>$permissions
        ]);

        if ($role){
            return redirect()->back()->with('success','Role added successfully');
        }else{
            return redirect()->back()->with('fault','Role not added');
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {

        $permissions = AdminPermission::all();
        $role = Role::findOrFail($id);
        $name = $role->name;
        $slug = $role->slug;
        $selectedPermissions = $role->custom_permission;
        return Inertia::render('Users/Admin/RoleEdit',[
            'permissions'=>$permissions,
            'id'=>$id,
            'name'=>$name,
            'slug'=>$slug,
            'selectedP'=>$selectedPermissions,
        ]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required',
            'slug' => 'required'
        ]);
        $role = Role::find($id);
        $duplicate = Role::where('id',$request->id)->first();
        $duplicateName = Role::where('name',$request->name)->get();
        $duplicateSlug = Role::where('slug',$request->slug)->get();
        if ($request->name != $duplicate->name && count($duplicateName)<1){
            $role->name = $request->name;
        }
        if ($request->slug != $duplicate->slug && count($duplicateSlug)<1){
            $role->slug = $request->slug;
        }
        $permissions = [];
        foreach ($request->alls as $a){
            if (in_array($a,$request->permissions)){
                $permissions[$a] = true;
            }
        }
        try {
            $role->permissions = json_encode($permissions);
            $role->save();
            return redirect()->back()->with('success','Role updated');
        }catch (\Exception $e){
            return redirect()->back()->with('fault','Role not updated');
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $permission = Role::find($id);
        $result = $permission->delete();
        if ($result){
            return redirect()->route('admin.admin.list')->with('success','Role deleted');
        }else{
            return redirect()->back()->with('fault','Role not deleted');
        }
    }

    public function multipleDelete($ids){
        $array = explode(",",$ids);
        foreach ($array as $i){
            $permission = Role::find($i);
            $result = $permission->delete();
        }
        if ($result){
            return redirect()->back()->with('success','Role deleted');
        }else{
            return redirect()->back()->with('fault','Role not deleted');
        }
    }

    public function allDelete(){
        $result = Role::truncate();
        if ($result){
            return redirect()->back()->with('success','Role deleted');
        }else{
            return redirect()->back()->with('fault','Role not deleted');
        }
    }

    public function pdfExport(){
        $data = Role::all();
        $pdf = PDF::loadView('admin.files.Roles', array('data'=>$data));
        return $pdf->download('admin-roles.pdf');
    }

    public function excelExport(){
        return Excel::download(new AdminRoles(), 'admin-roles.xlsx');
    }
    public function csvExport(){
        return Excel::download(new AdminRoles(), 'admin-roles.csv',\Maatwebsite\Excel\Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }

    public function printExport(){
        $data = Role::all();
        $action = 'print';
        return view('admin.files.Roles',compact('data','action'));
    }

    public function fileImported(Request $request){
        $this->validate($request,[
            'file'=>'required|mimes:xls,xlsx'
        ]);
        try {
            Excel::import(new RoleImport(),$request->file('file'));
        }catch (\Exception $e){
            return redirect()->back()->with('fault','Duplicate entry');
        }
        return redirect()->back()->with('success','File imported');
    }
}

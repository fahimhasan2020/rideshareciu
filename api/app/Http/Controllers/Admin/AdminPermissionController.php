<?php

namespace App\Http\Controllers\Admin;

use App\Imports\AdminPermissionImport;
use App\Model\AdminPermission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use PDF;
use App\Exports\AdminPermissionExport;
use Excel;

class AdminPermissionController extends Controller
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
        $per = AdminPermission::select('id','name','type','custom');
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
                    ->orWhere('type', 'like', '%' . $search_input . '%');
            });
        }
       $permissions = $per->paginate($request->perPage);
        return $permissions;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:admin_permissions',
            'type' => 'required'
        ]);
        $str = null;
        if ($request->type == 'custom'){
            $str =  implode(", ",$request->customs);
        }
        $create = AdminPermission::create([
            'name'=>$request->name,
            'type'=>$request->type,
            'custom'=>$str
        ]);
        if ($create){
            return redirect()->back()->with('success','Permission added successfully');
        }else{
            return redirect()->back()->with('fault','Permission not added');
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
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $names = AdminPermission::where('name',$request->name)->get();
        $name = AdminPermission::where('id',$request->id)->first();
        if ($request->name != $name->name && count($names)>0){
            return redirect()->back()->with('fault','Name already exist');
        }
        $request->validate([
            'id'=>'required',
            'name' => 'required',
            'type'=>'required'
        ]);
        $permission = AdminPermission::find($id);
        $permission->name = $request->name;
        $permission->type = $request->type;
        if ($request->type == 'custom'){
            $permission->custom =  implode(", ",$request->customs);
        }else{
            $permission->custom = null;
        }
        $result = $permission->update();
        if ($result){
            return redirect()->back()->with('success','Permission edited');
        }else{
            return redirect()->back()->with('fault','Permission not edited');
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
        $permission = AdminPermission::find($id);
        $result = $permission->delete();
        if ($result){
            return redirect()->back()->with('success','Permission deleted');
        }else{
            return redirect()->back()->with('fault','Permission not deleted');
        }
    }

    public function multipleDelete($ids){
        $array = explode(",",$ids);
        foreach ($array as $i){
            $permission = AdminPermission::find($i);
            $result = $permission->delete();
        }
        if ($result){
            return redirect()->back()->with('success','Permission deleted');
        }else{
            return redirect()->back()->with('fault','Permission not deleted');
        }
    }

    public function allDelete(){
        $result = AdminPermission::truncate();
        if ($result){
            return redirect()->back()->with('success','Permission deleted');
        }else{
            return redirect()->back()->with('fault','Permission not deleted');
        }
    }

    public function pdfExport(){
        $data = AdminPermission::all();
        $pdf = PDF::loadView('admin.files.Permissions', array('data'=>$data));
        return $pdf->download('admin-permissions.pdf');
    }

    public function excelExport(){
        return Excel::download(new AdminPermissionExport(), 'admin-permissions.xlsx');
    }

    public function csvExport(){
        return Excel::download(new AdminPermissionExport(), 'admin-permissions.csv',\Maatwebsite\Excel\Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }

    public function printExport(){
        $data = AdminPermission::all();
        $action = 'print';
        return view('admin.files.Permissions',compact('data','action'));
    }

    public function fileImported(Request $request){
        $this->validate($request,[
            'file'=>'required|mimes:xls,xlsx'
        ]);
        try {
            Excel::import(new AdminPermissionImport(),$request->file('file'));
        }catch (\Exception $e){
            return redirect()->back()->with('fault','Duplicate entry');
        }
        return redirect()->back()->with('success','File imported');
    }


}

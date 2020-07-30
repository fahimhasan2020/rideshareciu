<template>
    <layout title="Admin | Role Add">
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li>
                                        <inertia-link href="/admins/dashboard">Dashboard</inertia-link>
                                    </li>
                                    <li>
                                        <inertia-link href="/admins/admin">Admin</inertia-link>
                                    </li>
                                    <li CLASS="active">
                                        Role Add
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card-box">
                                <h4 class="header-title m-t-0 m-b-30">Import Roles</h4>
                                <h3 class="text-success">Import Permissions</h3>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form @submit.prevent="importSubmit" enctype="multipart/form-data" style="margin-top: 15px">
                                            <div class="form-group">
                                                <input type="file" ref="fileupload" @change="getImportFile"  class="form-control">
                                            </div>
                                            {{this.importFileName}}
                                            <button type="submit" class="btn btn-block btn-info"><i class="fa fa-file-excel-o"></i>&nbsp;Import all permissions</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-box">
                                <h4 class="header-title m-t-0 m-b-30">Add Role</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" v-model="roleForm.name" placeholder="Add Name">
                                            <span class="text-danger">{{roleFormError.name}}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" v-model="replaced" name="slug" class="form-control" placeholder="Add Slug">
                                        <span class="text-danger">{{roleFormError.slug}}</span>
                                    </div>
                                    <div v-for="p in permissions" class="col-md-12">
                                        <div class="row">
                                            <div  class="col-md-12">
                                                <div class="checkbox checkbox-success">
                                                    <input v-if="p.type !== 'single'" :id="p.name" type="checkbox" @change="checkType(p)" v-model="multiplePermissions" :value="p.name" >
                                                    <input v-else :id="p.name" type="checkbox" v-model="selectedPermissions" :value="p.name" >
                                                    <label  v-if="p.type !== 'single'" :for="p.name">
                                                        {{p.name}}
                                                    </label>
                                                    <label v-else :for="p.name">
                                                        {{p.name}}
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6"></div>
                                            <div v-if="p.type === 'resource'" class="col-md-6">
                                                <div  class="col-md-12">
                                                    <div class="checkbox checkbox-success">
                                                        <input :id="p.name+'view'" type="checkbox" v-model="selectedPermissions" @change="childToMother(p.name)" :value="p.name+'.'+'view'">
                                                        <label :for="p.name+'view'">
                                                            View
                                                        </label>
                                                    </div>
                                                    <div class="checkbox checkbox-success">
                                                        <input :id="p.name+'add'" type="checkbox" v-model="selectedPermissions" @change="childToMother(p.name)" :value="p.name+'.'+'add'">
                                                        <label :for="p.name+'add'">
                                                            Add
                                                        </label>
                                                    </div>
                                                    <div class="checkbox checkbox-success">
                                                        <input :id="p.name+'edit'" type="checkbox" v-model="selectedPermissions" @change="childToMother(p.name)" :value="p.name+'.'+'edit'">
                                                        <label :for="p.name+'edit'">
                                                            Update
                                                        </label>
                                                    </div>
                                                    <div class="checkbox checkbox-success">
                                                        <input :id="p.name+'delete'" type="checkbox" v-model="selectedPermissions" @change="childToMother(p.name)" :value="p.name+'.'+'delete'">
                                                        <label :for="p.name+'delete'">
                                                            Delete
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else-if="p.type === 'custom'" class="col-md-6">
                                                <div v-if="p.custom !== null"  class="col-md-12">
                                                    <div v-for="pc in p.custom.split(', ')" class="checkbox checkbox-success">
                                                        <input :id="p.name+pc" type="checkbox" v-model="selectedPermissions" @change="childToMotherCustom(p)" :value="p.name+'.'+pc">
                                                        <label :for="p.name+pc">
                                                            {{pc}}
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button @click="roleAdd" type="button" class="btn btn-primary btn-block btn-lg"><i class="fa fa-save"></i>&nbsp;Add role</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> <!-- container -->

            </div> <!-- content -->
        </div>
    </layout>
</template>
<script>
    import Layout from "../../inc/Layout";
    import Dashboard from "../../../Mixins/Dashboard";
    export default {
        components: {Layout},

        mixins: [Dashboard],

        data () {
            return {
                importFileName:'',
                importFile:'',
                selectedPermissions:[],
                multiplePermissions:[],
                customConCat:'',
                customAllConCat:'',
                finalPermissions:[],
                allPermissions:[],
                roleForm:{
                    name:'',
                    slug:'',
                    permissions:[],
                    alls:[]
                },
                roleFormError:{
                    name:'',
                    slug:''
                }
            }
        },

        props: {
            permissions:Array
        },

        computed: {
            replaced:function () {
                var changed = this.roleForm.name.toLowerCase();
                this.roleForm.slug =  changed.split(" ").join('_');
                return this.roleForm.slug;
            }
        },

        created () {
            //
        },

        mounted () {
           //
        },
        methods: {
            customLoopAdd(value, index, array){
                if (!this.selectedPermissions.includes(this.customConCat+'.'+value)){
                    this.selectedPermissions.push(this.customConCat+'.'+value);
                }
            },
            customLoopRemove(value, index, array){
                var customIndex = this.selectedPermissions.indexOf(this.customConCat+'.'+value);
                if (customIndex !== -1){
                    this.selectedPermissions.splice(customIndex,1);
                }
            },
            customAllAppend(value,index,array){
                this.allPermissions.push(this.customAllConCat+'.'+value);
            },
            listAll(value,index,array){
                if (value.type === 'single'){
                    this.allPermissions.push(value.name);
                }else if (value.type === 'resource'){
                    this.allPermissions.push(value.name+'.view');
                    this.allPermissions.push(value.name+'.add');
                    this.allPermissions.push(value.name+'.edit');
                    this.allPermissions.push(value.name+'.delete');
                }else {
                    var tryOut = value.custom.split(", ");
                    this.customAllConCat = value.name;
                    tryOut.forEach(this.customAllAppend);
                    this.customAllConCat = '';
                }
            },
            checkType(per){
                if (per.type === 'resource'){
                    if (this.multiplePermissions.includes(per.name)){
                        if (!this.selectedPermissions.includes(per.name+'.'+'view')){this.selectedPermissions.push(per.name+'.'+'view');}
                        if (!this.selectedPermissions.includes(per.name+'.'+'add')){this.selectedPermissions.push(per.name+'.'+'add');}
                        if (!this.selectedPermissions.includes(per.name+'.'+'edit')){this.selectedPermissions.push(per.name+'.'+'edit');}
                        if (!this.selectedPermissions.includes(per.name+'.'+'delete')){this.selectedPermissions.push(per.name+'.'+'delete');}
                    }else {
                        var view = this.selectedPermissions.indexOf(per.name+'.'+'view');
                        this.selectedPermissions.splice(view,1);
                        var add = this.selectedPermissions.indexOf(per.name+'.'+'add');
                        this.selectedPermissions.splice(add,1);
                        var edit = this.selectedPermissions.indexOf(per.name+'.'+'edit');
                        this.selectedPermissions.splice(edit,1);
                        var del = this.selectedPermissions.indexOf(per.name+'.'+'delete');
                        this.selectedPermissions.splice(del,1);
                    }
                }else {
                    if (this.multiplePermissions.includes(per.name)){
                        this.customConCat = per.name;
                        var aara = per.custom.split(', ');
                        aara.forEach(this.customLoopAdd);
                        this.customConCat = '';
                    }else {
                        this.customConCat = per.name;
                        aara = per.custom.split(', ');
                        aara.forEach(this.customLoopRemove);
                        this.customConCat = '';
                    }
                }
            },
            roleAdd: function () {
                if (this.roleForm.name === '' || this.roleForm.slug === '') {
                    if (this.roleForm.name === '') {
                        this.roleFormError.name = 'Name required';
                    } else {
                        this.roleFormError.name = '';
                    }
                    if (this.roleForm.slug === '') {
                        this.roleFormError.slug = 'Slug required';
                    } else {
                        this.roleFormError.slug = '';
                    }

                } else {
                    this.roleForm.permissions = this.selectedPermissions;
                    this.selectedPermissions = [];
                    this.multiplePermissions = [];
                    this.permissions.forEach(this.listAll);
                    this.roleForm.alls = this.allPermissions;
                    this.$inertia.post('/admins/admin-roles',this.roleForm).then(()=>{
                        this.roleForm.name = '';
                        this.roleForm.slug = '';
                    })
                }

            },
            getImportFile(e){
                this.importFile = e.target.files[0];
                this.importFileName = 'Selected file: '+e.target.files[0].name;
            },
            importSubmit(){
                let formData = new FormData();
                formData.append('file', this.importFile);
                this.$inertia.post('/admins/admin-roles/excel/import',formData).then(()=>{
                    this.importFile = '';
                    const input = this.$refs.fileupload;
                    input.type = 'text';
                    input.type = 'file';
                    this.importFileName = '';
                })
            },
            childToMother(name){
                if (this.selectedPermissions.includes(name+'.view') && this.selectedPermissions.includes(name+'.add') && this.selectedPermissions.includes(name+'.edit') && this.selectedPermissions.includes(name+'.delete')){
                    if (!this.multiplePermissions.includes(name)){
                        this.multiplePermissions.push(name);
                    }
                }else {
                    var mother = this.multiplePermissions.indexOf(name);
                    if (mother !== -1){
                        this.multiplePermissions.splice(mother,1);
                    }

                }
            },
            childToMotherCustom(element){
                var array = element.custom.split(', ');
                for(var i = 0; i < array.length; i++){
                    if(this.selectedPermissions.indexOf(element.name+'.'+array[i]) === -1)
                    {
                        var position = this.multiplePermissions.indexOf(element.name)
                        if (position !== -1){
                            this.multiplePermissions.splice(position,1);
                        }
                        array = [];
                        return;

                    }
                }

                if (!this.multiplePermissions.includes(element.name)){
                    array = [];
                    this.multiplePermissions.push(element.name);
                }
            }
        }
    };
</script>
<style scoped>
    input[type=file] {
        cursor: pointer;
        width: 100%;
        height: 58px;
        overflow: hidden;
    }

    input[type=file]:before {
        width: 100%;
        height: 60px;
        font-size: 16px;
        line-height: 32px;
        content: 'Select your file';
        display: inline-block;
        background: white;
        border: 1px solid #000;
        padding: 0 10px;
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
    }

    input[type=file]::-webkit-file-upload-button {
        visibility: hidden;
    }
</style>

<template>
    <layout title="Admin | User List">
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li CLASS="active">
                                        User List
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-box">
                                <div>
                                    <div style="float: right; margin-top: 10px;">
                                        <input type="text" class="form-control" style="width: 200px" v-model="searchBox" @input="dataTable" placeholder="search">
                                    </div>
                                    <div style="float: right;margin-top: 10px;width: 250px;display: flex" class="form-group">
                                        <label for="orderBy" style="margin-top: 10px">Order by</label>
                                        <select name="result-perpage" v-model="orderBy" id="orderBy" @change="dataTable" class="form-control" style="width: 100px;margin-left: 5px">
                                            <option value="Newest">Latest</option>
                                            <option value="Oldest">Oldest</option>
                                            <option value="Name">Name</option>
                                        </select>
                                    </div>
                                    <div style="float: right;margin-top: 10px;width: 200px;" class="form-group">
                                        <select name="result-perpage" v-model="bulkAction" id="bulkAction" @change="trackBulkAction" class="form-control" style="width: 140px;margin-left: 5px">
                                            <option value="">Bulk Action</option>
                                            <option value="refresh">Refresh</option>
                                            <option value="print">Print</option>
                                            <option value="delete-selected">Delete selected</option>
                                            <option value="delete-all">Delete all</option>
                                            <option value="csv">Export csv</option>
                                            <option value="excel">Export excel</option>
                                            <option value="pdf">Export pdf</option>
                                        </select>
                                    </div>
                                    <div style="float: left;margin-top: 10px;width: 250px;display: flex" class="form-group">
                                        <label for="per-page" style="margin-top: 10px">Per page</label>
                                        <select name="result-perpage" id="per-page" class="form-control" v-model="perPage" @change="dataTable" style="width: 100px;margin-left: 5px">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                                </div>
                                <div v-if="isLoading" style="height: 40px;width: 150px;background: white;position: absolute;top: 30%;left: 50%;text-align: center;padding-top: 3px;font-family: monospace;font-size: 18px;box-shadow: 1px 1px 7px 2px #ccc;
}">Loading...</div>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-dark" style="overflow-x: scroll">
                                        <thead>
                                        <tr>
                                            <th scope="col" style="width: 30px">
                                                <div class="checkbox checkbox-primary">
                                                    <input id="checkbox00" v-model="multipleSelect" type="checkbox" @change="checkDetail">
                                                    <label for="checkbox00"> </label>
                                                </div>
                                            </th>
                                            <th scope="col" style="vertical-align: middle">Avatar</th>
                                            <th scope="col" style="width: 150px;vertical-align: middle">Email</th>
                                            <th scope="col" style="width: 150px;vertical-align: middle">First Name</th>
                                            <th scope="col" style="width: 150px;vertical-align: middle">Last Name</th>
                                            <th scope="col" style="width: 150px;vertical-align: middle">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="permission in permissionOutput.data" :key="permission.id">
                                            <th>
                                                <div class="checkbox checkbox-primary">
                                                    <input :id="permission.id" v-model="checkedValues" type="checkbox" @change="checkDetails" :value="permission.id">
                                                    <label :for="permission.id"> </label>
                                                </div>
                                            </th>
                                            <td style="vertical-align: middle">
                                                <img height="50px" width="50px" v-if="permission.profile_picture" :src="permission.profile_picture" alt="">
                                                <img height="50px" width="50px" v-else src="../../../../../public/admin/assets/images/icons/assistant.svg" alt="">
                                            </td>
                                            <td style="vertical-align: middle">{{permission.email}}</td>
                                            <td style="vertical-align: middle">{{permission.first_name}}</td>
                                            <td style="vertical-align: middle">{{permission.last_name}}</td>
                                            <td style="vertical-align: middle">
                                                <inertia-link  href="#" class="text-danger" data-toggle="tooltip" data-placement="top" title="Suspend admin" @click.prevent="suspendAdmin(permission.id)">
                                                    <i class="fa fa-trash"></i></inertia-link>
                                                &nbsp;<a href="#" class="text-warning" data-toggle="tooltip" data-placement="top" title="Edit info"><i class="fa fa-pencil" data-toggle="modal" data-target="#exampleModals" @click.prevent="permissionPopUp(permission)"></i></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="text-center" v-if="permissionOutput.data.length < 1">
                                    <img src="../../../../../public/admin/assets/images/empty.png" height="150px" width="150px" alt="no content">
                                    <h4>No content available</h4>
                                </div>
                                <span v-if="permissionOutput.data.length>0" style="margin-top: 20px;float: left">From {{from}} to {{to}} showing: <b>{{totalResults}} results</b></span>
                                <nav v-if="this.totalResults > 10" aria-label="Page navigation example" class="text-right">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item" v-if="currentPage>5 && last_page>10">
                                            <a class="page-link" href="#" @click.prevent="nextPage(1)">First Page</a>
                                        </li>
                                        <li v-if="previous_page_url" class="page-item">
                                            <a class="page-link" href="#"  @click.prevent="nextPage(currentPage - 1)">Previous</a>
                                        </li>
                                        <li v-else class="page-item disabled">
                                            <a class="page-link" href="javascript:void(0);">Previous</a>
                                        </li>
                                        <li v-if="last_page>3 && (currentPage)<= last_page"  class="page-item active">
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage)">{{currentPage}}</a>
                                        </li>

                                        <li v-if="last_page>3 && (currentPage+1)<= last_page"  class="page-item">
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage+1)">{{currentPage+1}}</a>
                                        </li>
                                        <li v-if="last_page>3 && (currentPage+2)<= last_page"  class="page-item" >
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage+2)">{{currentPage+2}}</a>
                                        </li>
                                        <li v-if="last_page>3 && (currentPage+3)<= last_page"  class="page-item">
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage+3)">{{currentPage+3}}</a>
                                        </li>
                                        <li v-if="last_page>3 && (currentPage+4)<= last_page"  class="page-item">
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage+4)">{{currentPage+4}}</a>
                                        </li>
                                        <li v-if="next_page_url" class="page-item">
                                            <a class="page-link" href="#" @click.prevent="nextPage(currentPage+1)">Next</a>
                                        </li>
                                        <li v-else class="page-item disabled">
                                            <a class="page-link" href="javascript:void(0);" >Next</a>
                                        </li>
                                        <li class="page-item" v-if="last_page>10">
                                            <a class="page-link" href="#" @click.prevent="nextPage(last_page)">Last Page</a>
                                        </li>
                                    </ul>
                                </nav>

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
                isLoading:false,
                bulkAction:'',
                customChildControl:'display-none',
                customEditChildControl:'display-none',
                customChildList:[],
                customEditChildList:[],
                perPage:10,
                activePagination:'',
                totalResults:this.permissions.total,
                searchBox:'',
                currentPage:this.permissions.current_page,
                orderBy:'Newest',
                from:this.permissions.from,
                to:this.permissions.to,
                previous_page_url:this.permissions.prev_page_url,
                next_page_url:this.permissions.next_page_url,
                last_page:this.permissions.last_page,
                checkedValues:[],
                multipleSelect:false,
                ptid:1,
                permissionOutput:this.permissions,
                permissionForm:{
                    name:'',
                    type:'',
                    custom:'',
                    customs:[]
                },
                permissionFormError:{
                    name:'',
                    type:'',
                    custom:''
                },
                permissionEditForm:{
                    name:'',
                    id:'',
                    type:'',
                    custom:'',
                    customs:[]
                },
                permissionEditFormError:{
                    name:'',
                    type:'',
                    custom:'',
                }
            }
        },

        props: {
            permissions:Object,
        },

        computed: {
            //
        },

        created () {
            //
        },

        mounted () {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '../admin/assets/pages/jquery.dashboard.js')
            document.head.appendChild(recaptchaScript)
        },
        methods: {
            addPermission(){
                if (this.permissionForm.name === '' || this.permissionForm.type === ''){
                    if (this.permissionForm.name === ''){
                        this.permissionFormError.name = 'Name field required';
                    }else {
                        this.permissionFormError.name = '';
                    }
                    if (this.permissionForm.type === ''){
                        this.permissionFormError.type = 'Select a type';
                    }else{
                        this.permissionFormError.type = '';
                    }

                }
                else {
                    if (this.permissionForm.type === 'custom' && this.customChildList.length < 1){
                        return this.permissionFormError.custom = 'Add child permissions first';
                    }
                    if (this.permissionForm.type === 'custom' && this.customChildList.length > 0){
                        this.permissionForm.customs = this.customChildList;
                    }
                    this.permissionFormError.name = '';
                    this.permissionFormError.type = '';
                    this.permissionFormError.custom = '';
                    this.permissionForm.name = this.permissionForm.name.toLowerCase();
                    this.permissionForm.name = this.permissionForm.name.split(' ').join('_');
                    this.$inertia.post('/admins/admin-permission',this.permissionForm).then(()=>{
                        this.permissionForm.name = '';
                        this.permissionForm.type = '';
                        this.permissionForm.custom = '';
                        this.customChildControl = 'display-none';
                        this.customChildList=[];
                        this.dataTable();
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
                this.$inertia.post('/admins/admin-permission/excel/import',formData).then(()=>{
                    this.importFile = '';
                    const input = this.$refs.fileupload;
                    input.type = 'text';
                    input.type = 'file';
                    this.importFileName = '';
                    this.dataTable();
                })
            },
            deletePermission(id){
                this.$confirm("Are you sure to delete the permission?","Warning","warning").then(() => {
                    this.$inertia.delete('/admins/admin-permission/'+id,{
                        replace: false,
                        preserveState: true,
                        preserveScroll: true,
                        only: [],
                    }).then(()=>{
                        this.dataTable();
                    });
                });

            },
            permissionPopUp(permission){
                this.permissionEditForm.id = permission.id;
                this.permissionEditForm.name = permission.name.split('_').join(' ');
                this.permissionEditForm.type = permission.type;
                if (this.permissionEditForm.type === 'custom'){
                    this.customEditChildControl = '';
                }else {
                    this.customEditChildControl='display-none';
                }
                if (permission.custom !== null){
                    console.log(permission);
                    this.customEditChildList = permission.custom.split(", ");
                }else {
                    this.customEditChildList = [];
                }

            },
            permissionEditSubmit(){
                if (this.permissionEditForm.name === '' || this.permissionEditForm.type === ''){
                    if (this.permissionEditForm.name === ''){
                        this.permissionEditFormError.name = 'Name field required';
                    }else {
                        this.permissionEditFormError.name = '';
                    }
                    if (this.permissionEditForm.type === ''){
                        this.permissionEditFormError.type = 'Select a type';
                    }else{
                        this.permissionEditFormError.type = '';
                    }

                }
                else {
                    if (this.permissionEditForm.type === 'custom' && this.customEditChildList.length < 1){
                        return this.permissionEditFormError.custom = 'Add child permissions first';
                    }
                    if (this.permissionEditForm.type === 'custom' && this.customEditChildList.length > 0){
                        this.permissionEditForm.customs = this.customEditChildList;
                    }
                    this.permissionEditFormError.name = '';
                    this.permissionEditFormError.type = '';
                    this.permissionEditFormError.custom = '';
                    this.permissionEditForm.name = this.permissionEditForm.name.toLowerCase();
                    this.permissionEditForm.name = this.permissionEditForm.name.split(' ').join('_');
                    this.$inertia.put('/admins/admin-permission/'+this.permissionEditForm.id, this.permissionEditForm).then(()=>{
                        this.permissionEditForm.name = '';
                        this.permissionEditForm.type = '';
                        this.permissionEditForm.custom = '';
                        this.customEditChildControl = 'display-none';
                        this.customEditChildList=[];
                        $("[data-dismiss=modal]").trigger({ type: "click" });
                        this.dataTable();
                    });
                }

            },
            setValue(value){
                this.checkedValues.push(value.id);
            },
            checkDetail(){
                if (this.multipleSelect){
                    this.checkedValues=[];
                    this.permissionOutput.data.forEach(this.setValue)
                }else{
                    this.checkedValues = [];

                }
            },
            checkDetails(){
                this.multipleSelect = this.checkedValues.length === this.permissionOutput.data.length;
            },
            multipleDelete() {
                this.$confirm("Are you sure to delete the permissions?","Warning","warning").then(() => {
                    if (this.checkedValues.length > 0){
                        this.$inertia.delete('/admins/admin-permission/multiple/' + this.checkedValues, {
                            replace: false,
                            preserveState: true,
                            preserveScroll: false,
                            only: [],
                        }).then(() => {
                            this.multipleSelect = false;
                            this.checkedValues=[];
                            this.dataTable();
                        });
                    }else {
                        this.$toast.open({
                            message: 'No items selected',
                            type: "error",
                            position:"top-right",
                            duration: 5000,
                            dismissible: true
                        })
                    }
                });

            },
            allDelete(){
                this.$confirm("Are you sure to delete all permission?","Warning","warning").then(() => {
                    this.$inertia.post('/admins/admin-permission/delete-all',{
                        replace: false,
                        preserveState: true,
                        preserveScroll: true,
                        only: [],
                    }).then(()=>{
                        this.dataTable();
                    });
                });
            },
            permissionTypeTraker(){
                if (this.permissionForm.type === 'custom'){
                    this.customChildControl = '';
                }else{
                    this.customChildControl = 'display-none';
                }
            },
            permissionEditTypeTraker(){
                if (this.permissionEditForm.type === 'custom'){
                    this.customEditChildControl = '';
                }else{
                    this.customEditChildControl = 'display-none';
                }
            },
            customChildAppend(){
                if (this.permissionForm.custom === ''){
                    this.permissionFormError.custom = 'Enter child permission name';
                }else {
                    if (this.customChildList.includes(this.permissionForm.custom)){
                        this.permissionFormError.custom = 'You have added this already';
                    }else {
                        this.permissionFormError.custom = '';
                        this.permissionForm.custom = this.permissionForm.custom.toLowerCase();
                        this.permissionForm.custom = this.permissionForm.custom.split(' ').join('_');
                        this.customChildList.push(this.permissionForm.custom);
                        this.permissionForm.custom = '';
                    }

                }
            },
            removeCustom(index){
                return this.customChildList.splice(index,1);
            },
            customEditChildAppend(){
                if (this.permissionEditForm.custom === ''){
                    this.permissionFormError.custom = 'Enter child permission name';
                }else {
                    if (this.customEditChildList.includes(this.permissionEditForm.custom)){
                        this.permissionEditFormError.custom = 'You have added this already';
                    }else {
                        this.permissionEditFormError.custom = '';
                        this.permissionEditForm.custom = this.permissionEditForm.custom.toLowerCase();
                        this.permissionEditForm.custom = this.permissionEditForm.custom.split(' ').join('_');
                        this.customEditChildList.push(this.permissionEditForm.custom);
                        this.permissionEditForm.custom = '';
                    }

                }
            },
            removeEditCustom(index){
                return this.customEditChildList.splice(index,1);
            },
            trackBulkAction(){
                if (this.bulkAction === 'print'){
                    this.bulkAction = '';
                    var url = '/admins/admin-permission/print/export';
                    var win = window.open(url, '_blank');
                    win.focus();
                }else if (this.bulkAction === 'pdf'){
                    this.bulkAction = '';
                    url = '/admins/admin-permission/pdf/export';
                    win = window.open(url, '_blank');
                    win.focus();

                }else if (this.bulkAction === 'refresh'){
                    this.bulkAction = '';
                    this.dataTable();
                }else if (this.bulkAction === 'excel'){
                    this.bulkAction = '';
                    url = '/admins/admin-permission/excel/export';
                    win = window.open(url, '_blank');
                    win.focus();
                }else if (this.bulkAction === 'csv'){
                    this.bulkAction = '';
                    url = '/admins/admin-permission/csv/export';
                    win = window.open(url, '_blank');
                    win.focus();

                }else if (this.bulkAction === 'delete-selected'){
                    this.multipleDelete();
                }else if (this.bulkAction === 'delete-all'){
                    this.bulkAction = '';
                    this.allDelete();

                }
            },
            signInAsNewAdmin(id){
                this.$inertia.post('/admins/login/others',{id:id})
            },
            holdAdmin(id){
                this.$confirm("Are you sure to hold this admin?","Warning","warning").then(() => {
                    this.$inertia.delete('/admins/hold/admin/'+id,{
                        replace: false,
                        preserveState: false,
                        preserveScroll: true,
                        only: [],
                    }).then(()=>{
                        //
                    });
                });
            },
            suspendAdmin(id){
                this.$confirm("Are you sure to suspend this admin?","Warning","warning").then(() => {
                    this.$inertia.delete('/admins/suspend/admin/'+id,{
                        replace: false,
                        preserveState: false,
                        preserveScroll: true,
                        only: [],
                    }).then(()=>{
                        //
                    });
                });
            },
            //datatable methods
            dataTable(){
                this.isLoading = true;
                //this.$loading(true);
                axios.get('/admins/admin-resource/', {
                    params: {
                        page: this.currentPage,
                        perPage:this.perPage,
                        search:this.searchBox,
                        orderBy:this.orderBy
                    }
                })
                    .then((response)=>{
                        this.permissionOutput = response.data;
                        this.totalResults = response.data.total;
                        this.from = response.data.from;
                        this.to = response.data.to;
                        this.currentPage = response.data.current_page;
                        this.previous_page_url = response.data.prev_page_url;
                        this.next_page_url = response.data.next_page_url;
                        this.last_page = response.data.last_page;
                        this.isLoading = false;
                        // this.$loading(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            nextPage(page){
                this.currentPage = page;
                this.dataTable();
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

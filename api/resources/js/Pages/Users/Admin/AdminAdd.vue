<template>
    <layout title="Admin | Admin Add">
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
                                        Admin Add
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
                                <h4 class="header-title m-t-0 m-b-30">Invite</h4>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-mail-reply"></i></span>
                                            <input type="text" v-model="invite.email" id="example-input1-group1" name="example-input1-group1" class="form-control" placeholder="Mail">
                                        </div>
                                        <select style="margin-top: 15px" name="roles" v-model="invite.role" @change="addInviteRole" id="roles-invite" class="form-control">
                                            <option value="">Select roles</option>
                                            <option v-for="role in roles" :value="role.slug">{{role.name}}</option>
                                        </select>
                                            <div v-if='invite.roles.length>0' class="col-md-12">
                                                <h3 class="text-primary">Selected Roles</h3>
                                                <ul style="list-style: none">
                                                    <li v-for="(rol,index) in invite.roles"><i @click="deleteFromInviteRoleList(index)" class="mdi mdi-delete text-danger"></i>&nbsp; {{rol}}</li>
                                                </ul>
                                            </div>
                                        <span class="text-danger">{{inviteError.roles}}</span>
                                        <button @click.prevent="inviteNewAdmin" class="btn btn-primary btn-block" style="margin-top: 10px"><i class="fa fa-mail-forward"></i>&nbsp;Invite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-box">
                                <h4 class="header-title m-t-0 m-b-30">Register manually</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6" style="margin-top: 10px;">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-mail-reply"></i></span>
                                            <input type="text" v-model="register.email" name="example-input1-group1" class="form-control" placeholder="Mail">
                                        </div>
                                        <span class="text-danger">{{registerError.email}}</span>
                                    </div>

                                    <div class="col-md-6" style="margin-top: 10px">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                            <input type="password" v-model="register.password" name="example-input1-group1" class="form-control" placeholder="Password">
                                        </div>
                                        <span class="text-danger">{{registerError.password}}</span>
                                    </div>

                                    <div class="col-md-6" style="margin-top: 10px">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                            <input type="password" v-model="register.confirm_password" name="example-input1-group1" class="form-control" placeholder="Password Confirmation">
                                        </div>
                                        <span class="text-danger">{{registerError.confirm_password}}</span>
                                    </div>

                                    <div class="col-md-6" style="margin-top: 10px">
                                        <select name="roles" v-model="register.role" @change="addRole" id="roles" class="form-control">
                                            <option value="">Select roles</option>
                                            <option v-for="role in roles" :value="role.slug">{{role.name}}</option>
                                        </select>
                                        <span class="text-danger">{{registerError.roles}}</span>
                                    </div>
                                    <hr>
                                    <div v-if='register.roles.length>0' class="col-md-12">
                                        <h3 class="text-primary">Selected Roles</h3>
                                        <ul style="list-style: none">
                                            <li v-for="(rol,index) in register.roles"><i @click="deleteFromRegisterRoleList(index)" class="mdi mdi-delete text-danger"></i>&nbsp; {{rol}}</li>
                                        </ul>
                                    </div>
                                    <hr>
                                    <div class="col-md-12" style="margin-top: 10px">
                                        <button type="button" @click.prevent="saveAdmin" class="btn btn-primary btn-block"><i class="fa fa-save"></i>&nbsp; Register User</button>
                                    </div>
                                    <div class="col-md-12" style="margin-top: 10px">
                                        <p>Tops*:</p>
                                        <ul>
                                            <li>Password should be at least 8 character</li>
                                            <li>Password should include at least one upper case and one lower case letter</li>
                                            <li>Password should include at least one regular expression</li>
                                            <li>chose roles based on permission list.</li>
                                            <li>If a permission disables in one roles and enables in another roles user still cant excess on this permission</li>
                                        </ul>
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
    import Dashboard from "../../../Mixins/Dashboard";
    import Layout from "../../inc/Layout";
    export default {
        components: {Layout},
        mixins: [Dashboard],
        data () {
            return {
                isAdvance:false,
                invite:{
                    email:'',
                    role:'',
                    roles:[]
                },
                inviteError:{
                    email:'',
                    roles:''
                },
                register:{
                    email:'',
                    password:'',
                    confirm_password:'',
                    role:'',
                    roles:[],
                    permissions:[],
                    sendMail:false
                },
                registerError:{
                    email:'',
                    password:'',
                    confirm_password:'',
                    roles:'',
                }
            }
        },

        props: {
            roles:Array,
            permissions:Array
        },

        computed: {
            //
        },

        created () {
            //
        },

        mounted () {
            //
        },

        methods: {
            inviteNewAdmin(){
                this.$inertia.post('/admins/admin-resource/invite/admin',this.invite).then(()=>{
                    this.invite.email = '';
                    this.invite.roles = [];
                });
            },
            addRole(){
                if (this.register.role !== '' && !this.register.roles.includes(this.register.role)){
                    this.register.roles.push(this.register.role);
                    this.register.role = '';
                    this.registerError.roles = '';
                }else{
                    if (this.register.roles.includes(this.register.role)){
                        return this.registerError.roles = 'Almost selected';
                    }
                    this.registerError.roles = '';

                }
            },
            deleteFromRegisterRoleList(index){
                this.register.roles.splice(index,1);
            },
            deleteFromInviteRoleList(index){
                this.invite.roles.splice(index,1);
            },
            saveAdmin(){
                if (this.register.email === '' || this.register.password === '' || this.register.confirm_password === '' || this.register.password !== this.register.confirm_password || this.register.roles.length<1){
                    this.register.email === '' ? this.registerError.email = 'Email required' : this.registerError.email = '';
                    this.register.password === '' ? this.registerError.password = 'Password required' : this.registerError.password = '';
                    this.register.confirm_password === '' ? this.registerError.confirm_password = 'Confirm password required' : this.registerError.confirm_password = '';
                    this.register.password !== this.register.confirm_password ? this.registerError.password = 'Password doesnt match' : this.registerError.pasword = '';
                    this.register.roles.length<1 ? this.registerError.roles = 'No roles selected' : this.registerError.roles = '';
                }else {
                    this.$inertia.post('/admins/admin-resource',this.register).then(()=>{
                        this.register.email = '';
                        this.register.password = '';
                        this.register.confirm_password = '';
                        this.register.roles = [];
                        this.register.sendMail = false;
                    });
                }
            },
            addInviteRole(){
                if (this.invite.role !== '' && !this.invite.roles.includes(this.invite.role)){
                    this.invite.roles.push(this.invite.role);
                    this.invite.role = '';
                    this.inviteError.roles = '';
                }else{
                    if (this.invite.roles.includes(this.invite.role)){
                        return this.inviteError.roles = 'Almost selected';
                    }
                    this.inviteError.roles = '';

                }
            }
        }
    };
</script>


<template>
<div class="bg-transparent">
    <!-- HOME -->
    <section>
        <div class="container-alt">
            <div class="row">
                <div class="col-sm-12">
                    <div class="wrapper-page">
                        <div class="m-t-40 account-pages">
                            <div class="text-center account-logo-box">
                                <h2 class="text-uppercase">
                                    <a href="/" class="text-success">
                                        <span>Sign In</span>
                                    </a>
                                </h2>
                            </div>
                            <div class="account-content">
                                <form class="form-horizontal" action="#">
                                    <div v-if="errorMsg !== ''" class="alert alert-danger" role="alert">
                                        {{errorMsg}}
                                    </div>

                                    <div class="form-group ">
                                        <div class="col-xs-12">
                                            <input  class="form-control" type="email" disabled="" :value="email">
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <div class="col-xs-12">
                                            <input v-model="registerForm.first_name" :class="registerFormClassError.first_name" class="form-control"  type="text" required="" placeholder="First name">
                                        </div>
                                        <span class="text-danger">{{registerFormError.first_name}}</span>
                                    </div>
                                    <div class="form-group ">
                                        <div class="col-xs-12">
                                            <input v-model="registerForm.last_name" :class="registerFormClassError.last_name" class="form-control" type="text" required="" placeholder="Last name">
                                        </div>
                                        <span class="text-danger">{{registerFormError.last_name}}</span>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <input v-model="registerForm.password" :class="registerFormClassError.password" class="form-control" :type="type" required="" placeholder="Password">
                                            <i class="fa fa-eye posta" v-if="type === 'password'" @click="show"></i>
                                            <i class="fa fa-eye-slash posta" v-else @click="show"></i>
                                            <span class="text-danger">{{registerFormError.password}}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <input :class="registerFormClassError.confirm_password" v-model="registerForm.confirm_password" class="form-control" :type="type" placeholder="Confirm password">
                                            <span class="help-block"><small>Password should be at least 9 character . Password field should contain at least one uppercase one lowercase and one regular expression</small></span>
                                            <span class="text-danger">{{registerFormError.confirm_password}}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <div class="checkbox checkbox-success">
                                                <input v-model="accept" id="checkbox-signup" type="checkbox">
                                                <label for="checkbox-signup">I accept <a data-toggle="modal" data-target="#registerControl" href="javascript:void(0)">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group account-btn text-center m-t-10">
                                        <div class="col-xs-12">
                                            <button v-if="accept"  @click.prevent="saveRegister" class="btn w-md btn-danger btn-bordered waves-effect waves-light" type="button">
                                                <span v-if="loads"><i class="fa fa-refresh fa-spin"></i></span>
                                                <span v-else>Register</span></button>
                                            <button v-else class="btn w-md btn-danger btn-bordered waves-effect waves-light" type="button" disabled="">Register</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <!-- end card-box-->
                    </div>
                    <!-- end wrapper -->
                </div>
            </div>
        </div>
    </section>
    <!-- END HOME -->
    <div class="modal fade " id="registerControl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog model-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Terms & Conditions</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        components: {},
        mixins: [],
        data () {
            return {
                errorMsg:'',
                loads:false,
                accept:false,
                type:'password',
                registerForm:{
                    first_name : '',
                    last_name :  '',
                    email: this.email,
                    password:'',
                    confirm_password:'',
                    slug:this.slug
                },
                registerFormError:{
                    first_name : '',
                    last_name :  '',
                    password:'',
                    confirm_password:'',
                },
                registerFormClassError:{
                    first_name : '',
                    last_name :  '',
                    password:'',
                    confirm_password:'',
                }
            }
        },
        watch: {
            errors(){
                if(Object.keys(this.errors).length>0){
                     this.errorMsg = this.errors[Object.keys(this.errors)[0]][0];
                }
            },
            fault(){
                if (this.$page.fault != null){
                    this.errorMsg = this.$page.fault;
                }
            },
        },
        props: {
            email:String,
            slug:String
        },

        computed: {
            success(){
                return this.$page.success;
            },
            errors(){
                if(Object.keys(this.errors).length>0){
                    this.errorMsg = this.errors[Object.keys(this.errors)[0]][0];
                }
                return this.$page.errors;
            },
            fault(){
                if (this.$page.fault != null){
                    this.errorMsg = this.$page.fault;
                }
                return this.$page.fault;
            },
        },

        created () {
            //
        },

        mounted () {
            document.title = 'Admin | Register';
        },

        methods: {
            saveRegister(){
                this.loads = true;
                if (this.registerForm.first_name === '' || this.registerForm.last_name === '' || this.registerForm.password === '' || this.registerForm.confirm_password !== this.registerForm.password){
                    if (this.registerForm.first_name === ''){
                        this.registerFormError.first_name = 'First name field required';
                        this.registerFormClassError.first_name = 'red';
                    }else {
                        this.registerFormError.first_name = '';
                        this.registerFormClassError.first_name = '';
                    }
                    if (this.registerForm.last_name === ''){
                        this.registerFormError.last_name = 'Last name field required';
                        this.registerFormClassError.last_name = 'red';
                    }else {
                        this.registerFormError.last_name = '';
                        this.registerFormClassError.last_name = '';
                    }

                    if (this.registerForm.password === ''){
                        this.registerFormError.password = 'Password field required';
                        this.registerFormClassError.password = 'red';
                    }else {
                        this.registerFormError.password = '';
                        this.registerFormClassError.password = '';
                    }

                    if (this.registerForm.confirm_password !== this.registerForm.password){
                        this.registerFormError.confirm_password = 'Didn\'t match with password';
                        this.registerFormClassError.confirm_password = 'red';
                    }else {
                        this.registerFormError.confirm_password = '';
                        this.registerFormClassError.confirm_password = '';
                    }
                    this.loads = false;

                }else {
                    this.$inertia.post('/admins/admin-resource/invite/accept',this.registerForm).then(()=>{
                        this.loads = false;
                        this.registerForm.first_name = '';
                        this.registerForm.last_name = '';
                        this.registerForm.password = '';
                        this.registerForm.confirm_password = '';
                        this.registerFormError.first_name = '';
                        this.registerFormError.last_name = '';
                        this.registerFormError.password = '';
                        this.registerFormError.confirm_password = '';
                        this.registerFormClassError.first_name = '';
                        this.registerFormClassError.last_name = '';
                        this.registerFormClassError.password = '';
                        this.registerFormClassError.confirm_password = '';
                    });
                }
            },
            show(){
                if (this.type === 'password'){
                    this.type = 'text';
                }else{
                    this.type = 'password';
                }
            }
        }
    };
</script>
<style scoped>
    .posta{
        position: absolute;
        right: 30px;
        top: 10px;
        cursor: pointer;
    }
    .red{
        border: 1px solid red !important;
    }
</style>

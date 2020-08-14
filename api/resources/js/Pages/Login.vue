<template>
    <div>
        <div class="bg-transparent">
            <section>
                <div class="container-alt">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="wrapper-page">
                                <div class="m-t-40 account-pages">
                                    <div class="text-center account-logo-box">
                                        <h2 class="text-uppercase">
                                            <a href="/" class="text-success">
                                                <span>Login</span>
                                            </a>
                                        </h2>
                                    </div>
                                    <div class="account-content">
                                        <form class="form-horizontal" action="#">
                                            <div v-if="errorMsg !== ''" class="alert alert-danger" role="alert">
                                                {{errorMsg}}
                                            </div>
                                            <div v-if="successMsg !== ''" class="alert alert-success" role="alert">
                                                {{successMsg}}
                                            </div>
                                            <div class="form-group ">
                                                <div class="col-xs-12">
                                                    <input class="form-control" :class="loginFormErrorClass.email" v-model="loginForm.email" type="text" required="" :placeholder="'email'">
                                                    <span class="text-danger">{{loginFormError.email}}</span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-xs-12">
                                                    <input class="form-control" :class="loginFormErrorClass.password" v-model="loginForm.password" :type="type" required="" :placeholder="__('password')">
                                                    <i class="fa fa-eye posta" v-if="type === 'password'" @click="show"></i>
                                                    <i class="fa fa-eye-slash posta" v-else @click="show"></i>
                                                    <span class="text-danger">{{loginFormError.password}}</span>
                                                </div>
                                            </div>
                                            <div class="form-group ">
                                                <div class="col-xs-12">
                                                    <div class="checkbox checkbox-success">
                                                        <input id="checkbox-signup" v-model="loginForm.remember" type="checkbox">
                                                        <label for="checkbox-signup">
                                                            {{__('rememberMe')}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group text-center m-t-30">
                                                <div class="col-sm-12">
                                                    <inertia-link href="/admins/forget" class="text-muted"><i class="fa fa-lock m-r-5"></i> {{__('forgotPassword?')}}</inertia-link>
                                                </div>
                                            </div>
                                            <div class="form-group account-btn text-center m-t-10">
                                                <div class="col-xs-12">
                                                    <button class="btn w-md btn-bordered btn-danger waves-effect waves-light" type="button" @click.prevent="login">
                                                        <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                        <span v-else>{{__('logIn')}}</span>

                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <!-- end card-box-->
                                <div class="row m-t-50">

                                </div>
                            </div>
                            <!-- end wrapper -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Title from '../Mixins/Title'
    export default {
        components: {},
        mixins: [Title('Admin| Login')],
        data () {
            return {
                isLoading:false,
                type:'password',
                errorMsg:'',
                successMsg:'',
                loginForm:{
                    email:'',
                    password:'',
                    remember:false
                },
                loginFormError:{
                    email:'',
                    password:'',
                },
                loginFormErrorClass:{
                    email:'',
                    password:'',
                },

            }
        },
        props: {
            //
        },
        computed: {
            success(){
                if (this.$page.success != null){
                    this.successMsg = this.$page.success;
                }
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
        watch: {
            success(){
                if (this.$page.success != null){
                    this.successMsg = this.$page.success;
                }
            },
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
        created () {
            //
        },
        mounted () {
            document.title = 'Admin | Login';
        },
        methods: {
            show(){
                if (this.type === 'password'){
                    this.type = 'text';
                }else{
                    this.type = 'password';
                }
            },
            login(){
                if (this.loginForm.email === '' || this.loginForm.password === ''){
                    if (this.loginForm.email === ''){
                        this.loginFormError.email = 'Email required';
                        this.loginFormErrorClass.email = 'red';
                    }else {
                        this.loginFormError.email = '';
                        this.loginFormErrorClass.email = '';
                    }
                    if (this.loginForm.password === ''){
                        this.loginFormError.password = 'Password required';
                        this.loginFormErrorClass.password = 'red';
                    }else {
                        this.loginFormError.password = '';
                        this.loginFormErrorClass.password = '';
                    }
                    this.isLoading = false;
                }else {
                    this.isLoading = true;
                    this.$inertia.post('/admins/login',this.loginForm).then(()=>{
                        this.loginFormError.password = '';
                        this.loginFormErrorClass.password = '';
                        this.loginFormError.email = '';
                        this.loginFormErrorClass.email = '';
                        this.isLoading = false;
                    });

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

<template>
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
                                        <span>{{__('lockScreen')}}</span>

                                    </a>
                                </h2>
                            </div>
                            <div class="account-content">
                                <div class="text-center m-b-20">
                                    <div class="m-b-20">
                                        <img v-if="$page.auth.user.profile_picture" :src="$page.auth.user.profile_picture" class="img-circle img-thumbnail thumb-lg" alt="profile-image">
                                        <img v-else  src="../../../public/admin/assets/images/icons/assistant.svg" class="img-circle img-thumbnail thumb-lg" alt="profile-image">
                                    </div>

                                    <p class="text-muted m-b-0 font-13">{{__('enterPasswordAccessAdmin')}}</p>
                                </div>
                                <form class="form-horizontal" action="#">
                                    <div v-if="errorMsg !== ''" class="alert alert-danger" role="alert">
                                        {{errorMsg}}
                                    </div>
                                    <div v-if="successMsg !== ''" class="alert alert-success" role="alert">
                                        {{successMsg}}
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <input class="form-control" :class="lockFormErrorClass.password" v-model="lockForm.password" :type="type" :placeholder="__('password')">
                                            <i class="fa fa-eye posta" v-if="type === 'password'" @click="show"></i>
                                            <i class="fa fa-eye-slash posta" v-else @click="show"></i>
                                            <span class="text-danger">{{lockFormError.password}}</span>
                                        </div>
                                    </div>

                                    <div class="form-group account-btn text-center m-t-10">
                                        <div class="col-xs-12">
                                            <button class="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                                   @click.prevent="unlock" type="button">
                                                <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                <span v-else>{{__('unlock')}}</span>


                                            </button>
                                        </div>
                                    </div>

                                </form>

                                <div class="clearfix"></div>

                            </div>
                        </div>
                        <!-- end card-box-->


                        <div class="row m-t-50">
                            <div class="col-sm-12 text-center">
                                <p class="text-muted">Want to go out? <a @click.prevent="logout" href="javascript:void(0)" class="text-primary m-l-5"><b>Logout</b></a></p>
                            </div>
                        </div>

                    </div>
                    <!-- end wrapper -->

                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
    export default {
        components: {},

        mixins: [],

        data () {
            return {
                isLoading:false,
                type:'password',
                successMsg:'',
                errorMsg:'',
                lockForm:{
                    password:''
                },
                lockFormError:{
                    password:''
                },
                lockFormErrorClass:{
                    password:''
                }
            }
        },

        props: {
            //
        },

        computed: {
            errors(){
                return this.$page.errors;
            },
            fault(){
                return this.$page.fault;
            },
        },

        watch: {
            success(){
                if (this.$page.success != null){
                    return this.successMsg = this.$page.success;
                }
            },
            errors(){
                if(Object.keys(this.errors).length>0){
                   return  this.errorMsg = this.errors[Object.keys(this.errors)[0]][0];
                }
            },
            fault(){
                if (this.$page.fault != null){
                   return  this.errorMsg = this.$page.fault;
                }
            },
        },

        created () {
            //
        },

        mounted () {
            document.title = 'Admin | Locked';
        },

        methods: {
            show(){
                if (this.type === 'password'){
                    this.type = 'text';
                }else{
                    this.type = 'password';
                }
            },
            unlock(){
                this.isLoading=true;
                if (this.lockForm.password === ''){
                    this.lockFormError.password = 'Password required';
                    this.lockFormErrorClass.password = 'red';
                    this.isLoading=false;
                }else {
                    this.$inertia.post('/admins/unlock',this.lockForm).then(()=>{
                        this.isLoading=false;
                        this.lockFormError = '';
                        this.lockFormErrorClass = '';
                    });
                }
            },
            logout(){
                this.$inertia.post('/admins/logout/lock');
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

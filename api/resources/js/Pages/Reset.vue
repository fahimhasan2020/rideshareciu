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
                                            <span>{{__('resetPassword')}}</span>
                                        </a>
                                    </h2>
                                </div>
                                <div class="account-content">
                                    <div class="text-center m-b-20">
                                        <p class="text-muted m-b-0 font-13">{{__('resetNewPassword')}}</p>
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
                                                <input v-model="formReset.password" :class="formResetClassError.password" class="form-control" :type="type"
                                                       :placeholder="__('newPassword')">
                                                <i class="fa fa-eye posta" v-if="type === 'password'" @click="show"></i>
                                                <span class="text-danger">{{formResetError.password}}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-12">
                                                <input v-model="formReset.password_confirmation" :class="formResetClassError.password_confirmation" class="form-control" :type="type"
                                                       :placeholder="__('passwordConfirmation')">
                                                <span class="text-danger">{{formResetError.password_confirmation}}</span>
                                            </div>
                                        </div>

                                        <div class="form-group account-btn text-center m-t-10">
                                            <div class="col-xs-12">
                                                <button @click.prevent="resetPassword" class="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                                        type="button">
                                                    <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                    <span v-else>{{__('resetPassword')}}</span>
                                                </button>
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
    </div>
</template>

<script>
    export default {
        components: {},

        mixins: [],

        data () {
            return {
                type:'password',
                formReset:{
                    password:'',
                    password_confirmation:'',
                    code:'',
                    email:''
                },
                formResetError:{
                    password:'',
                    password_confirmation:''
                },
                formResetClassError:{
                    password:'',
                    password_confirmation:''
                },
                isLoading:false,
                successMsg:'',
                errorMsg:''
            }
        },

        props: {
            code:String,
            email:String
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
            document.title = 'Admin | Reset password';
        },

        methods: {
            show(){
                if (this.type === 'password'){
                    this.type = 'text';
                }else{
                    this.type = 'password';
                }
            },
            resetPassword(){
                this.isLoading = true;
                this.formReset.code = this.code;
                this.formReset.email = this.email;
                if (this.formReset.password === '' || this.formReset.password_confirmation !== this.formReset.password){
                    this.formResetError.password = 'Password required';
                    this.formResetError.password_confirmation = 'Password required';
                    this.formResetClassError.password = 'red';
                    this.formResetClassError.password_confirmation = 'red';
                    this.isLoading = false;
                }else {
                    this.$inertia.post('/admins/reset',this.formReset).then(()=>{
                        this.isLoading = false;
                        this.formResetError.password_confirmation = '';
                        this.formResetClassError.password_confirmation = '';
                        this.formResetError.password = '';
                        this.formResetClassError.password = '';
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

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
                                        <span>{{__('forgotPassword')}}</span>
                                    </a>
                                </h2>
                            </div>
                            <div class="account-content">
                                <div class="text-center m-b-20">
                                    <p class="text-muted m-b-0 font-13">enter something </p>
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
                                            <input v-model="formReset.email" :class="formResetClassError.email" class="form-control" type="email"
                                                   :placeholder="__('enterEmail')">
                                            <span class="text-danger">{{formResetError.email}}</span>
                                        </div>
                                    </div>

                                    <div class="form-group account-btn text-center m-t-10">
                                        <div class="col-xs-12">
                                            <button @click.prevent="verifyEmail" class="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                                    type="button">
                                                <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                <span v-else>{{__('sendEmail')}}</span>
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
                                <p class="text-muted">{{__('alreadyAccount')}}<inertia-link href="/admins/login" class="text-primary m-l-5"><b>{{__('signIn')}}</b></inertia-link></p>
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
                formReset:{
                    email:''
                },
                formResetError:{
                    email:''
                },
                formResetClassError:{
                    email:''
                },
                isLoading:false,
                successMsg:'',
                errorMsg:''
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
           document.title = 'Admin | Forget password';
        },

        methods: {
            verifyEmail(){
                this.isLoading = true;
                if (this.formReset.email === ''){
                    this.formResetError.email = 'Email required';
                    this.formResetClassError.email = 'red';
                    this.isLoading = false;
                }else {
                    this.$inertia.post('/admins/forget',this.formReset).then(()=>{
                        this.isLoading = false;
                        this.formResetError.email = '';
                        this.formResetClassError.email = '';
                    });
                }
            }
        }
    };
</script>
<style scoped>
    .red{
        border: 1px solid red !important;
    }
</style>

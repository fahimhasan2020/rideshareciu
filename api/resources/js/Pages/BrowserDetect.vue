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
                                            <span>Unknown browser</span>
                                        </a>
                                    </h2>
                                </div>
                                <div class="account-content">
                                    <div v-if="sent">
                                        <div class="text-center m-b-20">
                                            <p class="text-muted m-b-0 font-13">
                                                Otp has been sent to your email/phone number . Put the otp here.
                                            </p>
                                        </div>
                                        <div v-if="errorMsg !== ''" class="alert alert-danger" role="alert">
                                            {{errorMsg}}
                                        </div>
                                        <div v-if="successMsg !== ''" class="alert alert-success" role="alert">
                                            {{successMsg}}
                                        </div>
                                        <form class="form-horizontal" action="#">
                                            <div class="form-group text-center">
                                                <PincodeInput
                                                    v-model="otp"
                                                    placeholder="0"
                                                    length="6"
                                                />
                                                <span v-if="otpError" class="text-center text-danger">{{otpError}}</span>
                                            </div>
                                            <div class="form-group account-btn text-center m-t-10">
                                                <div class="col-xs-12">
                                                    <button @click.prevent="verifyOtp" class="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                                            type="button">
                                                        <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                        <span v-else>Verify</span>
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <form v-else class="form-horizontal" action="#">
                                        <div class="text-center m-b-20">
                                            <p class="text-muted m-b-0 font-13">If you have access to your email or phone number then we shall send the otp to your email</p>
                                        </div>
                                        <div v-if="errorMsg !== ''" class="alert alert-danger" role="alert">
                                            {{errorMsg}}
                                        </div>
                                        <div v-if="successMsg !== ''" class="alert alert-success" role="alert">
                                            {{successMsg}}
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-12">
                                                <div v-if="$page.auth.user.email">
                                                    <input type="radio" v-model="via" id="male" name="option" value="email">
                                                    <label for="male">Send OTP to {{$page.auth.user.email}}</label><br>
                                                </div>
                                                <div v-if="$page.auth.user.phone_number">
                                                    <input type="radio" v-model="via" id="female" name="option" value="phone">
                                                    <label for="female">Send OTP to {{$page.auth.user.phone_number}}</label><br>

                                                </div>
                                                <span v-if="viaError"  class="text-center text-danger">{{viaError}}</span>
                                            </div>
                                        </div>
                                        <div class="form-group account-btn text-center m-t-10">
                                            <div class="col-xs-12">
                                                <button @click.prevent="verifyBrowser" class="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                                        type="button">
                                                    <span v-if="isLoading"><i class="fa fa-refresh fa-spin"></i></span>
                                                    <span v-else>Send OTP</span>
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
                                    <p class="text-muted">Want to access another account?<inertia-link href="#" @click.prevent="logout" class="text-primary m-l-5"><b>Logout</b></inertia-link></p>
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
    import PincodeInput from 'vue-pincode-input';
    export default {
        components: {PincodeInput},
        mixins: [],
        data () {
            return {
                otp:null,
                sent:false,
                via:null,
                viaError:'',
                isLoading:false,
                successMsg:'',
                errorMsg:'',
                otpError:''
            }
        },
        props: {
            //
        },
        computed: {
            success(){
                return this.$page.success;
            },
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
            document.title = 'Admin | Unknown browser';
        },
        methods: {
            verifyBrowser(){
                this.isLoading = true;
                if (this.via === null || this.via === ''){
                    this.isLoading = false;
                    this.viaError = 'You haven\'t selected any method';
                }else{
                    this.viaError = '';
                    axios.post('/admins/verify/trusted/browser',{
                        via:this.via
                    }).then(()=>{
                        this.isLoading = false;
                        this.sent = true;
                    }).catch(e=>{
                        console.log(e);
                        this.isLoading = false;
                    });


                }

            },
            logout(){
                this.$inertia.post('/admins/logout/lock');
            },
            verifyOtp(){
                this.isLoading = true;
                if (this.otp.length<6){
                    this.otpError = 'Incomplete sections';
                }else{
                    this.otpError = '';
                    this.$inertia.post('/admins/post/verify/trusted/browser',{otp:this.otp},
                        {
                            preserveState: true,
                            preserveScroll: true,
                        }).then(()=>{
                        this.sent = false;
                        this.isLoading = false;
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

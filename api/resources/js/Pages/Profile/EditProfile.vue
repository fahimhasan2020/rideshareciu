<template>
    <layout title="Admin | Edit Profile">
        <div class="content-page">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li CLASS="active">
                                        Edit Profile
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-box">
                                <div class="row">
                                   <div class="col-md-4">
                                       <img v-if="$page.auth.user.profile_picture" :src="$page.auth.user.profile_picture" class="img-circle img-thumbnail" height="150px" width="150px" alt="profile-image">
                                       <img v-else  src="../../../../public/admin/assets/images/icons/assistant.svg" class="img-circle img-thumbnail" height="150px" width="150px" alt="profile-image">

                                   </div>
                                    <div class="col-md-4">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                           <i class="fa fa-file-image-o"></i>&nbsp;Change Avatar
                                        </button>

                                        <!-- Modal -->
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Avatar gallery</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div style="display: block;position: relative">
                                                            <div class="avatar-images" v-for="av in avatarLibrary" :class="{selects:av == selectedPhoto}" @click="selectedPhoto = av" >
                                                                <img :src="path+av+'.png'" height="100px" width="100px" alt="one">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" @click.prevent="updateProfilePicture" class="btn btn-primary">Update photo</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card-box">
                                <div v-if="otpSent">
                                    <h4 class="text-center text-primary">Enter verification code</h4>
                                    <hr>
                                    <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                        <span class="input-group-addon"><i class="fa fa-pie-chart"></i></span>
                                        <input type="number" v-model="otp.code" :class="otpErrorClass.code" id="example-input1-group10" name="example-input1-group10" class="form-control" placeholder="Otp code sent to your email">
                                        <span class="text-danger">{{otpError.code}}</span>
                                    </div>

                                    <button @click.prevent="verifyOtpPhone" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Verify</button>
                                    <div style="height:50px"></div>
                                </div>
                                <div v-else>
                                    <h4 class="text-center text-primary">Update phone number</h4>
                                    <hr>
                                    <vue-tel-input v-model="phone.number" :class="phoneClass.number" style="height: 50px;margin-top: 15px;margin-bottom: 15px;border: 2px solid #E3E3E3"></vue-tel-input>
                                    <span class="text-danger">{{phoneError.number}}</span>
                                    <button class="btn btn-primary" @click.prevent="sentUpdateMobile"><i class="fa fa-save"></i>&nbsp;Save changes</button>
                                    <div style="height:40px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <div v-if="emailOtp">
                                    <h4 class="text-center text-primary">Enter verification code</h4>
                                    <hr>
                                    <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                        <span class="input-group-addon"><i class="fa fa-pie-chart"></i></span>
                                        <input type="number" v-model="emailOtpSent.code" :class="emailOtpSentErrorClass.code" id="example-input1-group11" name="example-input1-group11" class="form-control" placeholder="Otp code sent to your email">
                                        <span class="text-danger">{{emailOtpSentError.code}}</span>
                                    </div>

                                    <button @click.prevent="verifyOtpEmail" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Verify</button>
                                    <div style="height:50px"></div>
                                </div>
                                <div v-else>
                                    <h4 class="text-center text-primary">Change Email</h4>
                                    <hr>
                                    <div class="input-group"  style="margin-bottom: 15px;margin-top: 15px">
                                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                        <input v-model="email.password" :class="emailErrorClass.password" type="password" id="example-input1-group8" name="example-input1-group8" class="form-control" placeholder="Enter password">
                                        <span class="text-danger">{{emailError.password}}</span>
                                    </div>
                                    <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                        <input v-model="email.email" type="email" id="example-input1-group9" name="example-input1-group9" class="form-control" :class="emailErrorClass.email" placeholder="Enter new email">
                                        <span class="text-danger">{{emailError.email}}</span>
                                    </div>
                                    <button @click.prevent="saveNewMail" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Save changes</button>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Change Info</h4>
                                <hr>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                    <input type="text" v-model="infoForm.first_name" :class="infoFormErrorClass.first_name" id="example-input1-group1" name="example-input1-group1" class="form-control" placeholder="First Name">
                                    <span class="text-danger">{{infoFormError.first_name}}</span>
                                </div>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                    <input type="text" v-model="infoForm.last_name" :class="infoFormErrorClass.last_name" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Last Name">
                                    <span class="text-danger">{{infoFormError.last_name}}</span>
                                </div>
                                <button @click.prevent="saveName" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Save changes</button>
                                <div style="height:51px"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Change Password</h4>
                                <hr>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon">
                                        <i v-if="type !== 'password'" @click="show" class="fa fa-eye"></i>
                                        <i v-else @click="show" class="fa fa-eye-slash"></i>
                                    </span>
                                    <input :type="type" v-model="passwordResetForm.old_password" :class="passwordResetFormErrorClass.old_password" id="example-input1-group3" name="example-input1-group3" class="form-control" placeholder="Enter old password">
                                    <span class="text-danger">{{passwordResetFormError.old_password}}</span>
                                </div>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon">
                                         <i v-if="type !== 'password'" @click="show"  class="fa fa-eye"></i>
                                        <i v-else @click="show" class="fa fa-eye-slash"></i>
                                    </span>
                                    <input :type="type" v-model="passwordResetForm.new_password" :class="passwordResetFormErrorClass.new_password" id="example-input1-group4" name="example-input1-group3" class="form-control" placeholder="Enter new password">
                                    <span class="text-danger">{{passwordResetFormError.new_password}}</span>
                                </div>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon">
                                         <i v-if="type !== 'password'" @click="show" class="fa fa-eye"></i>
                                        <i v-else @click="show" class="fa fa-eye-slash"></i>
                                    </span>
                                    <input :type="type" v-model="passwordResetForm.confirm_new_password" :class="passwordResetFormErrorClass.confirm_new_password" id="example-input1-group5" name="example-input1-group3" class="form-control" placeholder="Confirm new password">
                                    <span class="text-danger">{{passwordResetFormError.confirm_new_password}}</span>
                                </div>
                                <input type="checkbox" v-model="passwordResetForm.relog" id="vehicle1" value="reset">
                                <label for="vehicle1">Logged out from all other devices</label><br>
                                <button @click.prevent="setNewPassword" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Save changes</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Social info Info</h4>
                                <hr>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon"><i class="fa fa-facebook"></i></span>
                                    <input type="text" v-model="socialForm.facebook_link"  id="example-input1-group12" name="example-input1-group12" class="form-control" placeholder="Facebook link">
                                </div>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon"><i class="fa fa-twitter"></i></span>
                                    <input type="text" v-model="socialForm.twitter_link"  id="example-input1-group13" name="example-input1-group13" class="form-control" placeholder="Twitter link">
                                </div>
                                <div class="input-group" style="margin-bottom: 15px;margin-top: 15px">
                                    <span class="input-group-addon"><i class="fa fa-linkedin"></i></span>
                                    <input type="text" v-model="socialForm.linkdin_link"  id="example-input1-group14" name="example-input1-group14" class="form-control" placeholder="Linkdin link">
                                </div>
                                <button @click.prevent="saveSocialForm" class="btn btn-primary"><i class="fa fa-save"></i>&nbsp;Save changes</button>
                                <div style="height:51px"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <markdown-editor v-model="bio" :options="options"></markdown-editor>
                                <button @click.prevent="saveBio" class="btn btn-block btn-primary"><i class="fa fa-save"></i>&nbsp;&nbsp;Save Bio</button>
                            </div>
                        </div>

                    </div>
                </div> <!-- container -->
            </div> <!-- content -->
        </div>
    </layout>
</template>

<script>
    import Layout from "../inc/Layout";
    import Dashboard from "../../Mixins/Dashboard";
    export default {
        components: {Layout},
        mixins: [Dashboard],
        data () {
            return {
                selectedPhoto:undefined,
                path:this.$page.app.url+'admin/profilepicture/',
                avatarLibrary:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],
                options:{
                    //
                },
                bio:'',
                socialForm:{
                    facebook_link:'',
                    twitter_link:'',
                    linkdin_link:''
                },
                passwordResetForm:{
                    old_password:'',
                    new_password:'',
                    confirm_new_password:''
                },
                passwordResetFormError:{
                    old_password:'',
                    new_password:'',
                    confirm_new_password:'',
                    relog:false
                },
                passwordResetFormErrorClass:{
                    old_password:'',
                    new_password:'',
                    confirm_new_password:''
                },
                type:'password',
                emailOtp:false,
                emailOtpSent:{
                    code:'',
                    type:''
                },
                emailOtpSentError:{
                    code:'',
                    type:''
                },
                emailOtpSentErrorClass:{
                    code:'',
                    type:''
                },
                email:{
                    email:'',
                    password:'',
                    type:'email'
                },
                emailError:{
                    email:'',
                    password:'',
                },
                emailErrorClass:{
                    email:'',
                    password:'',
                },
                otpSent:false,
                phone:{
                    number:'',
                    type:'phone'
                },
                phoneError:{
                  number:''
                },
                phoneClass:{
                    number:''
                },
                otp:{
                    code:'',
                    type:'phone'
                },
                otpError:{
                    code:''
                },
                otpErrorClass:{
                    code:''
                },
                infoForm:{
                    first_name:'',
                    last_name:''
                },
                infoFormError:{
                    first_name:'',
                    last_name:''
                },
                infoFormErrorClass:{
                    first_name:'',
                    last_name:''
                },
            }
        },
        props: {
            //
        },
        computed: {
            //
        },
        created () {
            //
        },
        mounted () {
            this.infoForm.first_name = this.$page.auth.user.first_name;
            this.infoForm.last_name = this.$page.auth.user.last_name;
            this.phone.number = this.$page.auth.user.phone_number;
            this.socialForm.facebook_link = this.$page.auth.user.facebook_link;
            this.socialForm.twitter_link = this.$page.auth.user.twitter_link;
            this.socialForm.linkdin_link = this.$page.auth.user.linkdin_link;
            this.bio = this.$page.auth.user.bio;
        },
        methods: {
            updateProfilePicture(){
                if (this.selectedPhoto === undefined){
                   return this.$toast.open({
                        message: 'No photo selected',
                        type: "error",
                        position:"top-right",
                        duration: 5000,
                        dismissible: true
                    })
                }
                this.$inertia.post('/admins/update/profile-picture',{
                    profilePicture:this.path+this.selectedPhoto+'.png'
                }).then(()=>{
                    this.selectedPhoto = undefined;
                    $("[data-dismiss=modal]").trigger({ type: "click" });
                })
            },
            saveName(){
                if (this.infoForm.first_name === '' || this.infoForm.last_name === ''){
                    if (this.infoForm.first_name === ''){
                        this.infoFormError.first_name = 'First name required';
                        this.infoFormErrorClass.first_name = 'red';
                    }else{
                        this.infoFormError.first_name = '';
                        this.infoFormErrorClass.first_name = '';
                    }
                    if (this.infoForm.last_name === ''){
                        this.infoFormError.last_name = 'Last name required';
                        this.infoFormErrorClass.last_name = 'red';
                    }else{
                        this.infoFormError.last_name = '';
                        this.infoFormErrorClass.last_name = '';
                    }
                }else {
                    this.$inertia.post('/admins/save/name',this.infoForm).then(()=>{
                        this.infoFormError.first_name = '';
                        this.infoFormErrorClass.first_name = '';
                        this.infoFormError.last_name = '';
                        this.infoFormErrorClass.last_name = '';
                    });
                }
            },
            sentUpdateMobile(){
                if (this.phone.number === ''){
                    this.phoneError.number = 'Phone Number required';
                    this.phoneClass.number = 'red';
                }else{
                    this.phoneError.number = '';
                    this.phoneClass.number = '';
                    this.$inertia.post('/admins/verify/otp',this.phone,{
                        preserveScroll: true,
                    }).then(()=>{
                        this.otpSent = true;
                        this.phone.number = this.$page.auth.user.phone_number;

                    });
                }
            },
            verifyOtpPhone(){
                if (this.otp.code === ''){
                    this.otpError.code = 'OTP code required';
                    this.otpErrorClass.code = 'red';
                }else{
                    this.otpError.code = '';
                    this.otpErrorClass.code = '';
                    this.$inertia.post('/admins/verify/otp/code',this.otp,{
                        preserveScroll: true,
                    }).then(()=>{
                        this.otpSent = false;
                        this.otp.code = '';
                        this.phone.number = this.$page.auth.user.phone_number;
                    })
                }
            },
            saveNewMail(){
                if (this.email.password === '' || this.email.email === ''){
                    if (this.email.password === ''){
                        this.emailError.password = 'Password required';
                        this.emailErrorClass.password = 'red';
                    }
                    else {
                        this.emailError.password = '';
                        this.emailErrorClass.password = '';
                    }
                    if (this.email.email === ''){
                        this.emailError.email = 'Email required';
                        this.emailErrorClass.email = 'red';
                    }
                    else {
                        this.emailError.email = '';
                        this.emailErrorClass.email = '';
                    }
                }
                else {
                    this.emailError.email='';
                    this.emailError.password='';
                    this.emailErrorClass.email='';
                    this.emailErrorClass.password='';
                    this.$inertia.post('/admins/verify/otp',this.email,{
                        preserveScroll: true,
                    }).then(()=>{
                        this.emailOtp = true;
                        this.email.email = this.$page.auth.user.email;

                    });
                }
            },
            verifyOtpEmail(){
                if (this.emailOtpSent.code === ''){
                    this.otpError.code = 'OTP code required';
                    this.otpErrorClass.code = 'red';
                }else{
                    this.emailOtpSentError.code = '';
                    this.emailOtpSentErrorClass.code = '';
                    this.$inertia.post('/admins/verify/otp/code',this.emailOtpSent,{
                        preserveScroll: true,
                    }).then(()=>{
                        this.emailOtp = false;
                        this.emailOtpSent.code = '';
                        this.email.email = this.$page.auth.user.email;
                    })
                }
            },
            show(){
                if (this.type === 'password'){
                    this.type = 'text';
                }else{
                    this.type = 'password';
                }
            },
            setNewPassword(){
                if(this.passwordResetForm.old_password === '' || this.passwordResetForm.old_password === '' || this.passwordResetForm.confirm_new_password !== this.passwordResetForm.new_password){
                    if (this.passwordResetForm.old_password === ''){
                        this.passwordResetFormError.old_password = 'Password required';
                        this.passwordResetFormErrorClass.old_password = 'red';
                    }
                    else{
                        this.passwordResetFormError.old_password = '';
                        this.passwordResetFormErrorClass.old_password = '';
                    }
                    if (this.passwordResetForm.new_password === ''){
                        this.passwordResetFormError.new_password = 'Password required';
                        this.passwordResetFormErrorClass.new_password = 'red';
                    }
                    else{
                        this.passwordResetFormError.new_password = '';
                        this.passwordResetFormErrorClass.new_password = '';
                    }
                    if (this.passwordResetForm.confirm_new_password !== this.passwordResetForm.new_password){
                        this.passwordResetFormError.confirm_new_password = 'Password not matched';
                        this.passwordResetFormErrorClass.confirm_new_password = 'red';
                    }
                    else{
                        this.passwordResetFormError.confirm_new_password = '';
                        this.passwordResetFormErrorClass.confirm_new_password = '';
                    }
                }else {
                    this.$inertia.post('/admins/savepasswords',this.passwordResetForm,{
                        preserveScroll: true,
                    }).then(()=>{
                        this.passwordResetFormError.old_password = '';
                        this.passwordResetFormErrorClass.old_password = '';
                        this.passwordResetFormError.new_password = '';
                        this.passwordResetFormErrorClass.new_password = '';
                        this.passwordResetFormError.confirm_new_password = '';
                        this.passwordResetFormErrorClass.confirm_new_password = '';
                    });
                }
            },
            saveSocialForm(){
                this.$inertia.post('/admins/social/save',this.socialForm).then(()=>{
                    is.socialForm.facebook_link = this.$page.auth.user.facebook_link;
                    this.socialForm.twitter_link = this.$page.auth.user.twitter_link;
                    this.socialForm.linkdin_link = this.$page.auth.user.linkdin_link;
                });
            },
            saveBio(){
                this.$inertia.post('/admins/save/bio',{bio:this.bio}).then(()=>{
                    this.bio = this.$page.auth.user.bio;
                });
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
    .avatar-images{
        padding: 10px;
        margin: 10px;
        box-shadow: 2px 2px 2px 2px #ccc;
        height: 120px;
        width: 120px;
        display: inline-block;
    }
    .selects{
        background-color: blueviolet;
    }
</style>

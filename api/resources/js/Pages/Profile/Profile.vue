<template>
    <layout title="Admin | Profile">
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
                                        Profile
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <!-- end row -->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card-box">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4">
                                        <div class="text-center card-box">
                                            <div class="member-card">
                                                <div class="thumb-xl member-thumb m-b-10 center-block">
                                                    <img v-if="$page.auth.user.profile_picture" :src="$page.auth.user.profile_picture" class="img-circle img-thumbnail" alt="profile-image">
                                                    <img v-else  src="../../../../public/admin/assets/images/icons/assistant.svg" class="img-circle img-thumbnail" alt="profile-image">

                                                    <i class="mdi mdi-star-circle member-star text-success" title="verified user"></i>
                                                </div>

                                                <div class="">
                                                    <h4 class="m-b-5">{{$page.auth.user.first_name}} {{$page.auth.user.last_name}}</h4>
                                                </div>

                                                <p v-if="$page.auth.user.bio" class="text-muted font-13 m-t-20">
                                                    {{$page.auth.user.bio}}
                                                </p>

                                                <hr/>

                                                <div class="text-left">
                                                    <p v-if="$page.auth.user.phone_number" class="text-muted font-13"><strong>Mobile :</strong><span class="m-l-15">{{$page.auth.user.phone_number}}</span></p>

                                                    <p v-if="$page.auth.user.email" class="text-muted font-13"><strong>Email :</strong> <span class="m-l-15">{{$page.auth.user.email}}</span></p>
                                                </div>

                                                <ul v-if="$page.auth.user.facebook_link || $page.auth.user.twitter_link || $page.auth.user.likedin_link" class="social-links list-inline m-t-30">
                                                    <li v-if="$page.auth.user.facebook_link">
                                                        <a :href="$page.auth.user.facebook_link"><i class="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li v-if="$page.auth.user.twitter_link">
                                                        <a  :href="$page.auth.user.twitter_link"><i class="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li v-if="$page.auth.user.likedin_link">
                                                        <a :href="$page.auth.user.likedin_link"><i class="fa fa-linkedin"></i></a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div> <!-- end card-box -->
                                    </div> <!-- end col -->
                                    <div class="col-md-8 col-lg-9">
                                        <h4>Actions</h4>
                                        <div class="row m-t-20">
                                            <div class="col-md-10">Edit Profile</div>
                                            <div class="col-md-2"><inertia-link href="/admins/profile/edit" class="btn btn-primary"><i class="fa fa-pencil-square-o"></i>&nbsp; Edit profile</inertia-link></div>
                                        </div> <!-- end row -->
                                        <div class="row m-t-20">
                                            <div class="col-md-10">Deactivate Profile</div>
                                            <div class="col-md-2"><button @click.prevent="deactivate" class="btn btn-danger"><i class="fa fa-sign-out"></i>&nbsp; Deactivate profile</button></div>
                                        </div> <!-- end row -->
                                        <hr/>
                                        <div class="row">
                                            <div class="col-md-8 col-sm-6">
                                                <h4>Activities</h4>
                                                <div class=" p-t-10">
                                                   <div class="activities">
                                                       <i class="fa fa-info-circle text-primary"></i>&nbsp; You have beed assigned new role.
                                                   </div>
                                                    <div class="activities">
                                                        <i class="fa fa-info-circle text-primary"></i>&nbsp; You have beed assigned new role.
                                                    </div>
                                                    <div class="activities">
                                                        <i class="fa fa-info-circle text-primary"></i>&nbsp; You have beed assigned new role.
                                                    </div>
                                                    <div class="activities">
                                                        <i class="fa fa-info-circle text-primary"></i>&nbsp; You have beed assigned new role.
                                                    </div>
                                                    <div class="activities">
                                                        <i class="fa fa-info-circle text-primary"></i>&nbsp; You have beed assigned new role.
                                                    </div>
                                                </div>
                                            </div> <!-- end col -->

                                            <div class="col-md-4 col-sm-6">
                                                <h4>Messages</h4>
                                                <div class="inbox-widget">
                                                    <div>
                                                        <div class="inbox-item">
                                                            <div class="inbox-item-img">
                                                                <img src="../../../../public/admin/assets/images/users/avatar-2.jpg" class="img-circle" alt="">
                                                            </div>
                                                            <p class="inbox-item-author">Tomaslau</p>
                                                            <p class="inbox-item-text">I've finished it! See you so...</p>
                                                            <p class="inbox-item-date">
                                                                <button type="button" class="btn btn-xs btn-success">Message</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="inbox-item">
                                                            <div class="inbox-item-img">
                                                                <img src="../../../../public/admin/assets/images/users/avatar-2.jpg" class="img-circle" alt="">
                                                            </div>
                                                            <p class="inbox-item-author">Tomaslau</p>
                                                            <p class="inbox-item-text">I've finished it! See you so...</p>
                                                            <p class="inbox-item-date">
                                                                <button type="button" class="btn btn-xs btn-success">Message</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div> <!-- end col -->
                                        </div> <!-- end row -->

                                        <h4 class="m-t-30">Notice</h4>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>
                                                <div class="notice">
                                                    <i class="fa fa-info-circle text-danger"></i>&nbsp; Warning limit out of reach
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <!-- end col -->

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End row -->

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
                //
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
            //
        },

        methods: {
            deactivate(){
                this.$confirm("If you deactivate account , other admins can not message you or view your profile. You can reactivate by login again","Warning","warning").then(() => {
                    this.$inertia.post('/admins/account/deactivate')
                });

            }
        }
    };
</script>
<style scoped>
    .activities{
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #edefef;
        padding-left: 15px;
        margin-bottom: 10px;
        box-shadow: 2px 2px 7px 2px #eee;
    }
    .notice{
        padding: 15px 15px 15px 10px;
        margin: 15px 0 15px 0;
        background-color: #f2f2f2;
        box-shadow: 2px 2px 2px 2px #eee;
    }
</style>

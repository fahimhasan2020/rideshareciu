<template>
    <layout title="Admin | Account settings">
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
                                        Account settings
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Notification settings</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="checkbox checkbox-success">
                                            <input id="notification-sound" type="checkbox">
                                            <label for="notification-sound">
                                               Notification sound
                                            </label>
                                        </div>
                                        <div class="checkbox checkbox-success">
                                            <input id="mail-recieve" type="checkbox">
                                            <label for="mail-recieve">
                                                Opt out of receiving mail
                                            </label>
                                        </div>
                                        <div class="checkbox checkbox-success">
                                            <input id="user-notification" type="checkbox">
                                            <label for="user-notification">
                                                User notifications
                                            </label>
                                        </div>
                                        <button class="btn btn-block btn-primary"><i class="fa fa-save"></i>&nbsp;Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Message settings</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="checkbox checkbox-success">
                                            <input id="message-sound" type="checkbox">
                                            <label for="message-sound">
                                                Message sound
                                            </label>
                                        </div>
                                        <div class="checkbox checkbox-success">
                                            <input id="mail-message" type="checkbox">
                                            <label for="mail-message">
                                                Opt out of receiving messages mail
                                            </label>
                                        </div>
                                        <div class="checkbox checkbox-success">
                                            <input id="service-message" type="checkbox">
                                            <label for="service-message">
                                                Service message
                                            </label>
                                        </div>
                                        <button class="btn btn-block btn-primary"><i class="fa fa-save"></i>&nbsp;Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Account Settings</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-8">Delete my account</div>
                                            <div class="col-md-4"><a href="javascript:void(0)">Delete account</a></div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="col-md-12" style="border-bottom: 1px solid #ccc;padding-bottom: 15px;padding-top: 15px">
                                        <div class="row">
                                            <div class="col-md-8">Deactivate my account</div>
                                            <div class="col-md-4"><inertia-link href="javascript:void(0)" @click.prevent="deactivate" >Deactivate account</inertia-link></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="border-bottom: 1px solid #ccc;padding-bottom: 15px;padding-top: 15px">
                                        <div class="row">
                                            <div class="col-md-8">Help & info</div>
                                            <div class="col-md-4"><a href="javascript:void(0)">Account Info</a></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="border-bottom: 1px solid #ccc;padding-bottom: 15px;padding-top: 15px">
                                        <div class="row">
                                            <div class="col-md-8">Support</div>
                                            <div class="col-md-4"><a href="javascript:void(0)">Account support</a></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="padding-bottom: 15px;padding-top: 15px">
                                        <div class="row">
                                            <div class="col-md-8">Trusted browser</div>
                                            <div class="col-md-4">
                                                <inertia-link v-if="$page.auth.user.browser === '0'" @click.prevent="enableTrustedBrowser('enable')" href="javascript:void(0)">Enable</inertia-link>
                                                <inertia-link  v-else @click.prevent="enableTrustedBrowser('disable')" href="javascript:void(0)">Disable</inertia-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-box">
                                <h4 class="text-center text-primary">Recent activities</h4>
                                <hr>
                                <div class="row acts">
                                    <div class="col-md-10">
                                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;New support issue has been closed
                                    </div>
                                    <div class="col-md-2"><a href="javascript:void(0);">view</a></div>
                                </div>
                                <div class="row acts">
                                    <div class="col-md-10">
                                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;New support issue has been closed
                                    </div>
                                    <div class="col-md-2"><a href="javascript:void(0);">view</a></div>
                                </div>
                                <div class="row acts">
                                    <div class="col-md-10">
                                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;New support issue has been closed
                                    </div>
                                    <div class="col-md-2"><a href="javascript:void(0);">view</a></div>
                                </div>
                                <div class="row acts">
                                    <div class="col-md-10">
                                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;New support issue has been closed
                                    </div>
                                    <div class="col-md-2"><a href="javascript:void(0);">view</a></div>
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
           enableTrustedBrowser(data){
               if (data === 'enable'){
                   this.$inertia.post('/admins/enable/trusted/browser/enable');
               }else if(data === 'disable'){
                   this.$inertia.post('/admins/enable/trusted/browser/disable');
               }

           },
            deactivate(){
                this.$confirm("If you deactivate account , other admins can not message you or view your profile. You can reactivate by login again","Warning","warning").then(() => {
                    this.$inertia.post('/admins/account/deactivate')
                });

            }
        }
    };
</script>
<style scoped>
    .acts{
        background-color: #f2f6f6;
        padding-bottom: 15px;
        padding-top: 15px;
        margin-bottom: 10px;
        box-shadow: 2px 2px 2px 2px #eee;
    }
</style>

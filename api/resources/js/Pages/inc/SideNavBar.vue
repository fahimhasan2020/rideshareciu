<template>
    <div class="left side-menu">
        <div class="sidebar-inner slimscrollleft">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <ul>
                    <li class="menu-title">Navigation</li>
                    <li>
                        <a href="/" class="waves-effect" ><i class="mdi mdi-home"></i>&nbsp;<span>Home</span></a>
                    </li><!-------------Home-------------------------->
                    <li class="has_sub">
                        <inertia-link href="/admins/dashboard" class="waves-effect"><i class="mdi mdi-view-dashboard"></i><span> Dashboard </span> </inertia-link>
                    </li><!---------Dashboard--------->
                    <li class="has_sub">
                        <a href="javascript:void(0);" class="waves-effect"><i class="mdi  mdi-contact-mail"></i> <span> Mails </span> <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled">
                            <li><inertia-link href="/admins/mail">Mail</inertia-link></li>
                            <li><inertia-link href="/admins/email/support">Support</inertia-link></li>
                            <li><inertia-link href="/admins/email/contact">Contacts</inertia-link></li>
                        </ul>
                    </li><!---------mailbox----------->
                    <li class="has_sub">
                        <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-account"></i> <span> User </span> <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled">
                            <li><inertia-link href="/admins/admin">Admin</inertia-link></li>
                            <li><inertia-link href="/admins/user">User</inertia-link></li>
                            <li><inertia-link href="/admins/rider">Rider</inertia-link></li>
                        </ul>
                    </li><!----------Users------------>
                    <li>
                        <inertia-link href="/admins/coupons"><i class="mdi mdi-more"></i><span> Coupons </span></inertia-link>
                    </li>
                    <li class="menu-title">Marketing</li>
                    <li class="has_sub">
                        <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-share"></i><span> Social site </span> <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled">
                            <li><a href="javascript:void(0);">Social Media</a></li>
                            <li><a href="javascript:void(0);">You tube</a></li>
                            <li><a href="javascript:void(0);">Blogs Sharing</a></li>
                        </ul>
                    </li><!---------Social site----------->
                </ul>
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>
            <div class="help-box">
                <h5 class="text-muted m-t-0">For Help ?</h5>
                <p class=""><span class="text-custom">Email:</span> <br/> samreenaalam9558@gmail.com</p>
                <p class="m-b-0"><span class="text-custom">Call:</span> <br/> (+880) 170 536 6238</p>
            </div>
        </div>
        <!-- Sidebar -left -->
    </div>
</template>
<script>
    export default {
        components: {},
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
            //
        }
    };
</script>

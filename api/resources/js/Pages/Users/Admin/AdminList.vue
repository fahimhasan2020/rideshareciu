<template>
    <layout title="Admin | AdminLIst">
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
                                        Admin List
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-box">
                                <h4 class="header-title m-t-0 m-b-30">Admin Panel</h4>
                                <ul class="nav nav-tabs tabs-bordered">
                                    <li class="active">
                                        <a href="#home-b1" data-toggle="tab" aria-expanded="true">
                                            <span class="visible-xs"><i class="fa fa-home"></i></span>
                                            <span class="hidden-xs">Admins</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#profile-b1" data-toggle="tab" aria-expanded="false">
                                            <span class="visible-xs"><i class="fa fa-user"></i></span>
                                            <span class="hidden-xs">Hold</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#messages-b1" data-toggle="tab" aria-expanded="false">
                                            <span class="visible-xs"><i class="fa fa-envelope-o"></i></span>
                                            <span class="hidden-xs">Roles</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#settings-b1" data-toggle="tab" aria-expanded="false">
                                            <span class="visible-xs"><i class="fa fa-cog"></i></span>
                                            <span class="hidden-xs">Permissions</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="home-b1">
                                        <inertia-link href="/admins/admin-resource/create" class="btn btn-primary">Create &nbsp; <i class="fa fa-plus-circle"></i></inertia-link>
                                        <hr>
                                        <admins v-bind:permissions="admins"></admins>
                                    </div>
                                    <div class="tab-pane" id="profile-b1">
                                        <holded v-bind:permissions="adminDisabled"></holded>
                                    </div>
                                    <div class="tab-pane" id="messages-b1">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <h3 class="text-primary">Admin Role</h3>
                                                <hr>
                                                <div class="row">
                                                    <inertia-link href="/admins/admin-roles/create" class="btn btn-primary btn-block btn-lg"><i class="fa fa-save"></i>&nbsp;Add/Import Role</inertia-link>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <role v-bind:permissions="roles"></role>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane" id="settings-b1">
                                        <permission v-bind:permissions="permissions"></permission>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div>
                    <!-- end row -->
                </div> <!-- container -->
            </div> <!-- content -->
        </div>
    </layout>
</template>
<script>
    import Layout from "../../inc/Layout";
    import Dashboard from "../../../Mixins/Dashboard";
    import PermissionList from "./PermissionList";
    import RoleList from "./RoleList";
    import Admins from "./Admins";
    import AdminHolded from "./AdminHolded";
    export default {
        components: {Layout,permission:PermissionList,role:RoleList,admins:Admins,holded:AdminHolded},
        mixins: [Dashboard],
        data () {
            return {
               //
            }
        },

        props: {
            permissions:Object,
            roles:Object,
            admins:Object,
            adminDisabled:Object
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

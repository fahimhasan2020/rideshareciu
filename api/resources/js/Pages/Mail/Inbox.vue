<template>
    <layout title="Admin | Mail Inbox">
        <div class="content-page">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li CLASS="active">
                                        Inbox
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="mails card-box">
                                <div class="table-box">
                                    <navs></navs>
                                    <div class="table-detail mail-right">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="btn-toolbar m-t-20" role="toolbar">
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-primary waves-effect waves-light "><i class="fa fa-inbox"></i></button>
                                                        <button type="button" class="btn btn-primary waves-effect waves-light "><i class="fa fa-exclamation-circle"></i></button>
                                                        <button type="button" class="btn btn-primary waves-effect waves-light "><i class="fa fa-trash-o"></i></button>
                                                    </div>
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">
                                                            <i class="fa fa-folder"></i>
                                                            <b class="caret"></b>
                                                        </button>
                                                        <ul class="dropdown-menu" role="menu">
                                                            <li><a href="javascript:void(0);">Action</a></li>
                                                            <li><a href="javascript:void(0);">Another action</a></li>
                                                            <li><a href="javascript:void(0);">Something else here</a></li>
                                                            <li class="divider"></li>
                                                            <li><a href="javascript:void(0);">Separated link</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-primary waves-effect waves-light  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                            <i class="fa fa-tag"></i>
                                                            <b class="caret"></b>
                                                        </button>
                                                        <ul class="dropdown-menu" role="menu">
                                                            <li><a href="javascript:void(0);">Action</a></li>
                                                            <li><a href="javascript:void(0);">Another action</a></li>
                                                            <li><a href="javascript:void(0);">Something else here</a></li>
                                                            <li class="divider"></li>
                                                            <li><a href="javascript:void(0);">Separated link</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-primary waves-effect waves-light  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                            More
                                                            <span class="caret"></span>
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="javascript:void(0);">Dropdown link</a></li>
                                                            <li><a href="javascript:void(0);">Dropdown link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> <!-- End row -->
                                        <div class="table-responsive m-t-20">
                                            <table class="table table-hover mails m-0">
                                                <tbody>
                                                <tr v-if="mails.data.length > 0" v-for="m in mails.data" class="unread" :class="[m.read===1?'markedAsRead':'']">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox1" type="checkbox">
                                                            <label for="checkbox1"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <inertia-link :href="'/admins/mail/'+m.id" class="email-name">{{m.sender.substring(0,20)}}</inertia-link>
                                                    </td>
                                                    <td class="hidden-xs">
                                                        <inertia-link :href="'/admins/mail/'+m.id" class="email-msg">{{m.subject.substring(0,20)}}</inertia-link>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="row m-t-20 m-b-30">
                                            <div class="col-xs-7 m-t-20">
                                                Showing 1 - 20 of 289
                                            </div>
                                            <div class="col-xs-5 m-t-20">
                                                <div class="btn-group pull-right">
                                                    <button type="button" class="btn btn-default waves-effect"><i class="fa fa-chevron-left"></i></button>
                                                    <button type="button" class="btn btn-default waves-effect"><i class="fa fa-chevron-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    import Dashboard from "../../Mixins/Dashboard";
    import Layout from "../inc/Layout";
    import Navigation from "./Inc/Navigation";
    export default {
        components: {Layout,navs:Navigation},

        mixins: [Dashboard],

        data () {
            return {
               //
            }
        },

        props: {
            mails:Object
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
<style scoped>
    .unread{
        border-bottom: 2px solid #ededed;
    }
    .markedAsRead{
        background-color: #dddddd;
    }
</style>

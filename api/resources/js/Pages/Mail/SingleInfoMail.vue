<template>
    <layout title="Admin | Mail Read">
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


                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="card-box m-t-20">
                                                    <h4 class="m-t-0"><b>{{mail.subject}}</b></h4>

                                                    <hr/>

                                                    <div class="media m-b-30 ">
                                                        <a href="#" class="pull-left">
                                                            <img alt="" src="../../../../public/admin/assets/images/users/avatar-2.jpg" class="media-object thumb-sm img-circle">
                                                        </a>
                                                        <div class="media-body">
                                                            <span class="media-meta pull-right">07:23 AM</span>
                                                            <small class="text-muted">From: {{mail.sender}}</small>
                                                        </div>
                                                    </div> <!-- media -->
                                                    <span v-html="mail.body"></span>
                                                    <hr/>

                                                    <h4> <i class="fa fa-paperclip m-r-10 m-b-10"></i> Attachments <span>(3)</span> </h4>

                                                    <div class="row">
                                                        <div class="col-sm-2 col-xs-4">
                                                            <a href="#"> <img src="../../../../public/admin/assets/images/small/img-1.jpg" alt="attachment" class="img-thumbnail img-responsive"> </a>
                                                        </div>
                                                        <div class="col-sm-2 col-xs-4">
                                                            <a href="#"> <img src="../../../../public/admin/assets/images/small/img-2.jpg" alt="attachment" class="img-thumbnail img-responsive"> </a>
                                                        </div>
                                                        <div class="col-sm-2 col-xs-4">
                                                            <a href="#"> <img src="../../../../public/admin/assets/images/small/img-3.jpg" alt="attachment" class="img-thumbnail img-responsive"> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- card-box -->
                                            </div> <!-- end col -->
                                        </div> <!-- end row -->

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="text-right">
                       .                             <button type="button" class="btn btn-primary waves-effect waves-light w-md m-b-30"><i class="mdi mdi-reply m-r-10"></i>Reply</button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- End row -->

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
            mail:Object
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

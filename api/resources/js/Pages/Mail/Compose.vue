<template>
    <layout title="Admin | Mail Compose">
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Compose </h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li>
                                        <inertia-link href="/admins/dashboard">Admin</inertia-link>
                                    </li>
                                    <li>
                                        <inertia-link href="/admins/mail">Email </inertia-link>
                                    </li>
                                    <li class="active">
                                        Compose
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
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
                                                    <div class="">
                                                        <form>
                                                            <div class="form-group">
                                                                <input type="email" v-model="to" class="form-control" placeholder="To">
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <input type="email" class="form-control" v-model="cc" placeholder="Cc">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <input type="email" class="form-control" v-model="bcc" placeholder="Bcc">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="text" v-model="subject" class="form-control" placeholder="Subject">
                                                            </div>
                                                            <div class="form-group">
                                                                <markdown-editor :options="options" v-model="message"></markdown-editor>
                                                            </div>

                                                            <div class="btn-toolbar form-group m-b-0">
                                                                <div class="pull-right">
                                                                    <button type="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-floppy-o"></i></button>
                                                                    <button type="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-trash-o"></i></button>
                                                                    <button @click.prevent="sendMail" class="btn btn-purple waves-effect waves-light"> <span>Send</span> <i class="fa fa-send m-l-10"></i> </button>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <!-- End row -->

                                    </div> <!-- table detail -->
                                </div>
                                <!-- end table box -->
                            </div> <!-- mails -->
                        </div>
                    </div>
                    <!-- end row -->
                </div> <!-- container -->
            </div> <!-- content -->
        </div>
    </layout>
</template>
<script>
    import Dashboard from "../../Mixins/Dashboard";
    import Layout from "../inc/Layout";
    import Navigation from "./Inc/Navigation";
    require('../../../../public/admin/plugins/summernote/summernote.min');
    export default {
        components: {Layout,navs:Navigation},
        mixins: [Dashboard],
        data () {
            return {
                options: {
                    // lineNumbers: true,
                     styleActiveLine: true,
                     styleSelectedText: true,
                     lineWrapping: true,
                     indentWithTabs: true,
                     tabSize: 2,
                     indentUnit: 2
                },
                to:'',
                bcc:'',
                cc:'',
                subject:'',
                message:''
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
            sendMail(){
                this.$inertia.post('/admins/mail',{
                    to:this.to,
                    cc:this.cc,
                    bcc:this.bcc,
                    subject: this.subject,
                    message:this.message
                }).then(()=>{
                    this.to = '';
                    this.cc = '';
                    this.bcc = '';
                    this.subject = '';
                    this.message = '';
                });
            }
        }
    };
</script>


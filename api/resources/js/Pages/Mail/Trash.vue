<template>
    <layout title="Admin | Mail Trash">
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
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox10" type="checkbox">
                                                            <label for="checkbox10"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox11" type="checkbox">
                                                            <label for="checkbox11"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox2" type="checkbox">
                                                            <label for="checkbox2"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox13" type="checkbox">
                                                            <label for="checkbox13"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox3" type="checkbox">
                                                            <label for="checkbox3"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox4" type="checkbox">
                                                            <label for="checkbox4"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox15" type="checkbox">
                                                            <label for="checkbox15"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox14" type="checkbox">
                                                            <label for="checkbox14"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox16" type="checkbox">
                                                            <label for="checkbox16"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox5" type="checkbox">
                                                            <label for="checkbox5"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox17" type="checkbox">
                                                            <label for="checkbox17"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox6" type="checkbox">
                                                            <label for="checkbox6"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox19" type="checkbox">
                                                            <label for="checkbox19"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox18" type="checkbox">
                                                            <label for="checkbox18"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox20" type="checkbox">
                                                            <label for="checkbox20"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox21" type="checkbox">
                                                            <label for="checkbox21"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox7" type="checkbox">
                                                            <label for="checkbox7"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox1" type="checkbox">
                                                            <label for="checkbox1"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
                                                    </td>
                                                </tr>
                                                <tr class="unread">
                                                    <td class="mail-select">
                                                        <div class="checkbox checkbox-primary m-r-15">
                                                            <input id="checkbox8" type="checkbox">
                                                            <label for="checkbox8"></label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <a href="email-read.html" class="email-name">Google Inc</a>
                                                    </td>

                                                    <td class="hidden-xs">
                                                        <a href="email-read.html" class="email-msg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>
                                                    </td>
                                                    <td style="width: 20px;">
                                                        <i class="fa fa-paperclip"></i>
                                                    </td>
                                                    <td class="text-right">
                                                        07:23 AM
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
<style scoped>
    .unread{
        border-bottom: 2px solid #ededed;
    }
</style>

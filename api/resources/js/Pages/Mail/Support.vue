<template>
    <layout title="Admin | Mail inbox">
        <div className="content-page">
            <!-- Start content -->
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Dashboard</h4>
                                <ol className="breadcrumb p-0 m-0">
                                    <li>
                                        <inertia-link href="/admins/mail">
                                            Inbox
                                        </inertia-link>
                                    </li>
                                    <li className="active">
                                        Support
                                    </li>
                                </ol>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <!-- end row -->
                    <!-- end row -->
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <h3>Mail box</h3>
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
    import Dashboard from "../../Mixins/Dashboard";
    import Layout from "../inc/Layout";
    export default {
        components: {Layout},

        mixins: [Dashboard],

        data() {
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

        created() {
            //
        },

        mounted() {
            //
        },

        methods: {
            //
        }
    };
</script>

<template>
    <layout title="Admin | Notifications">
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
                                        Notifications
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="card-box">
                                    <h4 class="text-primary text-muted">Notifications</h4>
                                    <hr>
                                    <inertia-link v-if="notifications.length>0" v-for="(noty,i) in notifications" :key="i" :href="noty.data.link">
                                    <div class="notifications">
                                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{noty.data.data}}
                                    </div>
                                    </inertia-link>

                                </div>
                            </div>
                            <div class="col-md-2"></div>
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
            notifications:Array
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
    .notifications{
        padding: 10px 10px 10px 10px;
        margin: 10px 0 10px 0;
        background-color: #f4f4f4;
        box-shadow: 2px 2px 2px 2px #eee;
        min-height: 60px;
        color: #8bc2d3;
    }
</style>

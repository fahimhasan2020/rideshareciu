<template>
    <div class="bg-transparent">
        <section>
            <div class="container-alt">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="wrapper-page">
                            <div class="m-t-40 account-pages">
                                <div class="text-center account-logo-box">
                                    <h2 class="text-uppercase">
                                        <a href="/" class="text-success">
                                            <span>{{__('blocked')}}</span>
                                        </a>
                                    </h2>
                                    <!--<h4 class="text-uppercase font-bold m-b-0">Sign In</h4>-->
                                </div>
                                <div class="account-content">
                                    <div class="text-center m-b-20">
                                        <p class="text-muted m-b-0 font-13">{{__('accountHasBeenBlocked')}}</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <!-- end card-box-->
                            <div class="row m-t-50">
                                <div class="col-sm-12 text-center">
                                    <p class="text-muted">{{__('wantToLogIn')}}<a href="javascript:void(0);" @click.prevent="logout" class="text-primary m-l-5"><b>{{__('logout')}}</b></a></p>
                                </div>
                            </div>

                        </div>
                        <!-- end wrapper -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        components: {},

        mixins: [],

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
            document.title = 'Blocked !!!'
        },

        methods: {
            logout(){
                this.$inertia.post('/admins/logout/lock');
            },
        }
    };
</script>

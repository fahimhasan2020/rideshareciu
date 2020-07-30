<template>
    <div class="table-detail">
        <div class="p-20">
            <inertia-link href="/admins/email/compose" class="btn btn-danger btn-rounded btn-custom w-lg waves-effect waves-light">Compose</inertia-link>
            <div class="list-group mail-list  m-t-20">
                <inertia-link href="/admins/mail" class="list-group-item b-0" :class="[path === '/admins/mail'?'text-success':'']"><i class="fa fa-download m-r-10"></i>Inbox <b>(8)</b></inertia-link>
                <inertia-link href="/admins/email/draft" class="list-group-item b-0" :class="[path === '/admins/email/draft'?'text-success':'']"  ><i class="fa fa-file-text-o m-r-10"></i>Draft <b>(20)</b></inertia-link>
                <inertia-link href="/admins/email/sent" class="list-group-item b-0" :class="[path === '/admins/email/sent'?'text-success':'']"><i class="fa fa-paper-plane-o m-r-10"></i>Sent Mail</inertia-link>
                <inertia-link href="/admins/email/spam" class="list-group-item b-0" :class="[path === '/admins/email/spam'?'text-success':'']"><i class="fa fa-ban m-r-10"></i>Spam</inertia-link>
                <inertia-link href="/admins/email/trashed" class="list-group-item b-0" :class="[path === '/admins/email/trashed'?'text-success':'']"><i class="fa fa-trash-o m-r-10"></i>Trash <b>(354)</b></inertia-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},

        mixins: [],

        data () {
            return {
                path:'/admins/mail'
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
           this.path = window.location.pathname;
        },

        methods: {
            //
        }
    };
</script>

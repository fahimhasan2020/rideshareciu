<template>
    <layout title="Admin | Messages">
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
                                        Messages
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="card-box">
                            <div class="row">
                                <div class="col-md-3 pc-only" style="padding-top: 20px;
    box-shadow: 2px 2px 7px 2px #ccc;">
                                    <div class="contact">
                                        <input type="text" placeholder="Find contact" class="search-contact">
                                        <i class="fa fa-search posi-search"></i>
                                    </div>
                                    <hr class="m-t-10">
                                    <h4>Contacts</h4>
                                    <div class="inbox-widget slimscroll-alt" ref="convrs" style="max-height: 500px;min-height: 400px!important;">
                                        <div v-for="user in users" :key="user.id">
                                            <div class="inbox-item" @click.prevent="openChat(user)">
                                                <div class="inbox-item-img">
                                                    <img v-if="user.profile_picture" :src="user.profile_picture" class="img-circle" alt="">
                                                    <img v-else src="../../../../public/admin/assets/images/icons/assistant.svg" class="img-circle" alt="">
                                                </div>
                                                <p class="inbox-item-author">{{user.first_name}}</p>
                                                <p class="inbox-item-text">I've finished it! See you so...</p>
                                                <p class="inbox-item-date">
                                                    <span class="text-muted">12:28 pm</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9" style="min-height: 600px;">
                                    <div class="info-box">
                                        <div class="contact-name-box">
                                            <div style="height:50px;width:50px;border-radius:20px">
                                                <img v-if="firstChat.profile_picture" :src="firstChat.profile_picture" height="50px" width="50px" class="img-circle" alt="">
                                                <img v-else src="../../../../public/admin/assets/images/icons/assistant.svg" class="img-circle" alt="">
                                            </div>
                                            <p style="line-height: 50px;
    padding-left: 15px;
    font-family: inherit;font-size: 20px">{{firstChat.first_name}} {{firstChat.last_name}}</p>
                                            <span><i class="fa fa-dot-circle-o text-success" style="position:absolute;top:40%;right:40px;"></i></span>
                                        </div>
                                    </div>
                                    <div class="chat-conversation">
                                        <ul v-if="conversation.length>0" class="conversation-list slimscroll-alt" ref="convrs" style="min-height: 452px !important;max-height: 500px;overflow-x: scroll;padding-bottom: 50px">
                                            <li v-for="cn in conversation" class="clearfix"
                                            v-bind:class="cn.from === firstChat.id? '':'odd'">
                                                <div class="chat-avatar">
                                                    <img v-if="firstChat.profile_picture && cn.from === firstChat.id" :src="firstChat.profile_picture" alt="male">
                                                    <img v-else-if="!firstChat.profile_picture && cn.from === firstChat.id" src="../../../../public/admin/assets/images/icons/assistant.svg" alt="male">
                                                    <img v-else-if="$page.auth.user.profile_picture && cn.from !== firstChat.id" :src="$page.auth.user.profile_picture" alt="male">
                                                    <img v-if="!$page.auth.user.profile_picture && cn.from !== firstChat.id" src="../../../../public/admin/assets/images/icons/assistant.svg" alt="male">
                                                    <i>10:00</i>
                                                </div>
                                                <div class="conversation-text">
                                                    <div class="ctext-wrap">
                                                        <i v-if="cn.from === firstChat.id">{{firstChat.first_name}} {{firstChat.last_name}}</i>
                                                        <i v-else>{{$page.auth.user.first_name}} {{$page.auth.user.last_name}}</i>
                                                        <p>
                                                            {{cn.message}}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul v-else  class="conversation-list slimscroll-alt" style="min-height: 452px !important;max-height: 500px;overflow-x: scroll;padding-bottom: 50px">
                                            <li style="text-align: center;margin-top: 20px;margin-bottom: 20px;"><i class="fa fa-info-circle text-primary"></i>&nbsp;No message</li>
                                        </ul>
                                    </div>
                                    <div v-if="firstChat.deactivated === '0'" class="message-compose-box">
                                        <div class="grab-box">
                                            <i class="fa fa-2x fa-clipboard text-primary"></i>
                                            <i class="fa fa-2x fa-file-image-o text-primary"></i>
                                        </div>

                                        <div class="input-box">
                                            <input type="text" v-model="messageText" @keyup.enter="trigger" class="message-input" placeholder="Type here message">
                                            <i ref="messageSent" class="fa fa-2x fa-send text-info" @click.prevent="sendMessage" style="position:absolute;top: 9px;right: 18px;font-size: 22px;"></i>
                                        </div>
                                    </div>
                                    <div v-else class="message-deactivate-box">
                                        <p class="text-center" style="color: white">This account is being deactivated.</p>
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
    import Layout from "../inc/Layout";
    import Dashboard from "../../Mixins/Dashboard";
    export default {
        components: {Layout},
        mixins: [Dashboard],
        data () {
            return {
                firstChat:'',
                messageText:'',
                conversation:[]
            }
        },
        props: {
            users:Array
        },
        computed: {
           //
        },
        created () {
            //
        },
        mounted () {
            if (this.users.length>1){
                 this.openChat(this.users[0]);
            }
            Echo.channel(`admin-chat.${this.$page.auth.user.id}`)
                .listen('AdminChatMessage',(e)=>{
                    this.handleMessage(e);
                });
        },
        methods: {
            openChat(value){
                this.firstChat = value;
                var uri = '/admins/message/get/'+value.id;
                this.$loading(true);
                axios
                    .get(uri)
                    .then(response => {
                        this.$loading(false);
                        this.conversation = response.data.data;
                        setTimeout(()=>{
                            this.$refs.convrs.scrollTop = this.$refs.convrs.scrollHeight - this.$refs.convrs.clientHeight;
                        },50)

                    })
            },
            sendMessage(){
                axios.post('/admins/message',{from:this.$page.auth.user.id,
                    to:this.firstChat.id,
                    message:this.messageText}).then((response)=>{
                    this.messageText = '';
                    this.conversation.push(response.data);
                    setTimeout(()=>{
                        this.$refs.convrs.scrollTop = this.$refs.convrs.scrollHeight - this.$refs.convrs.clientHeight;
                    },50)
                })
            },
            trigger(){
                this.$refs.messageSent.click()
            },
            handleMessage(message){
                if(message.message.from  === this.firstChat.id){
                    this.conversation.push(message.message);
                    setTimeout(()=>{
                        this.$refs.convrs.scrollTop = this.$refs.convrs.scrollHeight - this.$refs.convrs.clientHeight;
                    },50);
                }
            }
        }
    };
</script>
<style scoped>
    .search-contact{
        width: 95%;
        padding: 5px;
        border-radius: 15px;
        background-color: #eee;
        border: 1px solid #ccc;
        padding-left: 10px;
    }
    .posi-search{
        position: absolute;
        top: 30px;
        right: 42px;
    }
    .contact-name-box{
        display: flex;
    }
    .info-box{
        position: relative;
        box-shadow: 3px 2px 4px 2px #ccc;
        padding: 5px;
        margin-bottom: 15px;
    }
    .message-compose-box{
        z-index: 100;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: white;
        box-shadow: 1px 1px 5px 1px #ccc;
        padding: 15px;
        display: flex;
    }
    .message-deactivate-box{
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: blue;
        z-index: 100;
        box-shadow: 2px -3px 2px 1px #ccc;
        padding: 15px;
    }
    .input-box{
        width: 60%;
        position: relative;
    }
    .message-input{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        background-color: #ebebeb;
        border-radius: 15px;
        padding-right: 45px;
    }
    .grab-box{
        position: relative;
        display: flex;
        padding:5px;
        width: 40%;
    }
    .grab-box i{
        margin-right: 15px;
    }
    i{
        cursor: pointer;
    }
    .inbox-item:hover{
        background-color: #dcdfdf;
        cursor: pointer;
    }
    @media only screen and (max-width: 500px) {
        .pc-only {
            display: none !important;
        }
    }
</style>

<template>
    <div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
            <inertia-link href="/admin/dashboard" class="logo"><span>AP<span>I</span></span><i class="mdi mdi-layers"></i></inertia-link>
        </div>
        <!-- Button mobile view to collapse sidebar menu -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container">
                <!-- Navbar-left -->
                <ul class="nav navbar-nav navbar-left">
                    <li>
                        <button class="button-menu-mobile open-left waves-effect">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <li class="hidden-xs">
                        <form role="search" class="app-search">
                            <input type="text" placeholder="Search..."
                                   class="form-control">
                            <a href=""><i class="fa fa-search"></i></a>
                        </form>
                    </li>
                    <li class="dropdown hidden-xs">
                        <a  data-toggle="dropdown" class="dropdown-toggle menu-item" href="#" aria-expanded="false">New
                            <span class="caret"></span></a>
                        <ul role="menu" class="dropdown-menu">
                            <li><a href="#">User</a></li>
                            <li><a href="#">Task</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Work</a></li>
                        </ul>
                    </li>
                    <li class="dropdown hidden-xs">
                        <a data-toggle="dropdown" class="dropdown-toggle menu-item" href="#" aria-expanded="false">
                            <span v-if="$page.locale === 'en'">English</span>
                            <span v-if="$page.locale === 'bd'">বাংলা</span>
                            <span class="caret"></span></a>
                        <ul role="menu" class="dropdown-menu">
                            <li><inertia-link href="/admins/language/en">English</inertia-link></li>
                            <li><inertia-link href="/admins/language/bd">বাংলা</inertia-link></li>
                        </ul>
                    </li>
                </ul>
                <!-- Right(Notification) -->
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a @click="markAsReadNotifications" href="#" class="right-menu-item dropdown-toggle" data-toggle="dropdown">
                            <i class="mdi mdi-bell"></i>
                            <span v-if="unreadNotifications" class="badge up bg-success">{{unreadNotifications}}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list">
                            <li>
                                <h5>Notifications</h5>
                            </li>
                            <li v-if="notifications.length>0" v-for="noty in notifications">
                                <inertia-link :href="noty.data.link" class="user-list-item">
                                    <div class="icon bg-info">
                                        <i class="mdi mdi-account"></i>
                                    </div>
                                    <div class="user-desc">
                                        <span class="name">{{noty.data.data}}</span>
                                        <span class="time">{{noty.created_at}}</span>
                                    </div>
                                </inertia-link>
                            </li>
                            <li class="all-msgs text-center">
                                <p class="m-0">
                                    <inertia-link href="/admins/notifications">See all Notification</inertia-link>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="right-menu-item dropdown-toggle" data-toggle="dropdown">
                            <i class="mdi mdi-email"></i>
                            <span v-if="unreadMessages" class="badge up bg-danger">{{unreadMessages}}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list">
                            <li>
                                <h5>Messages</h5>
                            </li>
                            <li v-if="messages.length >0" v-for="msg in messages">
                                <inertia-link :href="'/admins/messages?user='+msg.id" class="user-list-item">
                                    <div class="avatar">
                                        <img v-if="msg.profile_picture" :src="msg.profile_picture" alt="">
                                        <img v-else src="../../../../public/admin/assets/images/icons/assistant.svg" alt="">
                                    </div>
                                    <div class="user-desc">
                                        <span class="name">{{msg.first_name}} {{msg.last_name}}</span>
                                        <span class="desc">{{msg.message}}</span>
                                        <span class="time">2 hours ago</span>
                                    </div>
                                </inertia-link>
                            </li>
                            <li class="all-msgs text-center">
                                <p class="m-0"><inertia-link href="/admins/messages">See all Messages</inertia-link></p>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown user-box">
                        <a href="" class="dropdown-toggle waves-effect user-link" data-toggle="dropdown" aria-expanded="true">
                            <img v-if="$page.auth.user.profile_picture" :src="$page.auth.user.profile_picture" class="iimg-circle user-img" alt="user-img">
                            <img v-else  src="../../../../public/admin/assets/images/icons/assistant.svg" class="img-circle user-img" alt="user-img">
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list">
                            <li>
                                <h5>Hi, {{$page.auth.user.first_name}}</h5>
                            </li>
                            <li><inertia-link href="/admins/profile"><i class="ti-user m-r-5"></i> Profile</inertia-link></li>
                            <li><inertia-link href="/admins/settings"><i class="ti-settings m-r-5"></i> Settings</inertia-link></li>
                            <li><a @click.prevent="screenLock" href="javascript:void(0)"><i class="ti-lock m-r-5"></i> Lock screen</a></li>
                            <li><a @click="logout" href="javascript:void(0)"><i class="ti-power-off m-r-5"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul> <!-- end navbar-right -->

            </div><!-- end container -->
        </div><!-- end navbar -->
    </div>
</template>

<script>
    export default {
        components: {},
        data () {
            return {
                timeoutInMiliseconds:1800000,
                timeoutId:null,
                notifications:[],
                unreadNotifications:null,
                unreadMessages:'',
                messages:[]
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
            this.setupTimers();
            axios.get('/admins/get/notifications').then((response)=>{
                this.notifications = response.data.notifications;
                this.unreadNotifications = response.data.counter;
            });
            Echo.channel('admin.notifications.'+this.$page.auth.user.id)
                .listen('AdminNotifications', (e) => {
                    this.notifications.push({'data':e});
                    let src = '/admin/assets/audio/notification.mp3';
                    let audio = new Audio(src);
                    audio.play();
                    this.unreadNotifications = this.unreadNotifications +1;
                });
        },
        methods: {
            logout(){
                this.$inertia.post('/admins/logout');
            },
            screenLock(){
                this.$inertia.post('/admins/lock');
            },
            startTimer() {
                this.timeoutId = window.setTimeout(this.screenLock, this.timeoutInMiliseconds)
            },
            resetTimer() {
                window.clearTimeout(this.timeoutId)
                this.startTimer();
            },
            setupTimers () {
                document.addEventListener("mousemove", this.resetTimer, false);
                document.addEventListener("mousedown", this.resetTimer, false);
                document.addEventListener("keypress", this.resetTimer, false);
                document.addEventListener("touchmove", this.resetTimer, false);
                this.startTimer();
            },
            markAsReadNotifications(){
                this.unreadNotifications = null;
               return axios.post('/admins/mark-as-read/notifications');
            }
        }
    };
</script>

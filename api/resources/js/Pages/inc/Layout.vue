<template>
    <div class="fixed-left">
        <div id="wrapper"  :class="mobile">
            <topy></topy>
            <sidy></sidy>
            <slot />
            <footer class="footer text-right bg-white">
                Copyright © 2020 rideshare , developed by Samreena Alam.
            </footer>
        </div>
    </div>
</template>
<script>
    import TopNavBar from "./TopNavBar";
    import SideNavBar from "./SideNavBar";
    import MobileDetection from "../../Mixins/MobileDetection";
    export default {
        data(){
            return {
                mobile:'',
            }
        },
        mixins:[MobileDetection],
        props: {
            title: String,
        },
        components:{topy:TopNavBar,sidy:SideNavBar},
        computed:{
            success(){
                return this.$page.success;
            },
            errors(){
                return this.$page.errors;
            },
            fault(){
                return this.$page.fault;
            },
        },
        watch: {
            title: {
                immediate: true,
                handler(title) {
                    document.title = title;
                },
            },
            success(){
                if (this.$page.success != null){
                    this.$toast.open({
                        message: this.success,
                        type: "success",
                        position:"top-right",
                        duration: 5000,
                        dismissible: true
                    });
                     this.$page.success = null;
                }
            },
            errors(){
                if(Object.keys(this.errors).length>0){
                    for (var i = 0;i<this.errors[Object.keys(this.errors)[0]].length;i++){
                        this.$toast.open({
                            message: this.errors[Object.keys(this.errors)[0]][i],
                            type: "error",
                            position:"top-right",
                            duration: 5000,
                            dismissible: true
                        })
                    }
                    this.errors = [];
                }
            },
            fault(){
                if (this.$page.fault != null){
                    this.$toast.open({
                        message: this.fault,
                        type: "error",
                        position:"top-right",
                        duration: 5000,
                        dismissible: true
                    });
                    this.$page.fault = null;
                }
            },
        },
        mounted() {
            if (this.isMobile()){
                this.mobile = 'forced enlarged';
            }else {
                this.mobile = '';
            }
        },
        methods:{

        }
    }
</script>
<style>
@import "~vue-toast-notification/dist/theme-default.css";
</style>

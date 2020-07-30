<template>
<layout title="Admin | Dashboard">
    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-title-box">
                            <h4 class="page-title">Dashboard</h4>
                            <ol class="breadcrumb p-0 m-0">
                                <li>
                                    <a href="#">Admin</a>
                                </li>
                                <li CLASS="active">
                                    Dashboard
                                </li>

                            </ol>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-chart-areaspline widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="Statistics">Today visited</p>
                                <h2>
                                    <span v-if="todayVisited || todayVisited=== 0">{{todayVisited}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small>
                                        <span v-if="todayVisited > yesterdayVisited">
                                            <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span>


                                    </small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{yesterdayVisited}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-account-convert widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="User Today">Weekly visitor</p>
                                <h2>
                                    <span v-if="weeklyVisited || weeklyVisited === 0">{{weeklyVisited}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small>
                                        <span v-if="weeklyVisited > lastWeekVisited">
                                            <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span>

                                    </small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{lastWeekVisited}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-layers widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="User This Month">Monthly visitor</p>
                                <h2>
                                    <span v-if="monthlyVisited || monthlyVisited === 0">{{monthlyVisited}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small><span v-if="monthlyVisited > lastMonthVisited">
                                        <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span></small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{lastMonthVisited}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-av-timer widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="Request Per Minute">Newly registered</p>
                                <h2>
                                    <span v-if="newlyRegistered || newlyRegistered === 0">{{newlyRegistered}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small>
                                        <span v-if="newlyRegistered > yesterdayRegistered">
                                        <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span>
                                    </small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{yesterdayRegistered}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-account-multiple widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="Total Users">Newly subscribed</p>
                                <h2>
                                    <span v-if="newlySubscribed || newlySubscribed === 0">{{newlySubscribed}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small>
                                        <span v-if="newlySubscribed > yesterdaySubscribed">
                                        <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span>
                                    </small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{yesterdaySubscribed}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-box widget-box-one">
                            <i class="mdi mdi-download widget-one-icon"></i>
                            <div class="wigdet-one-content">
                                <p class="m-0 text-uppercase font-600 font-secondary text-overflow" title="New Downloads">Subscription canceled</p>
                                <h2>
                                    <span v-if="subscriptionCanceled || subscriptionCanceled === 0">{{subscriptionCanceled}}</span>
                                    <span v-else><i class="fa fa-refresh fa-spin"></i></span>
                                    <small>
                                        <span v-if="subscriptionCanceled > yesterdaySubscriptionCanceled">
                                        <i class="mdi mdi-arrow-up text-success"></i>
                                        </span>
                                        <span v-else>
                                            <i class="mdi mdi-arrow-down text-danger"></i>
                                        </span>
                                    </small></h2>
                                <p class="text-muted m-0"><b>Last:</b> {{yesterdaySubscriptionCanceled}}</p>
                            </div>
                        </div>
                    </div><!-- end col -->

                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-md-12">
                        <div id="map" style="height: 500px;width: 100%;background-color: #000;margin-bottom: 20px"></div>
                        <div class="selection">
                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button type="button" class="btn" @click="getDataForMap('today')" :class="todayMapClass">Today</button>
                                <button type="button" class="btn" @click="getDataForMap('week')" :class="weekMapClass">This week</button>
                                <button type="button" class="btn" @click="getDataForMap('month')" :class="monthMapClass">This month</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h4 class="header-title m-t-0 m-b-30">Mostly visited pages</h4>
                            <hr>
                            <div>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn" @click="getDataForMostVisitedPages('today')" :class="mostVisitedPagesTodayClass">Today</button>
                                    <button type="button" class="btn" @click="getDataForMostVisitedPages('week')" :class="mostVisitedPagesWeeklyClass">This week</button>
                                    <button type="button" class="btn" @click="getDataForMostVisitedPages('month')" :class="mostVisitedPagesMonthlyClass">This month</button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table table-hover m-0">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Page name</th>
                                        <th>Visited</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="p in mostVisitedPages">
                                        <td>1</td>
                                        <td>{{p.page_title}}</td>
                                        <td>{{p.count}}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div> <!-- table-responsive -->
                        </div> <!-- end card -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h4 class="header-title m-t-0 m-b-30">Most visitor countries</h4>
                            <hr>
                            <div>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn" @click="getDataForMostVisitedCountries('today')" :class="mostVisitedCountriesTodayClass">Today</button>
                                    <button type="button" class="btn" @click="getDataForMostVisitedCountries('week')" :class="mostVisitedCountriesWeeklyClass">This week</button>
                                    <button type="button" class="btn" @click="getDataForMostVisitedCountries('month')" :class="mostVisitedCountriesMonthlyClass">This month</button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table table-hover m-0">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Country</th>
                                        <th>Visited</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="p in mostVisitedCountries">
                                        <td>1</td>
                                        <td>{{p.country_code}}</td>
                                        <td>{{p.count}}</td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div> <!-- table-responsive -->
                        </div> <!-- end card -->
                    </div>
                    <!-- end col -->
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h1>Google Analytics reports of visitors</h1>
                            <TrendChart
                                :datasets="[
    {
      data: [10, 50, 20, 100, 40, 60, 80],
      smooth: true,
      fill: true
    }
  ]"
                                :grid="{
     verticalLines: true,
     horizontalLines: true
  }"
                                :labels="{
     xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        yLabels: 5
                        }"
                                :min="0">
                            </TrendChart>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h1>Site Analytics reports of subscribers</h1>
                            <TrendChart
                                :datasets="[
    {
      data: subscribedChartData,
      smooth: true,
      fill: true
    }
  ]"
                                :grid="{
     verticalLines: true,
     horizontalLines: true
  }"
                                :labels="{
     xLabels: subscribedChartDate,
                        yLabels: 5
                        }"
                                :min="0">
                            </TrendChart>
                        </div>
                    </div>
                </div>
                <!-----User info modal----->
                <div v-if="modalActive" class="modal modal-active" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content" style="box-shadow: 0px 1px 82px 16px #ccc">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalScrollableTitle">Setup Info</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user-plus"></i></span>
                                            <input type="text" v-model="infoForm.first_name" :class="infoFormErrorClass.first_name" id="example-input1-group3" name="example-input1-group3" class="form-control" placeholder="First Name">
                                            <span class="text-danger">{{infoFormError.first_name}}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user-plus"></i></span>
                                            <input type="text" v-model="infoForm.last_name" :class="infoFormErrorClass.last_name" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Last Name">
                                            <span class="text-danger">{{infoFormError.last_name}}</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click.prevent="hideModal">Close</button>
                                <button type="button" class="btn btn-primary" @click="saveName">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-----User info modal----->
                <!-- end row -->
            </div> <!-- container -->
        </div> <!-- content -->
    </div>
</layout>
</template>
<script>
    import Layout from "./inc/Layout";
    import Dashboard from "../Mixins/Dashboard";
    export default {
        components: {Layout},
        mixins: [Dashboard],
        data () {
            return {
                mostVisitedPagesTodayClass:'btn-success',
                mostVisitedPagesWeeklyClass:'btn-success',
                mostVisitedPagesMonthlyClass:'btn-success',
                mostVisitedCountriesTodayClass:'btn-success',
                mostVisitedCountriesWeeklyClass:'btn-success',
                mostVisitedCountriesMonthlyClass:'btn-success',
                mostVisitedCountries:[],
                mapVisitors:[],
                mostVisitedPages:[],
                subscribedChartData:[0,4,7],
                subscribedChartDate:['data','data','data'],
                todayMapClass:'btn-success',
                weekMapClass:'btn-success',
                monthMapClass:'btn-success',
                modalActive:false,
                infoForm:{
                    first_name:'',
                    last_name:''
                },
                infoFormError:{
                    first_name:'',
                    last_name:''
                },
                infoFormErrorClass:{
                    first_name:'',
                    last_name:''
                },
                todayVisited:null,
                yesterdayVisited:null,
                weeklyVisited:null,
                lastWeekVisited:null,
                monthlyVisited:null,
                lastMonthVisited:null,
                newlyRegistered:null,
                yesterdayRegistered:null,
                newlySubscribed:null,
                yesterdaySubscribed:null,
                subscriptionCanceled:null,
                yesterdaySubscriptionCanceled:null
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
            this.initializedMarkers();
            setTimeout(()=>{
                let name = localStorage.getItem("name_checked");
                if (name === null){
                    localStorage.setItem("name_checked","pending");
                    if (this.$page.auth.user.first_name === null || this.$page.auth.user.last_name === null){
                        this.modalActive = true;
                    }
                }else if (name === 'pending'){
                    if (this.$page.auth.user.first_name === null || this.$page.auth.user.last_name === null){
                        this.modalActive = true;
                    }
                }

            }, 5000);
            axios.get('/admins/todays/visitors').then((response)=>{
              this.todayVisited = response.data;
            });
            axios.get('/admins/yesterday/visitors').then((response)=>{
              this.yesterdayVisited = response.data;
            });
            axios.get('/admins/weekly/visitors').then((response)=>{
              this.weeklyVisited = response.data;
            });
            axios.get('/admins/last/weekly/visitors').then((response)=>{
              this.lastWeekVisited = response.data;
            });
            axios.get('/admins/monthly/visitors').then((response)=>{
              this.monthlyVisited = response.data;
            });
            axios.get('/admins/last/monthly/visitors').then((response)=>{
              this.lastMonthVisited = response.data;
            });
            axios.get('/admins/todays/registered').then((response)=>{
                this.newlyRegistered = response.data;
            });
            axios.get('/admins/yesterday/registered').then((response)=>{
                this.yesterdayRegistered = response.data;
            });
            axios.get('/admins/todays/subscribed').then((response)=>{
                this.newlySubscribed = response.data;
            });
            axios.get('/admins/yesterday/subscribed').then((response)=>{
                this.yesterdaySubscribed = response.data;
            });
            axios.get('/admins/today/unsubscribed').then((response)=>{
                this.subscriptionCanceled = response.data;
            });
            axios.get('/admins/yesterday/unsubscribed').then((response)=>{
                this.yesterdaySubscriptionCanceled = response.data;
            });
            this.initializedMostVisitedPage();
            this.initializedMostVisitedCountry();
            this.subscriberChartLoader();
        },
        methods: {
            getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            hideModal(){
                localStorage.setItem("name_checked","checked");
                this.modalActive = false;
            },
            saveName(){
                if (this.infoForm.first_name === '' || this.infoForm.last_name === ''){
                    if (this.infoForm.first_name === ''){
                        this.infoFormError.first_name = 'First name required';
                        this.infoFormErrorClass.first_name = 'red';
                    }else{
                        this.infoFormError.first_name = '';
                        this.infoFormErrorClass.first_name = '';
                    }
                    if (this.infoForm.last_name === ''){
                        this.infoFormError.last_name = 'Last name required';
                        this.infoFormErrorClass.last_name = 'red';
                    }else{
                        this.infoFormError.last_name = '';
                        this.infoFormErrorClass.last_name = '';
                    }
                }else {
                    this.$inertia.post('/admins/save/name',this.infoForm).then(()=>{
                        this.infoFormError.first_name = '';
                        this.infoFormErrorClass.first_name = '';
                        this.infoFormError.last_name = '';
                        this.infoFormErrorClass.last_name = '';
                        this.hideModal();
                    });
                }
            },
            getDataForMap(data){
                if (data === 'today'){
                    this.weekMapClass = 'btn-success';
                    this.monthMapClass = 'btn-success';
                    this.initializedMarkers();
                }else if(data === 'week'){
                    this.weekMapClass = 'btn-info';
                    this.todayMapClass = 'btn-success';
                    this.monthMapClass = 'btn-success';
                    axios.get('/admins/weekly/visitor-markers').then((response)=>{
                        this.mapVisitors = response.data;
                        const map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: 0.000, lng: 0.000},
                            zoom: 2,
                            styles: [
                                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                                {
                                    featureType: 'administrative.locality',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'poi',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'poi.park',
                                    elementType: 'geometry',
                                    stylers: [{color: '#263c3f'}]
                                },
                                {
                                    featureType: 'poi.park',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#6b9a76'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'geometry',
                                    stylers: [{color: '#38414e'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'geometry.stroke',
                                    stylers: [{color: '#212a37'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#9ca5b3'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'geometry',
                                    stylers: [{color: '#746855'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'geometry.stroke',
                                    stylers: [{color: '#1f2835'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#f3d19c'}]
                                },
                                {
                                    featureType: 'transit',
                                    elementType: 'geometry',
                                    stylers: [{color: '#2f3948'}]
                                },
                                {
                                    featureType: 'transit.station',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'geometry',
                                    stylers: [{color: '#17263c'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#515c6d'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'labels.text.stroke',
                                    stylers: [{color: '#17263c'}]
                                }
                            ]
                        });
                        const infowindow = new google.maps.InfoWindow();
                        let marker,i;
                        for (i = 0; i < this.mapVisitors.length; i++) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(this.mapVisitors[i].lat, this.mapVisitors[i].lng),
                                icon: '../../../../images/pin.png',
                                map: map
                            });
                            this.contentMessage(marker, this.mapVisitors[i].ip);
                        }
                    });
                }else if(data === 'month'){
                    this.monthMapClass = 'btn-info';
                    this.todayMapClass = 'btn-success';
                    this.weekMapClass = 'btn-success';
                    axios.get('/admins/monthly/visitor-markers').then((response)=>{
                        this.mapVisitors = response.data;
                        const map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: 0.000, lng: 0.000},
                            zoom: 2,
                            styles: [
                                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                                {
                                    featureType: 'administrative.locality',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'poi',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'poi.park',
                                    elementType: 'geometry',
                                    stylers: [{color: '#263c3f'}]
                                },
                                {
                                    featureType: 'poi.park',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#6b9a76'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'geometry',
                                    stylers: [{color: '#38414e'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'geometry.stroke',
                                    stylers: [{color: '#212a37'}]
                                },
                                {
                                    featureType: 'road',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#9ca5b3'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'geometry',
                                    stylers: [{color: '#746855'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'geometry.stroke',
                                    stylers: [{color: '#1f2835'}]
                                },
                                {
                                    featureType: 'road.highway',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#f3d19c'}]
                                },
                                {
                                    featureType: 'transit',
                                    elementType: 'geometry',
                                    stylers: [{color: '#2f3948'}]
                                },
                                {
                                    featureType: 'transit.station',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#d59563'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'geometry',
                                    stylers: [{color: '#17263c'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'labels.text.fill',
                                    stylers: [{color: '#515c6d'}]
                                },
                                {
                                    featureType: 'water',
                                    elementType: 'labels.text.stroke',
                                    stylers: [{color: '#17263c'}]
                                }
                            ]
                        });
                        const infowindow = new google.maps.InfoWindow();
                        let marker,i;
                        for (i = 0; i < this.mapVisitors.length; i++) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(this.mapVisitors[i].lat, this.mapVisitors[i].lng),
                                map: map,
                                icon: '../../../../images/pin.png',
                            });
                            this.contentMessage(marker, this.mapVisitors[i].ip);
                        }
                    });
                }
            },
            initializedMarkers(){
                this.todayMapClass = 'btn-info';
                axios.get('/admins/todays/visitor-markers').then((response)=>{
                    this.mapVisitors = response.data;
                    const map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 0.000, lng: 0.000},
                        zoom: 2,
                        styles: [
                            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                            {
                                featureType: 'administrative.locality',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#d59563'}]
                            },
                            {
                                featureType: 'poi',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#d59563'}]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'geometry',
                                stylers: [{color: '#263c3f'}]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#6b9a76'}]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [{color: '#38414e'}]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry.stroke',
                                stylers: [{color: '#212a37'}]
                            },
                            {
                                featureType: 'road',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#9ca5b3'}]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry',
                                stylers: [{color: '#746855'}]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry.stroke',
                                stylers: [{color: '#1f2835'}]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#f3d19c'}]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'geometry',
                                stylers: [{color: '#2f3948'}]
                            },
                            {
                                featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#d59563'}]
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [{color: '#17263c'}]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#515c6d'}]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.stroke',
                                stylers: [{color: '#17263c'}]
                            }
                        ]
                    });
                    const infowindow = new google.maps.InfoWindow();
                    let marker,i;
                    for (i = 0; i < this.mapVisitors.length; i++) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(this.mapVisitors[i].lat, this.mapVisitors[i].lng),
                            map: map,
                            icon: '../../../../images/pin.png',
                        });
                        this.contentMessage(marker, this.mapVisitors[i].ip);
                    }
                });
            },
            contentMessage(marker,message){
                const infowindow = new google.maps.InfoWindow({
                    content: message
                });
                marker.addListener('click', function() {
                    infowindow.open(marker.get('map'), marker);
                });
            },
            initializedMostVisitedPage(){
                axios.get('/admins/visitors/pages/list').then((response)=>{
                    this.mostVisitedPagesTodayClass ='btn-info';
                    this.mostVisitedPagesWeeklyClass ='btn-success';
                    this.mostVisitedPagesMonthlyClass ='btn-success';
                    this.mostVisitedPages = response.data;
                });
            },
            initializedMostVisitedCountry(){
                axios.get('/admins/most-visitor-country/today').then((response)=>{
                    this.mostVisitedCountriesTodayClass ='btn-info';
                    this.mostVisitedCountriesWeeklyClass ='btn-success';
                    this.mostVisitedCountriesMonthlyClass ='btn-success';
                    this.mostVisitedCountries = response.data;
                });
            },
            getDataForMostVisitedPages(data){
             if (data === 'today'){
                 this.initializedMostVisitedPage();
             }else if(data === 'week'){
                 axios.get('/admins/visitors/weekly/pages/list').then((response)=>{
                     this.mostVisitedPagesTodayClass ='btn-success';
                     this.mostVisitedPagesWeeklyClass ='btn-info';
                     this.mostVisitedPagesMonthlyClass ='btn-success';
                     this.mostVisitedPages = response.data;
                 });
             }else {
                 axios.get('/admins/visitors/monthly/pages/list').then((response)=>{
                     this.mostVisitedPagesTodayClass ='btn-success';
                     this.mostVisitedPagesWeeklyClass ='btn-success';
                     this.mostVisitedPagesMonthlyClass ='btn-info';
                     this.mostVisitedPages = response.data;
                 });
             }
            },
            getDataForMostVisitedCountries(data){
                if (data === 'today'){
                    this.initializedMostVisitedCountry();
                }else if(data === 'week'){
                    axios.get('/admins/most-visitor-country/weekly').then((response)=>{
                        this.mostVisitedCountriesTodayClass ='btn-success';
                        this.mostVisitedCountriesWeeklyClass ='btn-info';
                        this.mostVisitedCountriesMonthlyClass ='btn-success';
                        this.mostVisitedCountries = response.data;
                    });
                }else {
                    axios.get('/admins/most-visitor-country/monthly').then((response)=>{
                        this.mostVisitedCountriesTodayClass ='btn-success';
                        this.mostVisitedCountriesWeeklyClass ='btn-success';
                        this.mostVisitedCountriesMonthlyClass ='btn-info';
                        this.mostVisitedCountries = response.data;
                    });
                }
            },
            subscriberChartLoader(){
                axios.get('/admins/subscribers/monthly/count').then((response)=>{
                   let i;
                   let datas = [];
                   let lebels = [];
                   for (i = 0; i < response.data.length;i++){
                       datas.push(response.data[i].views);
                       lebels.push(response.data[i].date);
                   }
                   this.subscribedChartData = datas;
                   this.subscribedChartDate = lebels;
                });
            }
        }
    };
</script>
<style scoped>
    .modal-active{
        display:block;
    }
    .red{
     border: 1px solid red;
    }
    .widget-box-one{
        height: 140px;
    }
    .selection{
        box-sizing: border-box;
        position: absolute;
        top: 15px;
        right: 70px;
    }

    @media screen and (max-width: 600px) {
        .selection{
            box-sizing: border-box;
            position: absolute;
            top: 60px;
            left: 20px;
            right: auto;
        }
    }
</style>


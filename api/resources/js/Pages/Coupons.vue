<template>
    <layout title="Admin | Coupons List"><th scope="col" style="vertical-align: middle">Avatar</th>
        <div class="content-page">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li CLASS="active">
                                        Coupons List
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-box">
                                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add coupons
</button>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">User</th>
      <th scope="col">Code</th>
      <th scope="col">Expire</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="coupon in couponData" :key="coupon.id">
      <th>{{coupon.user_id}}</th>
      <th>{{coupon.code}}</th>
      <th>{{coupon.expire_date}}</th>
    </tr>
  </tbody>
</table>

                            </div>
                        </div>
                    </div>
                </div> <!-- container -->
            </div> <!-- content -->
        </div>
        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add coupons</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
            <label for="type">Expiry date</label>
            <input type="date" v-model="expiryDate" placeholder="Expiry date" class="form-control">
            </div>
        <div class="form-group">
            <label for="type">Coupon type</label>
           <select v-model="type" name="type" class="form-control" id="type">
               <option value="" disabled>Select type</option>
               <option value="fixed">Fixed amount</option>
               <option value="ratio">Ratio</option>
           </select>
            </div>
        <div class="form-group">
            <input type="number" v-model="amount" placeholder="Amount" class="form-control"></div>
        <div class="form-group"><button @click.prevent="addCoupon" class="btn btn-primary btn-block">ADD COUPON</button></div>
      </div>
      <div class="modal-footer">
        <button type="button" id="closeButton" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
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
               expiryDate:'',
               type:'',
               amount:0,
               couponData:this.coupons
            }
        },

         props: {
            coupons:Array,
        },

        mounted () {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '../admin/assets/pages/jquery.dashboard.js')
            document.head.appendChild(recaptchaScript)
        },
        methods: {
          addCoupon(){
              this.$inertia.post('/admins/coupons',{date:this.expiryDate,type:this.type,amount:this.amount},{
  replace: false,
  preserveState: false,
  preserveScroll: false,
  only: [],
  headers: {},
}).then(()=>{
                var pagebutton= document.getElementById("closeButton");
                pagebutton.click();
              });
          }
        }
    };
</script>
<style scoped>
    input[type=file] {
        cursor: pointer;
        width: 100%;
        height: 58px;
        overflow: hidden;
    }

    input[type=file]:before {
        width: 100%;
        height: 60px;
        font-size: 16px;
        line-height: 32px;
        content: 'Select your file';
        display: inline-block;
        background: white;
        border: 1px solid #000;
        padding: 0 10px;
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
    }

    input[type=file]::-webkit-file-upload-button {
        visibility: hidden;
    }
</style>

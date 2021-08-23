(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{"049f":function(t,e,r){"use strict";r("22ca")},"22ca":function(t,e,r){},6973:function(t,e,r){},"6e95":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"inputNumber"}},[r("v-text-field",{attrs:{label:t.label,mask:t.mask,"hide-details":"false",rules:t.rules,value:t.value,plain:"",dense:""},on:{change:function(e){return t.$emit("input",e)}}},[r("v-icon",{attrs:{slot:"prepend",color:"#ebedee"},on:{click:t.decrease},slot:"prepend"},[t._v("mdi-minus-box")]),r("v-icon",{attrs:{slot:"append-outer",color:"#f7e7ef"},on:{click:t.increase},slot:"append-outer"},[t._v("mdi-plus-box")])],1)],1)},s=[],o=(r("a9e3"),{props:{label:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:9999},maxLength:{type:Number,default:4},rules:{type:Array,default:function(){return[]}},step:{type:Number,default:1},value:[String,Number]},computed:{mask:function(){for(var t="",e=0;e<this.maxLength;e++)t="".concat(t,"#");return t}},methods:{increase:function(){if(isNaN(parseInt(this.value)))return this.$emit("input",this.step);this.value!==this.max&&this.$emit("input",parseInt(this.value)+this.step)},decrease:function(){if(isNaN(parseInt(this.value)))return this.$emit("input",this.min);this.value!==this.min&&this.$emit("input",parseInt(this.value)-this.step)}}}),n=o,c=(r("8ca6"),r("2877")),i=r("6544"),l=r.n(i),u=r("132d"),d=r("8654"),m=Object(c["a"])(n,a,s,!1,null,null,null);e["a"]=m.exports;l()(m,{VIcon:u["a"],VTextField:d["a"]})},"8ca6":function(t,e,r){"use strict";r("6973")},b789:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mt-2",attrs:{id:"cart"}},[t._l(t.cart,(function(e,a){return r("v-row",{key:a,staticClass:"align-center justify-center product mx-1 my-3"},[r("v-col",{staticClass:"col-1 d-flex align-center"},[r("v-icon",{attrs:{color:"grey lighten-2"},on:{click:function(e){return t.delProduct(a)}}},[t._v("mdi-close-circle")])],1),r("v-col",{staticClass:"col-4 col-md-2"},[r("v-img",{attrs:{src:e.image[0],"aspect-ratio":"1"}})],1),r("v-col",{staticClass:"col-7 col-md-8"},[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"col-12 mb-2 mb-md-0 col-md-6 col-lg-4 py-0 pt-md-2"},[r("span",{staticClass:"mr-1"},[t._v(t._s(e.name))]),r("span",{staticClass:"option"},[t._v(t._s(e.option))])]),r("v-col",{staticClass:"col-12 col-md-1 py-0 pt-md-2"},[r("span",[t._v("$"+t._s(e.price))])]),r("v-col",{staticClass:"col-7 col-md-3 py-0"},[r("InputNumber",{attrs:{rules:t.amountRules},model:{value:e.amount,callback:function(r){t.$set(e,"amount",r)},expression:"item.amount"}},[t._v(t._s(e.amount))])],1),r("v-col",{staticClass:"col-5 col-md-2 py-0 d-flex align-end pt-md-2"},[r("span",{staticClass:"pb-1"},[t._v("$"+t._s(e.amount*e.price))])])],1)],1)],1)})),r("v-row",{staticClass:"mt-4"},[t.paymentForm?t._e():r("v-col",{staticClass:"col-12"},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"6"}},[t._v("金額")]),r("v-col",{attrs:{cols:"6"}},[t._v(t._s(t.subtotal))]),r("v-col",{attrs:{cols:"6"}},[t._v("可使用點數")]),r("v-col",{attrs:{cols:"6"}},[t._v(t._s(t.coupon))]),r("v-col",{staticClass:"d-flex justify-center flex-column",attrs:{cols:"6"}},[t._v("使用點數")]),r("v-col",{attrs:{cols:"6"}},[r("v-row",{staticClass:"d-flex align-center flex-column"},[r("v-col",{attrs:{cols:"8",md:"4"}},[r("InputNumber",{attrs:{rules:t.redeem_Rules},model:{value:t.order.redeem,callback:function(e){t.$set(t.order,"redeem",e)},expression:"order.redeem"}})],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[t._v("總金額")]),r("v-col",{attrs:{cols:"6"}},[r("span",{model:{value:t.countSum,callback:function(e){t.countSum=e},expression:"countSum"}},[t._v(t._s(t.countSum))])]),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"px-8",attrs:{color:"#f7e7ef"},on:{click:t.showPaymentForm}},[t._v("送出")])],1)],1)],1),t.paymentForm?r("v-col",{staticClass:"col-12 py-0"},[r("v-card",{staticClass:"pa-5",attrs:{color:"#ebedee",flat:""}},[r("v-card-text",[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[r("span",[t._v("運送方式")])]),r("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[r("span",[t._v("電話號碼")])])],1),r("v-row",[r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[r("v-select",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",items:t.delivery_methods,required:""},model:{value:t.order.delivery_method,callback:function(e){t.$set(t.order,"delivery_method",e)},expression:"order.delivery_method"}})],1),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[r("v-text-field",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",rules:t.contact_number_Rules,required:""},model:{value:t.order.contact_number,callback:function(e){t.$set(t.order,"contact_number",e)},expression:"order.contact_number"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[r("span",[t._v("付款方式")])]),"刷卡"===t.order.payment_method?r("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[r("span",[t._v("卡號")])]):t._e()],1),r("v-row",[r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[r("v-select",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",items:t.payment_methods,required:""},model:{value:t.order.payment_method,callback:function(e){t.$set(t.order,"payment_method",e)},expression:"order.payment_method"}})],1),"刷卡"===t.order.payment_method?r("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[r("span",[t._v(t._s(t.order.valueFields.cardNumber))])]):t._e()],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("span",[t._v("地址")])]),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[r("v-text-field",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",rules:t.address_Rules,required:""},model:{value:t.order.address,callback:function(e){t.$set(t.order,"address",e)},expression:"order.address"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mr-2 mb-1",attrs:{plain:""},on:{click:t.cancelOrder}},[t._v("取消")]),r("v-btn",{staticClass:"mr-2 mb-1 px-8",attrs:{color:"#f7e7ef"},on:{click:t.submitOrder}},[t._v("送出")])],1)],1)],1):t._e()],1),r("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"pa-5",attrs:{color:"#ebedee",flat:""}},[r("v-card-title",[r("span",{staticClass:"text-h5 font-weight-bold"},[t._v("信用卡資料")])]),r("v-card-text",[r("v-form",{ref:"form2",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("vue-paycard",{attrs:{"value-fields":t.order.valueFields}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("span",[t._v("卡片號碼")])]),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[r("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",rules:t.cardNumber_Rules,required:"","data-card-field":"",id:t.inputFields.cardNumber},model:{value:t.order.valueFields.cardNumber,callback:function(e){t.$set(t.order.valueFields,"cardNumber",e)},expression:"order.valueFields.cardNumber"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("span",[t._v("持有者姓名")])]),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[r("v-text-field",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",rules:t.cardName_Rules,required:"","data-card-field":"",id:t.inputFields.cardName},model:{value:t.order.valueFields.cardName,callback:function(e){t.$set(t.order.valueFields,"cardName",e)},expression:"order.valueFields.cardName"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"8"}},[r("span",[t._v("卡片到期日")])]),r("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"4"}},[r("span",[t._v("卡片驗證碼")])])],1),r("v-row",[r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"4"}},[r("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.month,required:"","data-card-field":"",id:t.inputFields.cardMonth},model:{value:t.order.valueFields.cardMonth,callback:function(e){t.$set(t.order.valueFields,"cardMonth",e)},expression:"order.valueFields.cardMonth"}})],1),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"4"}},[r("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.year,required:"","data-card-field":"",id:t.inputFields.cardYear},model:{value:t.order.valueFields.cardYear,callback:function(e){t.$set(t.order.valueFields,"cardYear",e)},expression:"order.valueFields.cardYear"}})],1),r("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"4"}},[r("v-text-field",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",rules:t.cardCvv_Rules,required:"","data-card-field":"",id:t.inputFields.cardCvv},model:{value:t.order.valueFields.cardCvv,callback:function(e){t.$set(t.order.valueFields,"cardCvv",e)},expression:"order.valueFields.cardCvv"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mr-2 mb-1",attrs:{plain:""},on:{click:t.paycardCancel}},[t._v("取消")]),r("v-btn",{staticClass:"mr-2 mb-1 px-8",attrs:{color:"#f7e7ef"},on:{click:t.paycardSave}},[t._v("儲存")])],1)],1)],1)],2)},s=[],o=r("5530"),n=r("1da1"),c=(r("a434"),r("d81d"),r("99af"),r("96cf"),r("f27b"),r("6e95")),i={name:"cart",components:{InputNumber:c["a"]},data:function(){return{valid:!0,cart:[],order:{date:"",delivery_method:"宅配",address:"",contact_number:"",payment:!1,payment_method:"貨到付款",valueFields:{cardNumber:"",cardName:"",cardMonth:"01",cardYear:"2022",cardCvv:""},redeem:0,coupon:0,sum:0,delivery_number:"",state:"待出貨"},redeem_Rules:[function(t){return!!t||"請輸入數量"},function(t){return t&&t>=0&&t<=10||"請輸入正確數量"}],amountRules:[function(t){return!!t||"請輸入數量"},function(t){return t&&t>=1||"請輸入正確數量"}],delivery_methodRules:[function(t){return!!t||"請輸入運送方式"},function(t){return t&&t>=1||"請輸入正確方式"}],address_Rules:[function(t){return!!t||"請輸入地址"},function(t){return t&&t.length>=1||"請輸入正確地址"}],contact_number_Rules:[function(t){return!!t||"請輸入電話號碼"},function(t){return t&&t.length>=10||"請輸入有效的號碼"}],cardNumber_Rules:[function(t){return!!t||"請輸入卡號"},function(t){return t&&16===t.length||"請輸入有效的卡號"}],cardName_Rules:[function(t){return!!t||"請輸入姓名"},function(t){return t&&t.length>=1||"請輸入有效的姓名"}],cardCvv_Rules:[function(t){return!!t||"請輸入驗證碼"},function(t){return t&&t.length>=3||"請輸入有效的驗證碼"}],editedIndex:-1,delivery_methods:["宅配"],payment_methods:["刷卡","貨到付款"],month:["01","02","03","04","05","06","07","08","09","10","11","12"],year:["2021","2022","2023","2024","2025","2026","2027","2028"],paymentForm:!1,coupon:0,dialog:!1,inputFields:{cardNumber:"v-card-number",cardName:"v-card-name",cardMonth:"v-card-month",cardYear:"v-card-year",cardCvv:"v-card-cvv"}}},computed:{subtotal:function(){return 0===this.cart.length?0:this.cart.reduce((function(t,e){return t+e.amount*e.price}),0)},countSum:function(){return"".concat(this.subtotal)-"".concat(this.order.redeem)}},methods:{paycardSave:function(){this.$refs.form2.validate()?this.dialog=!1:this.$swal({icon:"error",title:"錯誤",text:"請填寫資料"})},paycardCancel:function(){this.order.valueFields={cardNumber:"",cardName:"",cardMonth:"",cardYear:"",cardCvv:""},this.dialog=!1,this.order.payment_method="貨到付款"},submitOrder:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=3;break}return t.$swal({icon:"error",title:"錯誤",text:"請填寫資料"}),e.abrupt("return");case 3:return e.prev=3,"刷卡"===t.order.payment_method?t.order.payment=!0:t.order.payment=!1,e.next=7,t.axios.post("/orders",t.order,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 7:t.$swal({icon:"success",title:"成功",text:"請至訂單查詢"}),t.paymentForm=!1,t.cart=[],e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),t.$swal({icon:"error",title:"錯誤",text:"請填寫資料"});case 15:return e.prev=15,t.order.coupon=t.coupon-t.order.redeem,e.next=19,t.axios.patch("/users",{_id:t.$store.state.user._id,coupon:t.order.coupon},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 19:e.next=24;break;case 21:e.prev=21,e.t1=e["catch"](15),t.$swal({icon:"error",title:"錯誤",text:"扣點數錯誤"});case 24:case"end":return e.stop()}}),e,null,[[3,12],[15,21]])})))()},cancelOrder:function(){this.paymentForm=!1},showPaymentForm:function(){this.paymentForm=!0},editProduct:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.patch("/users/cart",{account:e.$store.state.user.account,product:e.cart[t]._id,amount:e.cart[t].amount,option:e.cart[t].option},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"編輯商品失敗"});case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},delProduct:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.patch("/users/cart",{account:e.$store.state.user.account,product:e.cart[t]._id,amount:0,option:e.cart[t].option},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.cart.splice(t,1),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"刪除商品失敗"});case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users/cart",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:r=e.sent,a=r.data,t.coupon=a.result.coupon,0===a.result.cart.length?t.order.redeem=0:a.result.coupon>=50?t.order.redeem=50:t.order.redeem=a.result.coupon,t.cart=a.result.cart.map((function(t){return t=Object(o["a"])(Object(o["a"])({},t.product),{},{amount:t.amount,option:t.option}),0===t.image.length?t.image=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.image=t.image.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.edit=!1,t.amountModel=t.amount,t})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得購物車失敗"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},watch:{cart:{handler:function(){if(this.cart.length>=1){for(var t=0,e=0;e<this.cart.length;e++)this.cart[e].amountModel!==this.cart[e].amount&&(t=e);this.editProduct(t)}},deep:!0},order:{handler:function(){this.order.redeem>this.coupon?(this.$swal({icon:"error",title:"錯誤",text:"您最多只能折抵".concat(this.coupon,"點")}),this.order.redeem=this.coupon):this.order.redeem>50&&(this.$swal({icon:"error",title:"錯誤",text:"同筆訂單最多只能折抵 50 點"}),this.order.redeem=50),"刷卡"===this.order.payment_method&&0===this.order.valueFields.cardNumber.length&&(this.dialog=!0)},deep:!0},countSum:{handler:function(){this.order.sum=this.countSum},deep:!0}}},l=i,u=(r("049f"),r("2877")),d=r("6544"),m=r.n(d),p=r("8336"),v=r("b0af"),h=r("99d9"),f=r("62ad"),b=r("a523"),_=r("169a"),x=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("159b"),r("7db0"),r("58df")),w=r("7e2b"),g=r("3206"),C=Object(x["a"])(w["a"],Object(g["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(o["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),y=r("132d"),k=r("adda"),$=r("0fd9"),F=r("b974"),N=r("2fa4"),V=r("8654"),R=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=R.exports;m()(R,{VBtn:p["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:f["a"],VContainer:b["a"],VDialog:_["a"],VForm:C,VIcon:y["a"],VImg:k["a"],VRow:$["a"],VSelect:F["a"],VSpacer:N["a"],VTextField:V["a"]})},f27b:function(t,e,r){}}]);
//# sourceMappingURL=cart.619a5cd4.js.map
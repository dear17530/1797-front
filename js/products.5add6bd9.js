(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{1985:function(t,e,r){},"64b4":function(t,e,r){"use strict";r("1985")},e6dc:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"product"}},[t.$vuetify.breakpoint.lgAndUp?r("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{attrs:{color:"#ebedee"}}),t._l(t.itemsCategory,(function(e){return r("v-tab",{key:e,on:{click:function(r){return t.change(e)}}},[t._v(t._s(e))])}))],2):r("v-row",{staticClass:"my-4 justify-center"},t._l(t.itemsCategory,(function(e){return r("v-col",{key:e,staticClass:"col-3 col-sm-2 col-md-2 text-center"},[r("v-btn",{attrs:{small:"",rounded:""},on:{click:function(r){return t.change(e)}}},[r("span",{staticClass:"text-button"},[t._v(t._s(e))])])],1)})),1),"所有商品"===t.items?r("v-row",{staticClass:"ma-0"},t._l(t.products,(function(t){return r("v-col",{key:t._id,attrs:{cols:"6",md:"6",lg:"4"}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/product/"+t._id}},[r("ProductCard",{attrs:{product:t}})],1)],1)})),1):r("v-row",{staticClass:"ma-0"},t._l(t.showproducts,(function(t){return r("v-col",{key:t._id,attrs:{cols:"6",md:"6",lg:"4"}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/product/"+t._id}},[r("ProductCard",{attrs:{product:t}})],1)],1)})),1)],1)},s=[],c=r("1da1"),n=(r("96cf"),r("4de4"),r("d81d"),r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"productCard"}},[r("v-card",{staticClass:"mx-auto text-center",attrs:{width:"100%"}},[r("div",{staticClass:"productBg"},[r("v-img",{attrs:{height:"100%",width:"100%",src:t.product.image[0]}}),r("span",{staticClass:"label"},[t._v("每件回饋 "+t._s(t.product.coupon)+" 點")])],1),r("v-card-title",{staticClass:"justify-center flex-column"},[r("p",{staticClass:"pt-0 mb-0"},[t._v(t._s(t.product.name))]),r("p",{staticClass:"pt-0 mb-0"},[t._v("$"+t._s(t.product.price))])])],1)],1)}),o=[],i={name:"productCard",props:{product:{type:Object,required:!0}}},u=i,l=(r("64b4"),r("2877")),d=r("6544"),p=r.n(d),m=r("b0af"),f=r("99d9"),v=r("adda"),b=Object(l["a"])(u,n,o,!1,null,null,null),g=b.exports;p()(b,{VCard:m["a"],VCardTitle:f["c"],VImg:v["a"]});var h={name:"Products",data:function(){return{tab:null,products:[],showproducts:[],items:"所有商品",itemsCategory:["所有商品","生活用品","涮嘴零食","寵物用品","美妝保健","3C用品"],category:""}},components:{ProductCard:g},methods:{change:function(t){if("所有商品"===t)this.showproducts=this.products,this.items="所有商品";else{this.items=t;var e=this.products.filter((function(e){return e.category===t}));this.showproducts=e}}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products");case 3:r=e.sent,a=r.data,t.products=a.result.map((function(t){return t.image.length>0?t.image=t.image.map((function(t){return"".concat("","/files/").concat(t)})):t.image=t.imagefiles.map((function(t){return"".concat("","/files/").concat(t)})),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},C=h,_=r("8336"),w=r("62ad"),y=r("a523"),x=r("0fd9"),k=r("71a3"),V=r("fe57"),j=r("9a96"),$=Object(l["a"])(C,a,s,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:_["a"],VCol:w["a"],VContainer:y["a"],VRow:x["a"],VTab:k["a"],VTabs:V["a"],VTabsSlider:j["a"]})}}]);
//# sourceMappingURL=products.5add6bd9.js.map
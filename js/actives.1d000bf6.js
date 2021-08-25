(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actives"],{1681:function(t,e,a){},a844:function(t,e,a){"use strict";var r=a("5530"),s=(a("a9e3"),a("1681"),a("8654")),o=a("58df"),n=Object(o["a"])(s["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(r["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},cc3d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"actives"}},[t.$vuetify.breakpoint.lgAndUp?a("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"#ebedee"}}),t._l(t.itemsCategory,(function(e){return a("v-tab",{key:e,on:{click:function(a){return t.change(e)}}},[t._v(t._s(e))])}))],2):a("v-row",{staticClass:"my-4 justify-center"},t._l(t.itemsCategory,(function(e){return a("v-col",{key:e,staticClass:"col-3 col-sm-2 col-md-2 text-center"},[a("v-btn",{attrs:{small:"",rounded:""},on:{click:function(a){return t.change(e)}}},[a("span",{staticClass:"text-button"},[t._v(t._s(e))])])],1)})),1),a("v-row",[a("v-col",{staticClass:"text-right"},[a("v-btn",{attrs:{rounded:"",text:""},on:{click:t.showform}},[a("v-icon",{attrs:{left:"",fab:"",color:"red lighten-1",middle:""}},[t._v("mdi-plus-circle")]),a("span",[t._v("新增活動")])],1)],1)],1),"所有活動"===t.items?a("v-row",{staticClass:"ma-0"},t._l(t.actives,(function(e,r){return a("v-col",{key:e._id,attrs:{cols:"12",sm:"6",lg:"4"}},[a("ActiveCard",{staticClass:"mb-5",attrs:{active:e},on:{follow:function(a){t.follow(e._id)},addfriend:function(a){return t.addfriend(e.user)}}})],1)})),1):a("v-row",{staticClass:"ma-0"},t._l(t.showactives,(function(e,r){return a("v-col",{key:e._id,attrs:{cols:"12",sm:"6",lg:"4"}},[a("ActiveCard",{staticClass:"mb-5",attrs:{active:e},on:{follow:function(a){t.follow(e._id)},addfriend:function(a){return t.addfriend(e.user)}}})],1)})),1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-5",attrs:{color:"#ebedee"}},[a("v-card-title",[a("span",{staticClass:"text-h5 font-weight-bold"},[t._v("新增活動")])]),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("span",[t._v("發起人")])]),a("v-col",{staticClass:"pt-1 pb-0 mb-3",attrs:{cols:"12"}},[a("v-avatar",{staticClass:"mr-2",attrs:{size:"20"}},[a("img",{attrs:{src:t.form.avatar}})]),a("span",[t._v(t._s(t.form.userId))])],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("活動主題")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",rules:t.title_Rules,required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("圖片")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("file-pond",{ref:"pond",attrs:{name:"pond","allow-multiple":"true","max-files":"1","accepted-file-types":"image/jpeg, image/png","label-idle":"點擊或拖曳新增圖片",allowReorder:"true",files:t.form.activeImage},on:{updatefiles:t.handleFilePondUpdateFile}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("揪團類別")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.activesCategory,required:""},model:{value:t.form.categories,callback:function(e){t.$set(t.form,"categories",e)},expression:"form.categories"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("地點")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.citiesCategory,required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("日期")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{"background-color":"white",solo:"",dense:"",readonly:""},model:{value:t.form.activeDate,callback:function(e){t.$set(t.form,"activeDate",e)},expression:"form.activeDate"}},"v-text-field",s,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{min:t.minday,"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.activeDate,callback:function(e){t.$set(t.form,"activeDate",e)},expression:"form.activeDate"}})],1)],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("介紹")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-textarea",{attrs:{"background-color":"white",solo:"",name:"input-7-4",required:"",rules:t.description_Rules},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{plain:""},on:{click:t.reset}},[t._v("取消")]),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{color:"#f7e7ef"},on:{click:t.submit}},[t._v("送出")])],1)],1)],1)],1)},s=[],o=a("1da1"),n=(a("96cf"),a("4de4"),a("d81d"),a("a4d3"),a("e01a"),a("99af"),a("fb6a"),a("86a6")),i={name:"actives",data:function(){return{form:{userId:"",title:"",city:"",activeDate:"",description:"",member:"",avatar:"",categories:"",activeImage:""},actives:[],showactives:[],title_Rules:[function(t){return!!t||"請輸入主題"},function(t){return t&&t.length>=1||"請輸入主題"}],description_Rules:[function(t){return!!t||"請介紹活動"},function(t){return t&&t.length>=10||"介紹最少 10 字"}],items:"所有活動",itemsCategory:["所有活動","電影活動","戶外活動","展覽活動","桌遊活動","其它活動"],activesCategory:["電影活動","戶外活動","展覽活動","桌遊活動","其它活動"],dialog:!1,tab:null,citiesCategory:["基隆","台北","新北","桃園","新竹市","苗栗","台中","彰化","南投","雲林","嘉義","台南","高雄","屏東","台東","花蓮","宜蘭","澎湖","金門","連江"],menu:!1}},components:{ActiveCard:n["a"]},computed:{minday:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,a="";a=e<=9?"0"+e:e;var r=(new Date).getDate();return r<=9&&(r="0"+(new Date).getDate()),t+"-"+a+"-"+r}},methods:{change:function(t){if("所有活動"===t)this.showactives=this.actives,this.items="所有活動";else{this.items=t;var e=this.actives.filter((function(e){return e.categories===t}));this.showactives=e}},addfriend:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.user.islogin){a.next=3;break}return e.$swal({icon:"error",title:"請先登入",text:"請至登入頁登入"}),a.abrupt("return");case 3:if(t!==e.user._id){a.next=7;break}e.$swal({icon:"error",title:"錯誤",text:"您無法私訊自己哦！"}),a.next=16;break;case 7:return a.prev=7,a.next=10,e.axios.post("/users/"+e.$store.state.user._id,{userId:t},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 10:e.$swal({icon:"success",title:"成功",text:"請至私人訊息查看"}),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](7),e.$swal({icon:"error",title:"失敗",text:a.t0.response.data.message});case 16:case"end":return a.stop()}}),a,null,[[7,13]])})))()},follow:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.user.islogin){a.next=4;break}e.$swal({icon:"error",title:"請先登入",text:"請至登入頁登入"}),a.next=13;break;case 4:return a.prev=4,a.next=7,e.axios.patch("/users/"+e.$store.state.user._id,{follow:t},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:e.$swal({icon:"success",title:"加入活動成功",text:"請到會員中心查看"}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](4),e.$swal({icon:"error",title:"失敗",text:a.t0.response.data.message});case 13:case"end":return a.stop()}}),a,null,[[4,10]])})))()},showform:function(){!this.$store.state.user.account.length>=1?this.$swal({icon:"error",title:"請先登入",text:"請至登入頁登入"}):this.dialog=!0},handleFilePondUpdateFile:function(t){this.form.activeImage=t.map((function(t){return t.file}))},reset:function(){this.dialog=!1},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(!t.$store.state.user.account.length>=1)){e.next=4;break}t.$swal({icon:"error",title:"請先登入",text:"請至登入頁登入"}),e.next=27;break;case 4:for(r in t.dialog=!1,e.prev=5,a=new FormData,t.form)if(Array.isArray(t.form[r])&&"activeImage"===r)for(s in t.form[r])a.append("imagefiles",t.form[r][s]);else a.append(r,t.form[r]);return e.next=10,t.axios.post("/posts",a,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 10:return t.form.title="",t.form.city="",t.form.activeDate="",t.form.description="",t.form.categories="",t.form.activeImage="",e.next=18,t.axios.get("/posts");case 18:o=e.sent,n=o.data,t.actives=n.result.map((function(t){return t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.activeDate=t.activeDate.slice(0,10),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t})),t.$swal({icon:"success",title:"揪團成功",text:"請至會員中心查看貼文"}),e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](5),t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message});case 27:case"end":return e.stop()}}),e,null,[[5,24]])})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/posts");case 3:a=e.sent,r=a.data,t.actives=r.result.map((function(t){return t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.activeDate=t.activeDate.slice(0,10),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得活動貼文失敗"});case 11:if(!(t.$store.state.user.account.length>=1)){e.next=24;break}return e.prev=12,e.next=15,t.axios.get("/users/"+t.$store.state.user._id,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 15:s=e.sent,o=s.data,t.form.userId=o.result.userId,0===o.result.imagefiles.length?t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(o.result.avatar):t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(o.result.imagefiles),e.next=24;break;case 21:e.prev=21,e.t1=e["catch"](12),t.$swal({icon:"error",title:"錯誤",text:"取得使用者資料失敗"});case 24:case"end":return e.stop()}}),e,null,[[0,8],[12,21]])})))()}},c=i,l=a("2877"),u=a("6544"),p=a.n(u),f=a("8212"),d=a("8336"),v=a("b0af"),m=a("99d9"),h=a("62ad"),g=a("a523"),w=a("2e4b"),b=a("169a"),x=a("132d"),k=a("e449"),C=a("0fd9"),_=a("b974"),y=a("2fa4"),$=a("71a3"),I=a("fe57"),D=a("9a96"),V=a("8654"),R=a("a844"),j=Object(l["a"])(c,r,s,!1,null,null,null);e["default"]=j.exports;p()(j,{VAvatar:f["a"],VBtn:d["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:h["a"],VContainer:g["a"],VDatePicker:w["a"],VDialog:b["a"],VIcon:x["a"],VMenu:k["a"],VRow:C["a"],VSelect:_["a"],VSpacer:y["a"],VTab:$["a"],VTabs:I["a"],VTabsSlider:D["a"],VTextField:V["a"],VTextarea:R["a"]})}}]);
//# sourceMappingURL=actives.1d000bf6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserData"],{"0629":function(t,e,a){},1681:function(t,e,a){},"7e87":function(t,e,a){"use strict";a("da78")},"922f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-4",attrs:{id:"userdata"}},[a("v-row",{staticClass:"justify-space-around align-center"},[a("v-col",{staticClass:"col-12 col-md-4 user d-flex flex-row justify-center pa-0"},[a("div",{staticClass:"d-flex justify-center align-center px-3"},[a("v-avatar",{attrs:{size:"60"}},[a("img",{attrs:{src:t.form.avatar}})])],1),a("div",{staticClass:"d-flex flex-column justify-center pa-3"},[a("span",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.form.userId)),a("v-icon",{staticClass:"pb-1 ml-2",attrs:{small:""},on:{click:t.edit}},[t._v("mdi-pencil-circle-outline")])],1),a("span",{staticClass:"mr-2 text-caption"},[t._v(t._s(t.getAge)+" "+t._s(t.getConstellation))]),a("p",{staticClass:"mb-0 text-caption"},[t._v(t._s(t.getintroduction))])])]),a("v-col",{staticClass:"col-3 col-md-2 d-flex flex-column justify-center pointer hovercol",on:{click:function(e){return t.showPosts()}}},[a("span",{staticClass:"text-h6 text-center"},[t._v(t._s(t.posts.length))]),a("span",{staticClass:"text-caption text-center"},[t._v("Posts")])]),a("div",{staticClass:"clickBorder"}),a("v-col",{staticClass:"col-3 col-md-2 d-flex flex-column justify-center pointer hovercol",on:{click:function(e){return t.showFollows()}}},[a("span",{staticClass:"text-h6 text-center"},[t._v(t._s(t.follows.length))]),a("span",{staticClass:"text-caption text-center"},[t._v("Follows")])]),a("div",{staticClass:"clickBorder"}),a("v-col",{staticClass:"col-3 col-md-2 d-flex flex-column justify-center pointer hovercol",on:{click:t.showOrders}},[a("span",{staticClass:"text-h6 text-center"},[t._v(t._s(t.orders))]),a("span",{staticClass:"text-caption text-center"},[t._v("Orders")])])],1),t.showPost?a("v-row",{staticClass:"justify-center justify-md-start"},[a("v-col",{staticClass:"col-10 col-md-12"},[a("p",{staticClass:"mb-0 text-h6"},[t._v("All Posts")])]),t._l(t.posts,(function(e,s){return a("v-col",{key:e._id,attrs:{cols:"10",md:"6",lg:"4"}},[a("postCard",{staticClass:"mb-5",attrs:{post:e},on:{delPost:function(a){return t.delPost(e._id)},editPost:function(a){return t.editPost(e._id)},indexFollower:t.indexFollower}})],1)}))],2):t._e(),t.showFollow?a("v-row",{staticClass:"justify-center justify-md-start"},[a("v-col",{staticClass:"col-10 col-md-12"},[a("p",{staticClass:"mb-0 text-h6"},[t._v("All Follows")])]),t._l(t.follows,(function(e,s){return a("v-col",{key:e._id,attrs:{cols:"10",md:"6",lg:"4"}},[a("followCard",{staticClass:"mb-5",attrs:{followPost:e},on:{indexFollower:t.indexFollower,cancel:function(a){return t.cancel(e._id)}}})],1)}))],2):t._e(),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-5",attrs:{color:"#ebedee"}},[a("v-card-title",[a("span",{staticClass:"text-h5 font-weight-bold"},[t._v("編輯個人資料")])]),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("span",[t._v("頭貼")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("file-pond",{ref:"pond",attrs:{name:"pond","allow-multiple":"true","max-files":"1","accepted-file-types":"image/jpeg, image/png","label-idle":"點擊或拖曳新增圖片",allowReorder:"true",files:t.form.imagefiles},on:{updatefiles:t.handleFilePondUpdateFile}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"6"}},[a("span",[t._v("姓名")])]),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"6"}},[a("span",[t._v("暱稱")])])],1),a("v-row",[a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",rules:t.nameRules,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",rules:t.userIdRules,required:""},model:{value:t.form.userId,callback:function(e){t.$set(t.form,"userId",e)},expression:"form.userId"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"6"}},[a("span",[t._v("帳號")])]),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"6"}},[a("span",[t._v("生日")])])],1),a("v-row",[a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",disabled:""},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",disabled:""},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("信箱")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{"background-color":"white",solo:"",dense:"",disabled:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("介紹")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-textarea",{attrs:{"background-color":"white",solo:"",dense:"",required:""},model:{value:t.form.introduction,callback:function(e){t.$set(t.form,"introduction",e)},expression:"form.introduction"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{plain:""},on:{click:t.editCancel}},[t._v("取消")]),a("v-btn",{staticClass:"mr-2 mb-1 px-8",attrs:{color:"#f7e7ef"},on:{click:t.editSave}},[t._v("儲存")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.postdialog,callback:function(e){t.postdialog=e},expression:"postdialog"}},[a("v-card",{staticClass:"pa-5",attrs:{color:"#ebedee"}},[a("v-card-title",[a("span",{staticClass:"text-h5 font-weight-bold"},[t._v("編輯活動")])]),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("span",[t._v("活動主題")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-text-field",{staticClass:"pt-0",attrs:{"background-color":"white",solo:"",dense:"",rules:t.title_Rules,required:""},model:{value:t.postform.title,callback:function(e){t.$set(t.postform,"title",e)},expression:"postform.title"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",[t._v("圖片")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("file-pond",{ref:"pond",attrs:{name:"pond","allow-multiple":"true","max-files":"1","accepted-file-types":"image/jpeg, image/png","label-idle":"點擊或拖曳新增圖片",allowReorder:"true",files:t.postform.imagefiles},on:{updatefiles:t.handleFilePondUpdateFile}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v("揪團類別")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.activesCategory,required:""},model:{value:t.postform.categories,callback:function(e){t.$set(t.postform,"categories",e)},expression:"postform.categories"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v("地點")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-select",{attrs:{"background-color":"white",solo:"",dense:"",items:t.citiesCategory,required:""},model:{value:t.postform.city,callback:function(e){t.$set(t.postform,"city",e)},expression:"postform.city"}})],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v("日期")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{"background-color":"white",solo:"",dense:"",readonly:""},model:{value:t.postform.activeDate,callback:function(e){t.$set(t.postform,"activeDate",e)},expression:"postform.activeDate"}},"v-text-field",o,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{min:t.minday,"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.postform.activeDate,callback:function(e){t.$set(t.postform,"activeDate",e)},expression:"postform.activeDate"}})],1)],1)],1),a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v("介紹")])]),a("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[a("v-textarea",{attrs:{"background-color":"white",solo:"",dense:"",required:"",rules:t.description_Rules},model:{value:t.postform.description,callback:function(e){t.$set(t.postform,"description",e)},expression:"postform.description"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{plain:""},on:{click:t.editPostCancel}},[t._v("取消")]),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{color:"#f7e7ef"},on:{click:t.editPostsubmit}},[t._v("送出")])],1)],1)],1)],1)},o=[],r=a("5530"),i=a("1da1"),n=(a("96cf"),a("d81d"),a("99af"),a("fb6a"),a("a4d3"),a("e01a"),a("b0c0"),a("e5dd"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"postCard"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{staticClass:"radius ma-0"},[a("v-img",{attrs:{src:t.post.activeImage[0],"aspect-ratio":"1.6"}},[a("v-expand-transition",[s?a("div",{staticClass:"descriptionBg d-flex transition-fast-in-fast-out white darken-2 v-card--reveal black--text pa-5",staticStyle:{height:"100%","white-space":"pre-wrap"}},[t._v(t._s(t.post.description))]):t._e()])],1),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"d-flex align-end pb-1",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v(t._s(t.post.categories))])]),a("v-col",{staticClass:"d-flex align-center py-0",attrs:{cols:"6"}},[a("span",{staticClass:"black--text"},[t._v(t._s(t.post.title))])]),a("v-col",{staticClass:"d-flex align-center pt-1",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption mr-2"},[t._v(t._s(t.post.activeDate))]),a("span",{staticClass:"text-caption"},[t._v(t._s(t.post.city))])]),a("v-col",{staticClass:"d-flex align-center py-0",attrs:{cols:"12"},on:{click:t.clickshowFollower}},[a("span",{staticClass:"text-caption"},[t._v("跟團者")]),a("v-icon",{staticClass:"ml-1",attrs:{right:"",color:"black",small:""}},[t._v("mdi-chevron-down")])],1),t.showFollower?a("v-col",{staticClass:"d-flex align-center py-0",attrs:{cols:"12"}},t._l(t.post.member,(function(e,s){return a("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"#ebedee",small:"",chip:""},on:{click:function(a){return t.clickFollower(e.user_id)}}},[a("v-icon",{staticClass:"ml-1",attrs:{left:"",color:"#d3a19c"}},[t._v("mdi-send")]),a("span",{staticClass:"text-caption pt-1"},[t._v(t._s(e.userId))])],1)})),1):t._e(),a("v-col",{staticClass:"d-flex align-center justify-center px-2",attrs:{cols:"12"}},[a("v-row",[a("v-col",{staticClass:"text-center py-1",attrs:{cols:"6"}},[a("v-btn",{attrs:{rounded:"",text:""},on:{click:t.clickDel}},[a("span",[t._v("刪除貼文")])])],1),a("v-col",{staticClass:"text-center py-1",attrs:{cols:"6"}},[a("v-btn",{attrs:{rounded:"",text:""},on:{click:t.clickEdit}},[a("span",[t._v("編輯貼文")])])],1)],1)],1)],1)],1)],1)]}}])})],1)}),c=[],l={name:"postCard",props:{post:{type:Object,required:!0}},data:function(){return{delPost:!1,editPost:!1,indexFollower:0,showFollower:!1}},methods:{clickshowFollower:function(){this.showFollower=!this.showFollower},clickDel:function(){this.delPost=!this.delPost,this.$emit("delPost",this.delPost)},clickEdit:function(){this.editPost=!this.editPost,this.$emit("editPost",this.editPost)},clickFollower:function(t){this.indexFollower=t,this.$emit("indexFollower",this.indexFollower)}}},u=l,d=(a("7e87"),a("2877")),p=a("6544"),h=a.n(p),f=a("8336"),m=a("b0af"),v=a("99d9"),w=a("cc20"),g=a("62ad"),b=a("0789"),x=a("ce87"),_=a("132d"),C=a("adda"),k=a("0fd9"),y=Object(d["a"])(u,n,c,!1,null,null,null),I=y.exports;h()(y,{VBtn:f["a"],VCard:m["a"],VCardText:v["b"],VChip:w["a"],VCol:g["a"],VExpandTransition:b["a"],VHover:x["a"],VIcon:_["a"],VImg:C["a"],VRow:k["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"followCard"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{staticClass:"radius"},[a("v-img",{attrs:{src:t.followPost.activeImage[0],"aspect-ratio":"1.6"}},[a("v-expand-transition",[s?a("div",{staticClass:"descriptionBg d-flex transition-fast-in-fast-out white darken-2 v-card--reveal black--text pa-5",staticStyle:{height:"100%","white-space":"pre-wrap"}},[t._v(t._s(t.followPost.description))]):t._e()])],1),a("v-card-text",{staticClass:"pt-5"},[a("v-row",[a("v-col",{staticClass:"d-flex align-end pb-1",attrs:{cols:"12"}},[a("span",{staticClass:"text-caption"},[t._v(t._s(t.followPost.categories))])]),a("v-col",{staticClass:"d-flex align-center py-0",attrs:{cols:"6"}},[a("span",{staticClass:"black--text"},[t._v(t._s(t.followPost.title))])]),a("v-col",{staticClass:"d-flex align-center pt-1",attrs:{cols:"12"}},[a("v-row",[a("v-col",[a("span",{staticClass:"text-caption mr-2"},[t._v(t._s(t.followPost.activeDate))]),a("span",{staticClass:"text-caption"},[t._v(t._s(t.followPost.city))])]),a("v-col",{staticClass:"text-center"},[a("v-avatar",{staticClass:"mr-2",attrs:{size:"20"}},[a("img",{attrs:{src:t.followPost.avatar[0]}})]),a("span",{staticClass:"black--text"},[t._v(t._s(t.followPost.userId))])],1)],1)],1),a("v-col",{staticClass:"d-flex align-center justify-center px-2"},[a("v-row",[a("v-col",{staticClass:"text-center py-1",attrs:{cols:"6"}},[a("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){return t.clickFollower(t.followPost.user)}}},[a("span",[t._v("加入好友")])])],1),a("v-col",{staticClass:"text-center py-1",attrs:{cols:"6"}},[a("v-btn",{attrs:{rounded:"",text:""},on:{click:t.clickCancel}},[a("span",[t._v("取消跟團")])])],1)],1)],1)],1)],1)],1)]}}])})],1)},j=[],D={name:"followCard",props:{followPost:{type:Object,required:!0}},data:function(){return{cancel:!1,indexFollower:0}},methods:{clickCancel:function(){this.cancel=!this.cancel,this.$emit("cancel",this.cancel)},clickFollower:function(t){this.indexFollower=t,this.$emit("indexFollower",this.indexFollower)}}},F=D,P=(a("f874"),a("8212")),V=Object(d["a"])(F,$,j,!1,null,null,null),R=V.exports;h()(V,{VAvatar:P["a"],VBtn:f["a"],VCard:m["a"],VCardText:v["b"],VCol:g["a"],VExpandTransition:b["a"],VHover:x["a"],VImg:C["a"],VRow:k["a"]});var B={name:"UserData",data:function(){return{tab:null,form:{account:"",email:"",name:"",userId:"",imagefiles:"",introduction:"",birthday:"",avatar:""},postform:{id:"",title:"",city:"",activeDate:"",description:"",categories:"",activeImage:[],imagefiles:[]},birthdayTime:0,birth_month:0,birth_day:0,nowTime:0,dialog:!1,postdialog:!1,nameRules:[function(t){return!!t||"請輸入正確姓名，以供後續取貨時使用"},function(t){return t&&t.length>=2||"請輸入正確姓名，以供後續取貨時使用"}],userIdRules:[function(t){return!!t||"請輸入暱稱"},function(t){return t&&t.length>=1||"請輸入暱稱"}],title_Rules:[function(t){return!!t||"請輸入主題"},function(t){return t&&t.length>=1||"請輸入主題"}],description_Rules:[function(t){return!!t||"請介紹活動"},function(t){return t&&t.length>=10||"介紹最少 10 字"}],posts:[],follows:[],items:["我的揪團","我的跟團"],showPost:!0,showFollow:!1,editedItem:"",orders:0,menu:!1,activesCategory:["電影活動","戶外活動","展覽活動","桌遊活動","其它活動"],citiesCategory:["基隆","台北","新北","桃園","新竹市","苗栗","台中","彰化","南投","雲林","嘉義","台南","高雄","屏東","台東","花蓮","宜蘭","澎湖","金門","連江"]}},components:{postCard:I,followCard:R},computed:{getintroduction:function(){return void 0===this.form.introduction||0===this.form.introduction.length?"請填寫自我介紹，讓大家更認識你哦":this.form.introduction},getAge:function(){var t=parseInt((new Date).getTime());return Math.ceil((t-this.birthdayTime)/31536e6)+"歲"},getConstellation:function(){return 3===this.birth_month&&this.birth_day>=21||4===this.birth_month&&this.birth_day<=19?"牡羊座":4===this.birth_month&&this.birth_day>=20||5===this.birth_month&&this.birth_day<=20?"金牛座":5===this.birth_month&&this.birth_day>=21||6===this.birth_month&&this.birth_day<=21?"雙子座":6===this.birth_month&&this.birth_day>=22||7===this.birth_month&&this.birth_day<=22?"巨蟹座":7===this.birth_month&&this.birth_day>=23||8===this.birth_month&&this.birth_day<=22?"獅子座":8===this.birth_month&&this.birth_day>=23||9===this.birth_month&&this.birth_day<=22?"處女座":9===this.birth_month&&this.birth_day>=23||10===this.birth_month&&this.birth_day<=23?"天秤座":10===this.birth_month&&this.birth_day>=24||11===this.birth_month&&this.birth_day<=22?"天蠍座":11===this.birth_month&&this.birth_day>=23||12===this.birth_month&&this.birth_day<=21?"射手座":12===this.birth_month&&this.birth_day>=22||1===this.birth_month&&this.birth_day<=19?"魔羯座":1===this.birth_month&&this.birth_day>=20||2===this.birth_month&&this.birth_day<=18?"水瓶座":"雙魚座"},minday:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,a="";a=e<=9?"0"+e:e;var s=(new Date).getDate();return s<=9&&(s="0"+(new Date).getDate()),t+"-"+a+"-"+s}},methods:{showOrders:function(){this.$router.push("/userorders")},cancel:function(t){var e=this;this.$swal({icon:"warning",title:"取消跟團",text:"您確定要取消跟團嗎?",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"我要取消",cancelButtonText:"取消"}).then((function(a){if(a.isConfirmed)return e.axios.patch("/users/"+e.$store.state.user._id,{post:t},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}}),e.refollow()})).then((function(t){return e.refollow()}))},reget:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users/post",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:a=e.sent,s=a.data,t.posts=s.result.map((function(t){return t=Object(r["a"])({},t.post),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.member=t.member.map((function(t){return t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t})),t.activeDate=t.activeDate.slice(0,10),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得貼文資料失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},refollow:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users/follow",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:a=e.sent,s=a.data,t.follows=s.result.map((function(t){return t=Object(r["a"])({},t.follow),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.activeDate=t.activeDate.slice(0,10),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得貼文資料失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},indexFollower:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.post("/users/"+e.$store.state.user._id,{userId:t},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.$swal({icon:"success",title:"成功",text:"請至私人訊息查看"}),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),e.$swal({icon:"error",title:"失敗",text:a.t0.response.data.message});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},editPostCancel:function(){this.postdialog=!1},editPostsubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in t.postdialog=!1,e.prev=1,a=new FormData,t.postform)if(Array.isArray(t.postform[s])&&"imagefiles"===s)for(o in t.postform[s])a.append("imagefiles",t.postform[s][o]);else if(Array.isArray(t.postform[s])&&"activeImage"===s)if(null===t.postform[s].length||t.postform[s].length<=0)a.append("activeImage","1628609175182.jpg");else for(r in t.postform[s])a.append("activeImage",t.postform[s][r]);else a.append(s,t.postform[s]);return e.next=6,t.axios.patch("/posts/"+t.postform.id,a,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 6:t.reget(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.$swal({icon:"errow",title:"錯誤",text:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},editPost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.postdialog=!0,e.editedItem="post",a.prev=2,a.next=5,e.axios.get("/posts/"+t,{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 5:s=a.sent,o=s.data,e.postform={id:o.result._id,title:o.result.title,city:o.result.city,activeDate:o.result.activeDate.slice(0,10),description:o.result.description,categories:o.result.categories,imagefiles:[]},0===o.result.imagefiles.length?e.postform.activeImage=o.result.activeImage:e.postform.activeImage=o.result.imagefiles,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](2),e.$swal({icon:"error",title:"錯誤",text:"取得貼文失敗"});case 14:case"end":return a.stop()}}),a,null,[[2,11]])})))()},delPost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$swal({icon:"warning",title:"您確定要刪除此篇貼文嗎?",text:"刪除此篇貼文後，將無法回復貼文哦！",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"我要刪除",cancelButtonText:"取消"}).then((function(a){if(a.isConfirmed)return e.axios.patch("/posts/"+t,{show:!1},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}}),e.reget()})).then((function(t){return e.reget()}));case 1:case"end":return a.stop()}}),a)})))()},showPosts:function(){this.showPost=!0,this.showFollow=!1},showFollows:function(){this.showPost=!1,this.showFollow=!0},handleFilePondUpdateFile:function(t){"user"===this.editedItem?this.form.imagefiles=t.map((function(t){return t.file})):this.postform.imagefiles=t.map((function(t){return t.file}))},edit:function(){this.dialog=!0,this.editedItem="user"},editCancel:function(){this.dialog=!1},editSave:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,o,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in t.dialog=!1,e.prev=1,a=new FormData,t.form)if(Array.isArray(t.form[s])&&"imagefiles"===s)for(o in t.form[s])a.append("imagefiles",t.form[s][o]);else"avatar"===s?a.append("avatar",t.form.avatar.substr(-17,17)):a.append(s,t.form[s]);return e.next=6,t.axios.patch("/users/"+t.$store.state.user._id,a,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 6:return e.next=8,t.axios.get("/users/"+t.$store.state.user._id,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 8:r=e.sent,i=r.data,t.form.account=i.result.account,t.form.name=i.result.name,t.form.email=i.result.email,t.form.userId=i.result.userId,0===i.result.imagefiles.length?t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(i.result.avatar):t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(i.result.imagefiles),t.form.imagefiles=[],t.form.introduction=i.result.introduction,t.form.birthday=new Date(i.result.birthday).toLocaleString().slice(0,9),t.birth_day=new Date(i.result.birthday).getDate(),t.birth_month=new Date(i.result.birthday).getMonth()+1,t.birthdayTime=new Date(i.result.birthday).getTime(),e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](1),t.$swal({icon:"errow",title:"錯誤",text:e.t0.response.data.message});case 26:case"end":return e.stop()}}),e,null,[[1,23]])})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,o,i,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users/"+t.$store.state.user._id,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:a=e.sent,s=a.data,t.orders=s.result.orders.length,t.form.account=s.result.account,t.form.name=s.result.name,t.form.email=s.result.email,t.form.userId=s.result.userId,0===s.result.imagefiles.length?t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(s.result.avatar):t.form.avatar="".concat("https://kt17977777777777.herokuapp.com","/files/").concat(s.result.imagefiles),t.form.imagefiles=[],t.form.introduction=s.result.introduction,t.form.birthday=new Date(s.result.birthday).toLocaleString().slice(0,9),t.birth_day=new Date(s.result.birthday).getDate(),t.birth_month=new Date(s.result.birthday).getMonth()+1,t.birthdayTime=new Date(s.result.birthday).getTime(),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得會員資料失敗"});case 22:return e.prev=22,e.next=25,t.axios.get("/users/post",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 25:o=e.sent,i=o.data,t.posts=i.result.map((function(t){return t=Object(r["a"])({},t.post),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.member=t.member.map((function(t){return t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t})),t.activeDate=t.activeDate.slice(0,10),t})),e.next=33;break;case 30:e.prev=30,e.t1=e["catch"](22),t.$swal({icon:"error",title:"錯誤",text:"取得貼文資料失敗"});case 33:return e.prev=33,e.next=36,t.axios.get("/users/follow",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 36:n=e.sent,c=n.data,t.follows=c.result.map((function(t){return t=Object(r["a"])({},t.follow),0===t.imagefiles.length?t.activeImage=t.activeImage.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})):t.activeImage=t.imagefiles.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.avatar=t.avatar.map((function(t){return"".concat("https://kt17977777777777.herokuapp.com","/files/").concat(t)})),t.activeDate=t.activeDate.slice(0,10),t})),e.next=44;break;case 41:e.prev=41,e.t2=e["catch"](33),t.$swal({icon:"error",title:"錯誤",text:"取得貼文資料失敗"});case 44:case"end":return e.stop()}}),e,null,[[0,19],[22,30],[33,41]])})))()}},T=B,O=a("a523"),z=a("2e4b"),A=a("169a"),H=a("e449"),S=a("b974"),q=a("2fa4"),E=a("8654"),G=a("a844"),M=Object(d["a"])(T,s,o,!1,null,null,null);e["default"]=M.exports;h()(M,{VAvatar:P["a"],VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:g["a"],VContainer:O["a"],VDatePicker:z["a"],VDialog:A["a"],VIcon:_["a"],VMenu:H["a"],VRow:k["a"],VSelect:S["a"],VSpacer:q["a"],VTextField:E["a"],VTextarea:G["a"]})},a844:function(t,e,a){"use strict";var s=a("5530"),o=(a("a9e3"),a("1681"),a("8654")),r=a("58df"),i=Object(r["a"])(o["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},da78:function(t,e,a){},e5dd:function(t,e,a){},f874:function(t,e,a){"use strict";a("0629")}}]);
//# sourceMappingURL=UserData.fe0a6a3c.js.map
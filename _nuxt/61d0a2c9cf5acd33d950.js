(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{297:function(e,t,a){var i=a(316);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(38).default)("52a890c0",i,!0,{})},315:function(e,t,a){"use strict";var i=a(297);a.n(i).a},316:function(e,t,a){(e.exports=a(37)(!1)).push([e.i,"\n.main-list-container[data-v-6b32b42c]{padding:10vh 2vw 4vh\n}\n.main-list-container .main-list-header[data-v-6b32b42c]{margin-bottom:4vh\n}\n.main-list-container .main-list .main-list-item[data-v-6b32b42c]{margin-bottom:4vh;cursor:pointer\n}\n.main-list-container .main-list .main-list-item .main-list-item-image[data-v-6b32b42c]{height:15vw;background-size:cover\n}\n.main-list-container .main-list .main-list-item .main-list-item-content[data-v-6b32b42c]{padding:1vh 0;font-size:.7rem\n}",""])},351:function(e,t,a){"use strict";a.r(t);a(104);var i={data:function(){return{sampleBeatsArray:[{title:"sheck wes - mo bamba",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-01.jpg?alt=media&token=1804edf4-689c-4ebd-9c42-8d5229fd7f93",beatId:"123245"},{title:"TIC TOC ft Lil Baby",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-02.png?alt=media&token=4db97767-3870-40e2-85ac-9a6d9b346131",beatId:"123245"},{title:"BAD!",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-03.jpg?alt=media&token=ab6d615e-eca4-4c8e-8b44-647ffa63611a",beatId:"123245"},{title:"ZEZE (feat. Travis)",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-19.jpeg?alt=media&token=ac7fa2b3-285a-45dd-88bc-5fef8deba09c",beatId:"123245"},{title:'147Calboy "Envy Me"',description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-05.png?alt=media&token=c3fbaa78-49bc-492d-a042-e082db469f0a",beatId:"123245"},{title:"Leave Me Alone",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-06.jpg?alt=media&token=f2cb3cea-7e6b-4243-b062-5085f19f23b1",beatId:"123245"},{title:"MAMA ft Nicki Minaj",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-07.png?alt=media&token=7ea0ed1b-ed6a-4540-84a5-1943668f1149",beatId:"123245"},{title:"sheck wes - mo bamba",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-01.jpg?alt=media&token=1804edf4-689c-4ebd-9c42-8d5229fd7f93",beatId:"123245"},{title:"Topangna",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-08.jpeg?alt=media&token=01820996-352b-4a07-b926-3ca0bcbfe1dc",beatId:"123245"},{title:"Endank Seokamti",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-09.jpg?alt=media&token=2006fd0b-016f-4c0a-bde1-3d886407a3da",beatId:"123245"},{title:"NU DISCO / INDIE",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-10.png?alt=media&token=15c1c131-8c78-4d56-a203-6ec11270a441",beatId:"123245"},{title:"Gentle Dreams",description:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/beatween-1c7e8.appspot.com/o/album-cover-11.jpg?alt=media&token=0465a8ef-ee38-4c2c-aa0b-c5425a7640c0",beatId:"123245"}]}},computed:{currentParam:function(){return this.$route.params.id}},mounted:function(){this.loadIndexData()},methods:{selectBlock:function(e){var t=e.path[1].id,a=this.sampleBeatsArray.filter(function(e){return e.id==t});this.$store.commit("setSelectedTrack",a[0]),this.$router.push("beats/".concat(t))},loadIndexData:function(){console.log(this.sampleBeatsArray)}}},o=(a(315),a(13)),s=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"main-list-container"},[a("h1",{staticClass:"main-list-header"},[e._v("Discover Beats")]),e._v(" "),a("el-row",{staticClass:"main-list",attrs:{gutter:20}},e._l(e.sampleBeatsArray,function(t){return a("el-col",{key:t.index,staticClass:"main-list-item",attrs:{id:t.beatId,span:4}},[a("div",{staticClass:"main-list-item-image",style:{"background-image":"url("+t.imageUrl+")"},on:{click:e.selectBlock}}),e._v(" "),a("div",{staticClass:"main-list-item-content"},[a("h2",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))])])])}))],1),e._v(" "),a("nuxt-child")],1)},[],!1,null,"6b32b42c",null);s.options.__file="index.vue";t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{281:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b5040224",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);n(93),n(38),n(95);var o={props:{page:{type:Object,required:!0}},computed:{formatPublishDate:function(){var t=new Date(this.page.date),time=this.page.date.split("T")[1];return"".concat(t.toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"}),", ").concat(time)}}},r=(n(283),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"w-screen p-5"},[n("p",{staticClass:"my-5"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.page.title.toLowerCase()))]),t._v(" "),n("hr"),t._v(" "),n("nuxt-content",{directives:[{name:"show",rawName:"v-show",value:t.page,expression:"page"}],staticClass:"p-2",attrs:{document:t.page}})],1)])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n(281)},284:function(t,e,n){(e=n(22)(!1)).push([t.i,'body{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.title{font-size:1.875rem}.subtitle,.title{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;letter-spacing:1px}.subtitle{font-size:1.5rem}.tag{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;font-size:1.125rem;letter-spacing:1px}.nuxt-content blockquote{font-style:italic;margin-left:.75rem;padding-left:.75rem;padding-right:.75rem;border-left:2px solid #551ab8}.nuxt-content a{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;font-size:1.125rem;text-decoration:underline;letter-spacing:1px}.nuxt-content a[target=_blank]:after{content:"∉"}.nuxt-content h2{font-size:1.5rem}.nuxt-content h2,.nuxt-content h3{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem;padding-bottom:.75rem;line-height:1.3}.nuxt-content h3{font-size:1.25rem}.nuxt-content li,.nuxt-content p{line-height:1.7;font-size:16px;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}@media screen and (min-width:600px){.nuxt-content li,.nuxt-content p{font-size:18px}}.nuxt-content p{margin-bottom:1rem}.nuxt-content ol,.nuxt-content ul{list-style-type:decimal;list-style-position:inside;margin-bottom:1rem}',""]),t.exports=e},304:function(t,e,n){"use strict";n.r(e);n(39);var o=n(6),r=n(282),l={components:{PostView:r.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("".concat("archive","/").concat(t.params.slug)).fetch();case 2:return n=e.sent,e.abrupt("return",{page:n});case 4:case"end":return e.stop()}}),e)})))()}},c=n(8),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("PostView",{attrs:{page:this.page}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostView:n(282).default})}}]);
__NUXT_JSONP__("/archive/javascript-101-this", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{post:{slug:"javascript-101-this",title:"JavaScript 101  ~  This",desc:"If you have spent some time reading or writing JavaScript, you will have no doubt came across the `this` keyword. In other object orientated languages, the `this` keyword refers to the current instance of the class. In JavaScript the value of this depends on the context of the function and where it is called.Not knowing this or rather `this` can be confusing.",published:j,date:"2017-06-16T11:23",taxonomy:{category:["blog"],tag:["javascript","web development","javascript 101"]},header_image:"1",googledesc:"A look into the 'this' keyword in JavaScript.",twittercardoptions:"summary",articleenabled:h,article:{"@context":k,"@type":"NewsArticle",image:{"@type":y},publisher:{"@type":"Organization",logo:{"@type":y}}},musiceventenabled:h,orgaenabled:h,orga:{ratingValue:2.5},orgaratingenabled:h,eventenabled:h,personenabled:h,restaurantenabled:h,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":k,"@type":"Restaurant",address:{"@type":z}},facebookenable:j,person:{"@context":k,"@type":"person",address:{"@type":z}},event:{"@context":k,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":k,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:e,depth:3,text:e}],body:{type:"root",children:[{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:"",src:".\u002Fimages\u002F101.png?cropResize=300,300"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h3",props:{id:e},children:[{type:b,tag:g,props:{href:"#this",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:e}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you have spent some time reading or writing JavaScript, you will have no doubt came across the "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" keyword. In other object orientated languages, the "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" keyword refers to the current instance of the class. In JavaScript the value of this depends on the context of the function and where it is called.Not knowing this or rather "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" can be confusing."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In a "},{type:b,tag:g,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fjavascript-101-funky-functions-part-1",rel:[q,r,s],target:t},children:[{type:a,value:"previous post"}]},{type:a,value:" I looked at the silently passed argument "},{type:b,tag:d,props:{},children:[{type:a,value:"argument"}]},{type:a,value:", where I mentioned that there where two, "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" is the second and more widely used of these implicit arguments."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In this post I'm going to be looking at "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" in four different situations:"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"In a regular function."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"When a function is called as a method."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"In a function that's being called as a constructor."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:B},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Let's get started..."}]},{type:a,value:c},{type:b,tag:u,props:{id:"in-a-regular-function"},children:[{type:b,tag:g,props:{href:"#in-a-regular-function",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:"In a regular function"}]},{type:a,value:c},{type:b,tag:v,props:{async:j,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fd9zpz8dx\u002Fembed\u002F"},children:[]},{type:a,value:H},{type:b,tag:f,props:{},children:[{type:a,value:"In a regular function ( or anywhere outside of a function ) when in "},{type:b,tag:I,props:{},children:[{type:a,value:"non strict mode"}]},{type:a,value:" "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" refers to the window object, or the root of the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FDocument_Object_Model",rel:[q,r,s],target:t},children:[{type:a,value:"DOM"}]},{type:a,value:". In "},{type:b,tag:I,props:{},children:[{type:a,value:"strict mode"}]},{type:a,value:" i.e.. when "},{type:b,tag:d,props:{},children:[{type:a,value:"\"use strict\""}]},{type:a,value:" is at the top of the JavaScript file, "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" is undefined, which is probably more desirable and will reduce any unwanted side effects."}]},{type:a,value:c},{type:b,tag:u,props:{id:"when-a-function-is-called-as-a-method"},children:[{type:b,tag:g,props:{href:"#when-a-function-is-called-as-a-method",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:"When a function is called as a method"}]},{type:a,value:c},{type:b,tag:v,props:{async:j,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fo5y9oLyu\u002F7\u002Fembed\u002F"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" inside of an object refers to the object on which the method is being called on. In the above example this refers to the anObject..object. Gordon Zhu founder of "},{type:b,tag:g,props:{href:J,rel:[q,r,s],target:t},children:[{type:a,value:"Watch and Code"}]},{type:a,value:", uses the term \"the left of the dot rule\", which I think is a great way to identifying what "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" will refer to."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For example if we had something that looked like "},{type:b,tag:d,props:{},children:[{type:a,value:"object.innerObject.oneMoreObj.doSomething()"}]},{type:a,value:" using the \"left of the dot rule\", We can quickly see that doSomething is a method of the oneMoreObj object."}]},{type:a,value:c},{type:b,tag:u,props:{id:"in-a-function-thats-being-called-as-a-constructor"},children:[{type:b,tag:g,props:{href:"#in-a-function-thats-being-called-as-a-constructor",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:"In a function that's being called as a constructor"}]},{type:a,value:c},{type:b,tag:v,props:{async:j,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Ftzt2ys7x\u002F8\u002Fembed\u002F"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In a function that's being used as a constructor, "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:" points object that has been created from the constructor."}]},{type:a,value:c},{type:b,tag:u,props:{id:"when-you-explicitly-set-the-value-of-this-manually-using-bind-apply-or-call"},children:[{type:b,tag:g,props:{href:"#when-you-explicitly-set-the-value-of-this-manually-using-bind-apply-or-call",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:B},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:v,props:{async:j,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fm7k88ujv\u002Fembed\u002F"},children:[]},{type:a,value:H},{type:b,tag:f,props:{},children:[{type:a,value:"Bind sets the 'this' of the function, call and apply execute the function and set the "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:". Call and apply are very similar except apply takes arguments as an array and call takes its arguments as a comma separated list. I look at the first letter to remember the difference, apply: array, call: commas. It is worth noting once bind is set, it is bound once and cannot be changed."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"That was "},{type:b,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Some additional resources:"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{href:J,rel:[q,r,s],target:t},children:[{type:a,value:"Watch and Code: Practical JavaScript"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F3127429\u002Fhow-does-the-this-keyword-work",rel:[q,r,s],target:t},children:[{type:a,value:"This on Stack Overflow"}]}]},{type:a,value:c}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fjavascript-101-this",extension:".md",createdAt:K,updatedAt:K}}],fetch:{},mutations:void 0}}("text","element","\n","code","this","p","a",false,"li",true,"http:\u002F\u002Fschema.org\u002F","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","h4","script","ul",".","ImageObject","PostalAddress","When you explicitly set the value of "," manually using ","bind",", ","apply",", or ","call"," \n","strong","https:\u002F\u002Fwatchandcode.com\u002Fp\u002Fpractical-javascript","2021-05-06T16:21:28.866Z")));
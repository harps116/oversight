__NUXT_JSONP__("/archive/how-flappy-bird-was-made", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{post:{slug:"how-flappy-bird-was-made",title:"How Flappy Bird Was Made",desc:t,date:"2018-03-21T18:17",taxonomy:{category:["blog"],tag:["javascript","100 days of learning"]},twitterenable:l,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:l,toc:[{id:u,depth:m,text:v},{id:w,depth:m,text:x},{id:y,depth:m,text:z}],body:{type:"root",children:[{type:b,tag:n,props:{id:u},children:[{type:b,tag:e,props:{href:"#a-journey-back-in-time",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{alt:"flappy-bird.jpg",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmeb1KvmvKkkGMwC4R7LgCvPNr9ajFWSjaHJCHyZxniYbn\u002Fflappy-bird.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Today I am going to inform you on how to make it. Now this is just one way of doing it, there is no way I can go into any level of detail to have you publishing on the app store in a short write up like this one.  Think of the following steps like a template for anyone who would like to get started and learn more about theories behind programming and animation. I have been writing code professionally for close to year so my relative knowledge is fairly limited but hopefully I can convey the main aspects of this program."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I will briefly talk about the tools involved and then go on to talk about the concept used to generate a basic physics and game engine using a coding style known as Object Oriented Programming."}]},{type:a,value:c},{type:b,tag:n,props:{id:w},children:[{type:b,tag:e,props:{href:"#tooling-up",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Language I will be using is known as JavaScript which is a dynamic , high-level, weakly typed, prototype-based, multi-paradigm interpreted programming language that runs in the browser, currently the only language to run natively in the browser. That’s a lot of jargon for a dead simple and really a fun first language to learn."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I will also be using a library called "},{type:b,tag:e,props:{href:B,rel:[g,h,i],target:j},children:[{type:a,value:"P5.js"}]},{type:a,value:" which is a library written in JavaScript that is a browser implementation of the Proccessing a library designed to make coding more accessible to artists, designers, beginners and educators. ( touch on what a library is )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{alt:"p5.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmengU6tTprJhhsGvdRS42G6F1gPQqTszdejzSBFpYkChk\u002Fp5.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Due to the nature of JS, all of the logic can run in the browser, it can be implemented on websites such as "},{type:b,tag:e,props:{href:C,rel:[g,h,i],target:j},children:[{type:a,value:D}]},{type:a,value:" or "},{type:b,tag:e,props:{href:"https:\u002F\u002Fjsfiddle.net\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"JSFiddle"}]},{type:a,value:" which give people an environment to run browser based languages. This is the lower barrier to entry and getting started that there is in programming."}]},{type:a,value:c},{type:b,tag:n,props:{id:y},children:[{type:b,tag:e,props:{href:"#the-process",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Initially we must write the code to create a canvas or run our program ( or to use a P5 term the sketch ). The library introduces us to the idea of a setup and a draw concept. The setup allows us to create the things that we are going to use within the draw loop that continues to run throughout the lifespan of the sketch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily that is very easy in P5.js which uses a very simple syntax to allow rich functionality. Programming languages in general aim to express the sequence of actions required to create functionality. This is as more for the human side of the equation as it is for the machine underneath."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"JS’s syntax allows for the concept of Object Orientated Programming, which is for another talk. Simply we are going to create the things needed for the game in code. We need a bird and pipes. That’s it. We then need to give behavior to the bird and the pipes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let’s line up the steps in creating the Flappy Bird Game:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Create a canvas add a bird and many pipes."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"To the bird add x and y position, a way for it to appear and update in the draw loop. Add forces, gravity, lift, drag."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Make the pipes appear at random points on the canvas."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Add the functionality to react to the space bar being pressed."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is the game action:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"265",dataThemeId:"0",dataSlugHash:"KQwOKL",dataDefaultTab:"js,result",dataUser:"harps116",dataEmbedVersion:"2",dataPenTitle:E,className:["codepen"]},children:[{type:a,value:"See the Pen "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FKQwOKL\u002F"},children:[{type:a,value:E}]},{type:a,value:" by Adam Harpur ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116"},children:[{type:a,value:"@harps116"}]},{type:a,value:") on "},{type:b,tag:e,props:{href:C},children:[{type:a,value:D}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:"script",props:{async:l,src:"https:\u002F\u002Fproduction-assets.codepen.io\u002Fassets\u002Fembed\u002Fei.js"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Flappy Bird game uses a series of objects with behaviour that reacts to user input. The input simply increases the lift when the space bar is pressed the bird checks it’s y position with that of the pipe to see if its been hit. If that is the case it turns the pipe red. The pips also have a decreasing x position that give the impression that the bird is moving forward."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The secret to learning how to write code is to first ask how something does what it can do and then write the steps to do it. Libraries like P5.js make exploring ideas easy and enjoyable and I would recommend checking out their "},{type:b,tag:e,props:{href:B,rel:[g,h,i],target:j},children:[{type:a,value:"website"}]},{type:a,value:" for more info."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fhow-flappy-bird-was-made",extension:".md",createdAt:F,updatedAt:F}}],fetch:{},mutations:void 0}}("text","element","\n","p","a",false,"nofollow","noopener","noreferrer","_blank","li",true,3,"h3","true",-1,"span","icon","icon-link","In 2013 a game was released that in the following year would take the world by storm. A young Vietnamese programmer named Dong Nguyen released a game that he would later remove from the App store from guilt of overuse and the addictive nature of the game. That game was Flappy Bird.","a-journey-back-in-time","A Journey back in time..","tooling-up","Tooling up","the-process","The Process","img","https:\u002F\u002Fp5js.org\u002F","https:\u002F\u002Fcodepen.io","CodePen","Crappy Bird","2021-05-06T16:21:28.866Z")));
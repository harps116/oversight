__NUXT_JSONP__("/blog/wasm-a-wasm-game-of-life", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an){return {data:[{post:{slug:"wasm-a-wasm-game-of-life",title:"a wasm way of life",date:"2021-03-29T05:02",desc:"coways game of life in wasm",tags:["wasm","rust"],toc:[{id:X,depth:K,text:Y},{id:Z,depth:K,text:_},{id:$,depth:K,text:aa}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"After a number of weeks getting to grips with the basics of Rust and some of the syntax I'm going to explore how we can use Rust code with JavaScript via Web Assembly."}]},{type:a,value:e},{type:b,tag:L,props:{id:X},children:[{type:b,tag:q,props:{href:"#getting-started",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:Y}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"I'll be using a template to get started, the folks over at "},{type:b,tag:q,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm",rel:[x,y,z],target:A},children:[{type:a,value:"rustwasm"}]},{type:a,value:" have set up the boiler plate to get started. Note that "},{type:b,tag:q,props:{href:"https:\u002F\u002Fgithub.com\u002Fcargo-generate\u002Fcargo-generate",rel:[x,y,z],target:A},children:[{type:a,value:"cargo generate"}]},{type:a,value:" is also used."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-text"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"cargo generate --git https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fwasm-pack-template\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"using "},{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life"}]},{type:a,value:" as name of the project."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,Q]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"builtin",R]},children:[{type:a,value:"cd"}]},{type:a,value:" wasm-game-of-life\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"here are the contents:"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,Q]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002F\n├── Cargo.toml\n├── LICENSE_APACHE\n├── LICENSE_MIT\n├── README.md\n└── src\n   ├── lib.rs\n   └── utils.rs\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"an overview"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Cargo.toml"}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Here is where dependencies and meta data are defined for the cargo, which is Rust's package manager and build tool. As we used a template to inialise the project, the file is already pre-configured with the "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:" dependency."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"src\u002Flib.rs"}]},{type:a,value:"\nThis file is the root of the Rust crate that is going to be compiled into WebAssembly. It uses "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:" to interface with JavaScript. It currently exports the "},{type:b,tag:g,props:{},children:[{type:a,value:T}]},{type:a,value:" function which uses the "},{type:b,tag:g,props:{},children:[{type:a,value:"window.alert"}]},{type:a,value:" method to alert a message."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-rust"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"mod"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"module-declaration",F]},children:[{type:a,value:"utils"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"use"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"wasm_bindgen"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:"prelude"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"*"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"\u002F\u002F When the `wee_alloc` feature is enabled, use `wee_alloc` as the global"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"\u002F\u002F allocator."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G,H]},children:[{type:a,value:"#[cfg(feature = "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"wee_alloc\""}]},{type:a,value:")]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,G,H]},children:[{type:a,value:"#[global_allocator]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"static"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:"ALLOC"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:"INIT"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,G,H]},children:[{type:a,value:af}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"extern"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah,E]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:"s"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"&"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"str"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,G,H]},children:[{type:a,value:af}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"pub"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah,E]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"Hello, wasm-game-of-life!\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:B}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"src\u002Futils.rs"}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"The src\u002Futils.rs module provides common utilities to make working with Rust compiled to WebAssembly easier."}]},{type:a,value:e},{type:b,tag:L,props:{id:Z},children:[{type:b,tag:q,props:{href:"#building-the-project",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"I'll be using "},{type:b,tag:q,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fwasm-pack",rel:[x,y,z],target:A},children:[{type:a,value:"wasm-pack"}]},{type:a,value:" to orchestrate the following build steps:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Ensure that we have Rust 1.30 or newer and the "},{type:b,tag:g,props:{},children:[{type:a,value:"wasm32-unknown-unknown"}]},{type:a,value:" target installed via "},{type:b,tag:g,props:{},children:[{type:a,value:"rustup"}]},{type:a,value:n}]},{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Compile the Rust sources into a WebAssembly "},{type:b,tag:g,props:{},children:[{type:a,value:".wasm"}]},{type:a,value:" binary via cargo,"}]},{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Use "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:" to generate the JavaScript API for using our Rust-generated WebAssembly."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"The above points can be satisfied, the following command is ran inside the project directory:\n"},{type:b,tag:g,props:{},children:[{type:a,value:"wasm-pack build"}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"When the build is completed, artifacts are generated in the "},{type:b,tag:g,props:{},children:[{type:a,value:"pkg"}]},{type:a,value:" directory, with the following content:"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,Q]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"pkg\u002F\n├── package.json\n├── README.md\n├── wasm_game_of_life_bg.wasm\n├── wasm_game_of_life.d.ts\n└── wasm_game_of_life.js\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fpkg\u002Fwasm_game_of_life.d.ts"}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:aj},{type:b,tag:g,props:{},children:[{type:a,value:".d.ts"}]},{type:a,value:" file contains Typescript type declarations for the JavaScript glue. One advantage of this is the ability to have calls into WebAssembly functions type checked, meaning an IDE can provide autocompletions and suggestions."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-typescript"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fpkg\u002Fpackage.json"}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:aj},{type:b,tag:q,props:{href:"https:\u002F\u002Fdocs.npmjs.com\u002Fcli\u002Fv7\u002Fconfiguring-npm\u002Fpackage-json",rel:[x,y,z],target:A},children:[{type:a,value:"package.json"}]},{type:a,value:" file contains metadata about the generated JavaScript and WebAssembly package. This is used by npm and JavaScript bundlers to determine dependencies across packages, package names, versions, and a bunch of other stuff. It helps Rust (and ultimately wasm) integrate with JavaScript tooling and allows us to publish the package to npm."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-json"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"wasm-game-of-life\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"collaborators\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"Your Name \u003Cyour.email@example.com\u003E\""}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"description\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"version\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"0.1.0\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"license\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"repository\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"files\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"wasm_game_of_life_bg.wasm\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"main\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"wasm_game_of_life.js\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"types\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:L,props:{id:$},children:[{type:b,tag:q,props:{href:"#adding-the-package-it-to-a-web-page",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"To add the package to a web page we can bootstrap a web based wasm project using the "},{type:b,tag:q,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fcreate-wasm-app",rel:[x,y,z],target:A},children:[{type:a,value:"create-wasm-app"}]},{type:a,value:" JavaScript project template."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fwasm-a-wasm-game-of-life",extension:".md",createdAt:an,updatedAt:an}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","code"," ","p","keyword","operator",":","\n  ",",","string","property","a","div","nuxt-content-highlight","pre","line-numbers",";","null","nofollow","noopener","noreferrer","_blank","\n\n","::","\n    ","function","namespace","attribute","attr-name","(",")",3,"h3","true",-1,"icon","icon-link","language-bash","class-name","wasm-bindgen","greet","{","}","li","getting-started","Getting Started","building-the-project","Building the project","adding-the-package-it-to-a-web-page","Adding the package it to a web page","comment","constant","wee_alloc","WeeAlloc","#[wasm_bindgen]","fn","function-definition","alert","The ","[","]","\"wasm_game_of_life.d.ts\"","2021-04-05T11:56:48.047Z")));
__NUXT_JSONP__("/archive/flyweight-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK){return {data:[{post:{slug:"flyweight-pattern",title:"The Flyweight Pattern",date:"2019-03-12T12:16",desc:ai,taxonomy:{category:["blog"],tag:["design patterns","structural"]},twitterenable:N,twittercardoptions:"summary",articleenabled:s,musiceventenabled:s,orgaenabled:s,orga:{ratingValue:aj},orgaratingenabled:s,eventenabled:s,personenabled:s,musicalbumenabled:s,productenabled:s,product:{ratingValue:aj},restaurantenabled:s,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:N,toc:[{id:ak,depth:O,text:al},{id:am,depth:O,text:an},{id:ao,depth:O,text:ap}],body:{type:"root",children:[{type:b,tag:P,props:{id:ak},children:[{type:b,tag:Q,props:{ariaHidden:R,href:"#name-flyweight",tabIndex:S},children:[{type:b,tag:c,props:{className:[T,U]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:P,props:{id:am},children:[{type:b,tag:Q,props:{ariaHidden:R,href:"#type-structural",tabIndex:S},children:[{type:b,tag:c,props:{className:[T,U]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:P,props:{id:ao},children:[{type:b,tag:Q,props:{ariaHidden:R,href:"#use-when-you-want-to",tabIndex:S},children:[{type:b,tag:c,props:{className:[T,U]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Avoid recomputing data that has previously been computed. (memoization)."}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:ai}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Say you went to a tea stall at a busy market and ordered some tea. They might make more than one cup to use for the person behid you in the line and therefore save the resources used to boil the water."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Main Purpose:"}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Setup teapot:"}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Anything that will be cached is flyweight."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Types of tea here will be flyweights."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" teaType"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,av]},children:[{type:b,tag:c,props:{className:[d,G,l]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Teapot filled"}]},{type:b,tag:c,props:{className:[d,G,l]},children:[{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ax}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"teaType\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Our tea maker and shop:"}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Acts as a factory and saves the tea"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:" availableTea "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"Map"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"has"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"set"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ax}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:" orders "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:" teaMaker"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:A}]},{type:a,value:" TeaMaker"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" \n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:" table"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:"table"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"for"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:a,value:" order "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"in"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,av]},children:[{type:b,tag:c,props:{className:[d,G,l]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Serving "}]},{type:b,tag:c,props:{className:[d,aF]},children:[{type:b,tag:c,props:{className:[d,M,e]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,M,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:" to table #"}]},{type:b,tag:c,props:{className:[d,aF]},children:[{type:b,tag:c,props:{className:[d,M,e]},children:[{type:a,value:aG}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,M,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,G,l]},children:[{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Usage:"}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:a,value:" teaMaker "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:a,value:" shop "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'milky'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'mint'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Serving lemon to table #1"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Serving milky to table #2"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Serving mint to table #5"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Serving lemon to table #3"}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F note that the Teapot is filled three times but the served four"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"script",props:{async:N,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fw2zqxhba\u002F1\u002Fembed\u002Fjs\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fflyweight-pattern",extension:".md",createdAt:aK,updatedAt:aK}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","keyword","(",")",".","string","function","}","p","comment","{","operator",false,";","\n    ","this","class-name","public","builtin",",",":","=","preference","\n        ","takeOrder","number","template-punctuation","`","\n\n    ","new","[","]","interpolation-punctuation",true,2,"h2","a","true",-1,"icon","icon-link","blockquote","div","nuxt-content-highlight","pre","language-ts","line-numbers","code","class","protected","availableTea","\n\n","orders","const","\nshop","\u002F\u002F Teapot filled","In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.",2.5,"name-flyweight","Name: Flyweight","type-structural","Type: Structural","use-when-you-want-to","Use when you want to:","Teapot","constructor"," \n        ","console","log","template-string","getTeaType","return","TeaMaker","make","\n            ","TeaShop","teaType","teaMaker","serve","interpolation","${","order","\n\nshop","'lemon'","2021-05-06T16:21:28.866Z")));
__NUXT_JSONP__("/archive/chain-of-responsibility", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{page:{slug:"chain-of-responsibility",title:"The Chain of Responsibility",published:g,date:"2019-04-14T12:19",desc:u,taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},twitterenable:g,twittercardoptions:"summary",articleenabled:d,musiceventenabled:d,orgaenabled:d,orga:{ratingValue:v},orgaratingenabled:d,eventenabled:d,personenabled:d,musicalbumenabled:d,productenabled:d,product:{ratingValue:v},restaurantenabled:d,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:g,toc:[{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:A,depth:h,text:B}],body:{type:"root",children:[{type:b,tag:i,props:{id:w},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#name-chain-of-responsibility",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:i,props:{id:y},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#type-behavioural",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:i,props:{id:A},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#use-when-you-want-to",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Build a chain of objects. A request enters from one end and keeps moving along the chain until it finds a suitable handler."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Say for example you had three methods of payment. You wanted a payment to be handled by the balance which had enough to cover the charge, if method "},{type:b,tag:f,props:{},children:[{type:a,value:"A"}]},{type:a,value:" did not have the funds method "},{type:b,tag:f,props:{},children:[{type:a,value:"B"}]},{type:a,value:" would try to handle the payment and so on until the payment is complete or cannot be hanldedby any of the accounts."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Here's what all accounts must be able to do:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"abstract class Account {\n\n    protected successor: Account;\n    protected balance: number;\n\n    public setNext(account: Account): void {\n        this.successor = account;\n    }\n\n    public pay(amountToPay: number): void {\n        if (this.canPay(amountToPay)) {\n            console.log(`Paid ${amountToPay} using ${this.constructor.name}`)\n        } else if (this.successor) {\n            console.log(`Cannot pay using ${this.constructor.name}, Proceeding...`)\n            this.successor.pay(amountToPay);\n        } else {\n            throw new Error('Not enough balance');\n        }\n    }\n\n    public canPay(amount: number): boolean {\n        return this.balance \u003E= amount;\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Now let's setup the payment mentods:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"class Bank extends Account {\n    constructor(protected balance) {\n        super()\n    }\n}\n\nclass Paypal extends Account {\n    constructor(protected balance) {\n        super()\n    }\n}\n\nclass Bitcoin extends Account {\n    constructor(protected balance) {\n        super()\n    }\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Tie them together and handle a payment:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"const bank = new Bank(100);\nconst paypal = new Paypal(200);\nconst bitcoin = new Bitcoin(300)\n\nbank.setNext(paypal);\npaypal.setNext(bitcoin);\n\nbank.pay(259);\n\n\u002F\u002F Cannot pay using Bank, Proceeding...\n\u002F\u002F Cannot pay using Paypal, Proceeding...\n\u002F\u002F Paid 259 using Bitcoin\n"}]}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fchain-of-responsibility",extension:".md",createdAt:D,updatedAt:D}}],fetch:[],mutations:void 0}}("text","element","\n",false,"p","code",true,2,"h2","a","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain.",2.5,"name-chain-of-responsibility","Name: Chain of Responsibility","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote","2020-12-03T07:34:51.708Z")));
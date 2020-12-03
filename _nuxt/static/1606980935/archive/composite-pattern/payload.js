__NUXT_JSONP__("/archive/composite-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{page:{slug:"composite-pattern",title:"The Composite Pattern",date:"2019-02-19T21:03",desc:v,taxonomy:{category:["blog"],tag:["design patterns","structural"]},twitterenable:f,twittercardoptions:"summary",articleenabled:e,musiceventenabled:e,orgaenabled:e,orga:{ratingValue:w},orgaratingenabled:e,eventenabled:e,personenabled:e,musicalbumenabled:e,productenabled:e,product:{ratingValue:w},restaurantenabled:e,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:f,toc:[{id:x,depth:g,text:y},{id:z,depth:g,text:A},{id:B,depth:g,text:C}],body:{type:"root",children:[{type:b,tag:h,props:{id:x},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#name-composite",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:h,props:{id:z},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#type-structural",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:h,props:{id:B},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#use-when-you-want-to",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Selectively treat a group of objects that are part of a hierarchy as \"the same\" when they are in fact different."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Every organisation is composed of employees. Each of the employees has the same features i.e. has a salary, has some responsibilities, may or may not report to someone, may or may not have some subordinates etc."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Main Purpose:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The composite pattern lets clients treat the individual objects in a uniform manner."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Say we had the following types of employees:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"interface IEmployee{\n    getName(): string;\n    setSalary(salary: number);\n    getSalary(): number;\n    getRoles(): string[];\n}\n\nclass Developer implements IEmployee{\n    protected roles;\n    \n    constructor(protected name: string, protected salary:number){\n    }\n\n    public getName(): string{\n        return this.name;\n    }\n\n    setSalary(salary: number){\n        this.salary = salary;\n    }\n\n    getSalary(): number{\n        return this.salary;\n    }\n\n    public getRoles(): string[]{\n        return this.roles;\n    }\n}\n\nclass Designer implements IEmployee{\n    protected roles;\n    \n    constructor(protected name: string, protected salary:number){\n    }\n\n    public getName(): string{\n        return this.name;\n    }\n\n    setSalary(salary: number){\n        this.salary = salary;\n    }\n\n    getSalary(): number{\n        return this.salary;\n    }\n\n    public getRoles(): string[]{\n        return this.roles;\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the following organisation:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"class Organisation{\n    protected employees : IEmployee[] = [];\n\n    public addEmployee(employee: IEmployee){\n        this.employees = this.employees.concat(employee);\n    }\n\n    public getNetSalaries(): number{\n        let netSalary = 0;\n\n        for(let employee of this.employees) {\n            netSalary += employee.getSalary();\n        }\n\n        return netSalary;\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We could use it as follows:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"\u002F\u002F Prepare the employees\nconst john = new Developer('John Doe', 12000);\nconst jane = new Designer('Jane Doe', 15000);\n\n\u002F\u002F Add them to organization\nconst organisation = new Organisation();\norganisation.addEmployee(john);\norganisation.addEmployee(jane);\nconsole.log(`Net salaries: ${organisation.getNetSalaries()}`) \u002F\u002F Net Salaries: 27000\n"}]}]}]},{type:a,value:c},{type:b,tag:"script",props:{async:f,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F1v2t7kw6\u002F5\u002Fembed\u002Fjs,result\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fcomposite-pattern",extension:".md",createdAt:D,updatedAt:D}}],fetch:[],mutations:void 0}}("text","element","\n","p",false,true,2,"h2","a","true",-1,"span","icon","icon-link","blockquote","div","nuxt-content-highlight","pre","language-text","line-numbers","code","In software engineering, the composite pattern is a partitioning design pattern. The composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object. The intent of a composite is to \"compose\" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly",2.5,"name-composite","Name: Composite","type-structural","Type: Structural","use-when-you-want-to","Use when you want to:","2020-12-03T07:34:51.708Z")));
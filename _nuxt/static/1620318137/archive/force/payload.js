__NUXT_JSONP__("/archive/force", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{post:{slug:"force",title:"Force",desc:"A vector that causes an object with mass to accelerate. All objects with mass experience force. Some common forces,gravity, tension, spring, buoyancy, air resistance.",date:"2018-03-07T18:14",taxonomy:{category:["blog"],tag:["javascript","100 days of learning"]},twitterenable:m,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:m,toc:[{id:n,depth:2,text:o}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:n},children:[{type:b,tag:g,props:{href:"#so-what-is-a-force",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Simply:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"A vector that causes an object with mass to accelerate."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All objects with mass experience force. Some common forces: gravity, tension, spring, buoyancy, air resistance."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"These are things we want to model within our code to create a dynamic simulation of the real world."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that we know what a vector is ( an entity with magnitude and acceleration )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And what acceleration is ( the change in velocity over time ) we can apply these concepts to our object with mass, or at least simulate it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A quick hark back to high school for a refresher on Newtons law's of motion, a great foundation for our simulation and a ready made framework to simulate motion."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So what happens in the real world according to Newtons law's?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Newtons first law:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"An object at rest stays at rest and an object in motion stays in motion"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The point: An objects velocity never changes unless something acts upon it. In other words a force. i.e friction, air resistance. However in a vacuum or if there is a net force of zero the object will stay in it's current state."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Newton's second law:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Force = Mass * Acceleration"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is powerful clue as to what we about to do in code. In a previous example we looked at a basic motion algorithm in our update function ( the function that updates the location of the ball in the draw loop )."}]},{type:a,value:c},{type:b,tag:"img",props:{src:"https:\u002F\u002Fsteemitimages.com\u002FDQmb66ZbsKVuobn5aQ5KzUEz5RZzy99MmSfRYS6L8GmSCmJ\u002Facc_vel.gif",alt:"moving ball",width:"100%"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:g,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FjZYgZw",rel:[p,q,r],target:s},children:[{type:a,value:e}]},{type:a,value:" for the image."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here's the basic idea of the function:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"update() {\n\nacceleration = n;\n\nvelocity.add(acceleration);\nlocation.add(velocity)\n\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's take a step back for a second, We can now look at this simple function from a different perspective."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Newtons second law: \n\nF = M * A\n\nSolving for A\n\nA = F \u002F M\n\nLet's say M is one ( programmers can just make up world where the mass of everything is one ) \n\nA = F\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So we could say:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"update() {\n\nacceleration = force; \u003C-- our cornerstone! \n\nvelocity.add(acceleration);\nlocation.add(velocity)\n\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So now we have a way to get creative, we have to calculate force. This is our key to applying different forces to our objects to create different types of behavior."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Newton's third law:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"For every action there is an equal and opposite reaction"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The point: forces always occur in pairs. The two forces are of equal strength but in opposite directions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is something we don't really have to worry about this in our simulations as we are currently only working with relatively simple examples."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm planning on doing a follow up where I actually write some code to incorporate our new perspective on motion!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Happy coding!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out Daniel Shiffman's great series on the "},{type:b,tag:g,props:{href:"http:\u002F\u002Fnatureofcode.com\u002Fbook\u002Fintroduction\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Nature of Code"}]},{type:a,value:", this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fforce",extension:".md",createdAt:t,updatedAt:t}}],fetch:{},mutations:void 0}}("text","element","\n","p","code",false,"a","div","nuxt-content-highlight","pre","language-text","line-numbers",true,"so-what-is-a-force","So what is a force?","nofollow","noopener","noreferrer","_blank","2021-05-06T16:21:28.866Z")));
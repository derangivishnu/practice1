let myitems=[{fruit:"apple"},{fruit:"banana"},{fruit:"cherry"},{fruit:"mango",price:100,img:"#"}]
let div=document.getElementById("root")
let jayshree=document.createElement('h1')
jayshree.innerHTML="favourite fruit:mango"
div.appendChild(jayshree)

let gotit=myitems.find((val)=>{return val.fruit==mango})
let gotit2=myitems.filter((val)=>{return val.fruit==mango})
console.log(gotit)
console.log(gotit2)

myitems.map(()=>{
    let h1=document.createElement("hi")
    h1.innerHTML='${val.fruit}'
    div.append(h1)
})
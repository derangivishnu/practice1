let myitems=[{fruit:"apple"},{fruit:"banana"},{fruit:"guava"}]
let div=document.getElementById("root")
let vishnu=document.createElement("h1")
vishnu.innerHTML="favourite fruit is:mango"
div.appendChild(vishnu)
console.log(vishnu)

let gotit=myitems.find((val)=>{return val.fruit=='banana'})
console.log(gotit)
let gotit2=myitems.filter((val)=>{return val.fruit=="banana"})
console.log(gotit2)

//mapping
myitems.map((val)=>{
    let h2=document.createElement("h2")
    h2.innerHTML="${val.fruit}"
    div.append(h2)
})
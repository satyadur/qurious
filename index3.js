
let bag=document.getElementById("count")
console.log(bag.innerText);
console.log(window.localStorage.getItem("a"));
bag.innerText=window.localStorage.getItem("a")
let plus=document.getElementById("plus")
console.log(plus);
let count1=document.getElementById("count1")
console.log(count1);
count1.value=window.localStorage.getItem("a")
let minus=document.getElementById("minus")
console.log(minus);
let price=document.getElementById("pricedouble")
price.value=`${80.00*window.localStorage.getItem("a")}.00`

let realprice=document.getElementById("realprice")
console.log(realprice);
realprice.value=`${80.00*window.localStorage.getItem("a")}.00`
plus.addEventListener("click",()=>{
    count1.value++
    price.value=`${count1.value*80.00}.00`
    realprice.value=`${count1.value*80.00}.00`
    bag.innerText=count1.value
    window.localStorage.setItem("a",bag.innerText)    

    // console.log(bag.innerText);
})
minus.addEventListener("click",()=>{
    if(count1.value==0){
        count1.value=0
        price.value=`${0}.00`
    }else{
        count1.value--
        price.value=`${80.00*count1.value}.00`
        realprice.value=`${count1.value*80.00}.00`
        bag.innerText=count1.value
        // console.log(bag.innerText);
        window.localStorage.setItem("a",bag.innerText)    

    }
})

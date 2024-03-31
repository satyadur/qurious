let plus=document.getElementById("plus")
console.log(plus);
let count1=document.getElementById("count1")
console.log(count1);
let minus=document.getElementById("minus")
console.log(minus);
let price=document.getElementById("pricedouble")
let realprice=document.getElementById("realprice")
console.log(realprice);
plus.addEventListener("click",()=>{
    count1.value++
    price.value=`${count1.value*80.00}.00`
    realprice.value=`${count1.value*80.00}.00`
})
minus.addEventListener("click",()=>{
    if(count1.value==0){
        count1.value=0
        price.value=`${0}.00`
    }else{
        count1.value--
        price.value=`${80.00*count1.value}.00`
        realprice.value=`${count1.value*80.00}.00`
    }
})


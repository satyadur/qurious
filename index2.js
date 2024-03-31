let shop=document.getElementById("btn1")
let modal=document.getElementById("modal")
console.log(modal);
console.log(shop);
shop.addEventListener("click",(e)=>{
    e.preventDefault()
    modal.style.display="block"

})
let close=document.getElementById("close")
console.log(close);
close.addEventListener('click',(e)=>{
        modal.style.display="none"
})

let refine=document.getElementById('refine20')
console.log(refine);
let one = document.getElementById("one")
console.log(one);
let two = document.getElementById("two").innerHTML
console.log(two);
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")

let num=document.getElementsByClassName("num")
console.log(num);
let count2=document.getElementById("count")
console.log(count2);
let item=document.getElementById("items")
console.log(item);
let price=document.getElementById("price")
console.log(price);
refine.addEventListener("click",()=>{
    console.log(refine.value);
    if(refine.value==1){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==2){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==3){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==4){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==5){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==6){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==8){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==9){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==10){
        item.value=count2.innerHTML
        count2.innerHTML=refine.value
        price.value=`${item.value*80.00}.00`
    }else if(refine.value==0){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${0}.00`
    }else if(refine.value==7){
        count2.innerHTML=refine.value
        item.value=count2.innerHTML
        price.value=`${item.value*80.00}.00`
    }
})


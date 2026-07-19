let totalPrice = document.querySelector("#totalPrice");
let input = document.querySelector("input");
let search = document.querySelector("#Search");
let searchList = document.querySelector("#searchList");
let expensive = document.querySelector(".expensive");
let discount = document.querySelector(".discount");
let cart = document.querySelector(".your-cart");
let Add = document.querySelectorAll(".btn");


let products = [
  {
    name: "Teddy Bear",
    price: 4000
  },
  {
    name: "Flower Bouquet",
    price: 5000
  },
  {
    name: "Perfume",
    price: 1000
  },
  {
    name: "Mobile",
    price: 33000
  },
  {
    name: "Headphone",
    price: 3000
  }
];

 // find product // 
 
 search.addEventListener("click",()=>{
    let found = products.find((item)=>{
        return item.name.toLowerCase() === input.value.toLowerCase()
    })
     searchList.innerHTML = ""
     if(found){
          searchList.innerHTML = `${found.name} ${found.price}`
     }else{
        searchList.innerHTML = "not found"
     }
     
   
 })  
 searchList.innerHTML = ""

// show expensive //
expensive.addEventListener("click",()=>{
   let expensiveProduct = products.filter((item)=>{
       return  item.price >= 33000
    })
       searchList.innerHTML = ""
       expensiveProduct.forEach((item)=>{
             searchList.innerHTML += `${item.name} ${item.price}<br>`
       })
          
})
//show discount//
let showDiscount = [
  {name: "Flower Bouquet" ,price:5000},
   {name: "headphone" ,price:3000},
    {name: "mobile" ,price:3300},

]
 discount.addEventListener("click",()=>{
 let priceDiscount = showDiscount.map((item)=>{
     return {
      name: item.name,
      price : item.price * 0.9
     }
  })
     searchList.innerHTML = ""
           priceDiscount.forEach((item)=>{
             searchList.innerHTML += `${item.name} ${item.price}<br>`
       })
 })
   searchList.innerHTML = ""
   


       // add product // 
    let cartItems = []
  Add.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
      let product = products[index]
        cart.innerHTML += `${product.name}${product.price}<br>`

               // Total Price //
         cartItems.push(product)
     let total= cartItems.reduce((sum , item)=>{
      return sum + item.price
},0)
  totalPrice.textContent = ` Total Price : ${total}`
   })
  
})


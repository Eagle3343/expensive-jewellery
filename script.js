// Good Luck 💪🏾
function mostExpensive(list){

    let expensive =0;
    for(const item of list){
       expensive=item.price ;
      
       }
       return expensive
    }
   
   let result =mostExpensive([
    {product :"Diamond Earrings",price:980},
     {product:"Gold Watch",price:250},
     {product:"Pearl Necklace", price:4650},
   ])
   
   console.log(result);
   
   
   
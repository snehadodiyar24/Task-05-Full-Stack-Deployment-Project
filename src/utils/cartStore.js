const KEY="forma-cart-v1";
function load(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return[]}}
let items=load();const listeners=new Set();
function notify(){localStorage.setItem(KEY,JSON.stringify(items));listeners.forEach(fn=>fn(items))}
export const cartStore={
getItems:()=>[...items],
getCount:()=>items.reduce((n,x)=>n+x.quantity,0),
subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn)},
add(id){const found=items.find(x=>x.productId===id);if(found)found.quantity++;else items.push({productId:id,quantity:1});notify()},
setQuantity(id,q){items=q<=0?items.filter(x=>x.productId!==id):items.map(x=>x.productId===id?{...x,quantity:q}:x);notify()},
remove(id){items=items.filter(x=>x.productId!==id);notify()}
};

import {cartStore} from "../utils/cartStore.js";
export function header(){return `<header class="header"><a class="logo" href="#/">forma<span>.</span></a><nav><a href="#/">Home</a><a href="#/shop">Shop</a><a href="#/shop?category=Home">Homeware</a></nav><a class="bag" href="#/cart">Bag <b class="count">${cartStore.getCount()}</b></a></header>`}
export function updateCount(){const el=document.querySelector(".count");if(el)el.textContent=cartStore.getCount()}

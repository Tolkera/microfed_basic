import {mount as productMount } from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartShow'

console.log('container')

productMount(document.querySelector('#my-products'));
mountCart(document.querySelector('#my-cart'));

import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>you have ${faker.datatype.number()} items</div>`
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');
    if (el){
        mount(el)
    }
}

export { mount };


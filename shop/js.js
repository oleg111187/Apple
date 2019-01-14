function f1(price, name) {
    let shop = '';
    if (name === 'amer' && price === 15){
        shop = 'Вот ваш ' + name + ' Стоимость ' + price;
    }
    if (name === 'latte' && price === 10){
        shop = 'Latte, 10';
    }
    return shop;
}
let func = f1(15, 'amer');
document.write(func);
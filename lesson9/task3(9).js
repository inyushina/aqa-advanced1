const car1 = {
    brand: 'Ford',
    model: 'Fusion',
    year: '2018'
};
const car2 = {
    brand: 'Toyota',
    model: 'RAV 4',
    owner: 'Kris Inshi'
};
const car3 = {...car1, ...car2};
console.log(car3)
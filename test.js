var myFunc = (a,b) => {
    console.log(a + 1);
    console.log("b",typeof b);
    b(a);
};

const promise1 = new Promise((resolve, reject) => {
    setTimeout(myFunc, 1000, 66, resolve);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(myFunc, 2000, 5, resolve);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(myFunc, 3000, 10, resolve);
});
const promise4 = Promise.resolve(45);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log('resultado promise all', values);
});

var seba = (a,b) => {
    a(b);
};
seba(myFunc,100);
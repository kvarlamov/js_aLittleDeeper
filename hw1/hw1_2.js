const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "firstPromise"));
const promise2 = Promise.resolve("secondPromise");
let promise3;  
promise1.then(
    result => {
        promise3 = Promise.resolve("thirdPromise");
        console.log("third promise was created");
    }
);

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values.reduce((a,b) => a + "_" + b ));
});
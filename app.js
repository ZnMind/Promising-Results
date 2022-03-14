//Promise chaining

/* slowMath.add(6, 2)
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(`6 + 2 = ${res}`));
        console.log(res);
        return slowMath.multiply(res, 2);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` * 2 = ${res}`));
        console.log(res);
        return slowMath.divide(res, 4);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` / 4 = ${res}`));
        console.log(res);
        return slowMath.subtract(res, 3);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` - 3 = ${res}`));
        console.log(res);
        return slowMath.add(res, 98);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` + 98 = ${res}`));
        console.log(res);
        return slowMath.remainder(res, 2);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` % 2 = ${res}`));
        console.log(res);
        return slowMath.multiply(res, 50);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` * 50 = ${res}`));
        console.log(res);
        return slowMath.remainder(res, 40);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` % 40 = ${res}`));
        console.log(res);
        return slowMath.add(res, 32);
    })
    .then(res => {
        document.getElementById("math").appendChild(document.createTextNode(` + 32 = ${res}`));
        console.log(`The final result is ${res}`);
    })
    .catch(err => {
        console.log(err);
    }) */

//async/await

async function doMath() {
    try {
        let res = await slowMath.add(6, 2);
        console.log(res);
        res = await slowMath.multiply(res, 2);
        console.log(res);
        res = await slowMath.divide(res, 4);
        console.log(res);
        res = await slowMath.subtract(res, 3);
        console.log(res);
        res = await slowMath.add(res, 98);
        console.log(res);
        res = await slowMath.remainder(res, 2);
        console.log(res);
        res = await slowMath.multiply(res, 50);
        console.log(res);
        res = await slowMath.remainder(res, 40);
        console.log(res);
        res = await slowMath.add(res, 32);
        console.log(`The final result is ${res}!`);
    } catch (err) {
        console.log(err);
    }
}

doMath();
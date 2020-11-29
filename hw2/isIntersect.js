//function that determines if two elements on the page intersect

function isIntersect (selector1, selector2) {
    let node1 = document.querySelector(selector1),
        node2 = document.querySelector(selector2);
    
    let parentArray1 = [],
        parentArray2 = [];
    
    while (node1.parentNode && node1.parentNode.tagName.toLowerCase() != 'body') {
        node1 = node1.parentNode;
        parentArray1.push(node1);
    }    
    
    while (node2.parentNode && node2.parentNode.tagName.toLowerCase() != 'body') {
        node2 = node2.parentNode;
        parentArray2.push(node2);
    }
    
    const intersect = parentArray1.filter(elem => parentArray2.indexOf(elem) !== -1);
    
    return intersect.length === 0 ? false : true;
}

let first = '#firstDiv > div:nth-child(1) > div:nth-child(3) > span';
let second = 'body > span';
console.log(isIntersect(first, second));
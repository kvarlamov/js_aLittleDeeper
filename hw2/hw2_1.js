//function that give unique css selector for element

function getPath(node) {
    let path = [];

    while(node.parentNode) {
        if (node.id){
            path.unshift("#" + node.id);
            break;
        }
        else {   
            let i = 1;
            if (node.previousElementSibling) {
                let nodes = node.parentNode.children;
                for (let j = 0; j < nodes.length; j++) {
                    if (nodes[j] == node) {
                        path.unshift(node.tagName.toLowerCase() + ":nth-child(" + i + ")");
                        node = node.parentNode;
                        break;
                    }
                    i++;
                }                
            } else {
                path.unshift(node.tagName.toLowerCase() + ":nth-child(" + i + ")");
                node = node.parentNode;
            }            
        }
    }    
    
    return path.join(" > ");
}

let element = document.querySelector("#firstDiv > div:nth-child(1) > div:nth-child(3) > span:nth-child(1)");
console.log(getPath(element));
let secondElem = document.getElementById("somespan");
console.log(getPath(secondElem));

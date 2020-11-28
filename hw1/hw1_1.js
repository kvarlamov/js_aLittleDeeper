function makeCounter(i) {
    let count = 0;
    
    return function(i) {
    if (i){
    return count =count + i;
    } else{
    return alert(count);
    }
    };
    }
    
    let counter = makeCounter();
    
    counter(1)
    counter(1)
    counter(1)
    counter(5)
    counter()
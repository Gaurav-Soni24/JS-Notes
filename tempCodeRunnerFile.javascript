var x = 5;

function outer() {
    console.log(x);  // (1)
    
    var x = 10;
    
    function inner() {
        console.log(x);  // (2)
        
        setTimeout(() => {
            console.log(x);  // (3)
        }, 1000);
        
        x = 20;
        
        console.log(x);  // (4)
    }

    inner();
}

outer();

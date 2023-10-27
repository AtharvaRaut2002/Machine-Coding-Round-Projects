let counter = 0;
function getData(){
    console.log("fetchingData"+ counter++);
}

function myDebounce(call, d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(() => {
            call();
        }, d);
    }
}

const BetterFunction = myDebounce(getData, 1000);


// Throttle Function
const mythrottle=(fn, d)=>{
    return function(...args){
        document.getElementById("myid").disabled=true;
        setTimeout(()=>{
            fn();
        }, d);
    }
}


const newFun=mythrottle(()=>{
    document.getElementById("myid").disabled=false;
    console.log("User Clicked.!!");
},1000)
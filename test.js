const sleep = async(ms = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}
const recuriveDelay = async(num = 5) => {
    if(num > 0){
        num = num -1 ;
        await sleep(1000);
         recuriveDelay(num);
        console.log(num);
    }
}

recuriveDelay(6);
//dsfsd  fds fdsfdsf 
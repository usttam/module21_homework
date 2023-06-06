let number = 0;


const myPromise = new Promise((resolve,reject) =>{    
    setTimeout(()=>{
      number = Math.floor(Math.random() * 100);
       if ((number%2)===0){        
            resolve('Completed successfully. Generated number is ');    
        }
        else{
            reject('Completed with Error. Generated number is ');
        }
    },3000);
    
}); 

myPromise
    .then((result)=>{
        console.log(result, number);
    })
    .catch((error)=>{
        console.log(error, number);
    })
    .finally(()=>{ 
        console.log('finally over with delay 3 sec');     
    })


const requestBtn = document.querySelector('.button');
const inputText = document.querySelector('.request-input__1');
const mainNode = document.querySelector('.main');

const URL = 'https://jsonplaceholder.typicode.com/users/';

requestBtn.addEventListener('click',()=>{    
    intValue = inputText.value;
    if (intValue === '') {
        alert ('pls input some value ID');
    }
    else {
        reqURL = URL + inputText.value + '/todos';
        fetch(reqURL)
        .then(response => response.json())
        .then(json => MakeList(json))
        .catch((error)=>{console.log(error)});    
    }  
    
});

function MakeList(arrayJS){
    if (arrayJS.length < 1) {
        alert (`User with specified id = '${inputText.value}' was not found`);
    }
    else {       
        if (document.querySelector('.task-list')!==null){
            document.querySelector('.task-list').remove();
        }     
        const ul = document.createElement('ul');
        ul.className = 'task-list';
        ul.textContent = 'User '+ arrayJS[0].userId;  
        mainNode.append(ul);   
        arrayJS.forEach(element => {         
           let li = document.createElement('li'); 
           li.className = 'menu__item'+ element.id;
           li.innerHTML = element.title;
           if (!element.completed) {
                li.style = "text-decoration: line-through";         
           } else{
                li.style = "text-decoration: none";
           }       
           ul.append(li);
        });
    }
}
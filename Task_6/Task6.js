const pageInput = document.querySelector('.request-input__1');
const pageLimit = document.querySelector('.request-input__2');
const reqButton =  document.querySelector('.button');
const mainNode =  document.querySelector('.main');

startCheck();

reqButton.addEventListener('click', ()=>{
    pageGood = false;
    limitGood = false;

    pageNumber = parseInt(pageInput.value.trim());    
    isNaN(pageNumber) || pageNumber > 10 || pageNumber < 1  ? pageGood = false : pageGood = true;

    limitNumber = parseInt(pageLimit.value.trim());    
    isNaN(limitNumber) || limitNumber > 10 || limitNumber < 1  ? limitGood = false :  limitGood = true;
 
    if (!pageGood &&  limitGood){
       alert('Page number out of range 1 to 10');
    } 
    else if (pageGood &&  !limitGood){
        alert('Limit out of range from 1 to 10');
    }
    else if (!pageGood &&  !limitGood){
        alert('Page number and limit out of range 1 to 10');
    } 
    else {
        console.log(pageNumber,limitNumber);
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limitNumber}`)//'https://picsum.photos/v2/list?page=1&limit=10')
        .then(response => response.json())
        .then(json => {console.log(json);viewPicture(json);saveLStorage('savePic',JSON.stringify(json))}) //saveLStorage('tag', JSON.stringify(json))})
        .catch((error)=>{console.log(error)}); 
    }
    
})

function saveLStorage(tag, value){
    localStorage.setItem(tag, value);
}

function viewPicture (arrayJS=[{}]){
    if (arrayJS.length < 1) {
        alert ('Specified picture was not found');
    }
    else {  
        if (document.querySelector('.img-list')!==null){
            document.querySelector('.img-list').remove();
        }   
        const ul = document.createElement('ul');
        ul.className = 'img-list';  
        ul.textContent = `Image List (total load = '${arrayJS.length}')`;  
        mainNode.append(ul);    
        arrayJS.forEach(element => { 
        let li = document.createElement('li'); 
        let img = document.createElement('img'); 
        li.className = 'menu__item'+ element.id;
        li.innerHTML = `Author = ${element.author} resolution = ${element.width} x ${element.height} url = ${element.url}`;        
        img.className = 'img__item'+ element.id;
        img.src = element.download_url;
        ul.append(li);
        li.append(img);
        });    
    }
}

function startCheck(){
   jsonLocData = JSON.parse(localStorage.getItem('savePic'));
   if (jsonLocData!==null) {
    viewPicture (jsonLocData);
   } else {
    console.log('no save data in local storage');
   }
}
/*async function fetchJSONData() {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
    const jsonData = await response.json();
    console.log(jsonData);
  }*/ 
  
 
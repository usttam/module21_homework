const USER = 'user';
const TIME = 'time';

username = localStorage.getItem(USER);

if (username!==null){
    date = localStorage.getItem(TIME);
    alert (`Good afternoon, ${username}! Long time no see. Last time you visited us ${date}`);
    localStorage.setItem(TIME,  GenarateDate());    
}
else{
    SetNewUser();
}

function SetNewUser(){
    personIn = prompt('Welcome! Please tell me your name?').trim(); 
    if ( personIn ==='' || personIn === null) {
        alert ('Please input correct person name');
    }
    else {
        localStorage.setItem(USER, personIn);
        localStorage.setItem(TIME,  GenarateDate());        
    } 
}

function GenarateDate() {
    const randomDate = new Date();
    let monthText='';
    switch (randomDate.getMonth()) {
        case 0:
            monthText = 'Января'; 
            break;
        case 1:   
            monthText = 'Февраля';
            break;
        case 2:   
            monthText = 'Марта';
            break;                
        case 3: 
            monthText = 'Аперля';
            break;               
        case 4:  
            monthText = 'Мая';
            break;                   
        case 5:   
            monthText = 'Июня';
            break;                
        case 6:  
            monthText = 'Июля';
            break;                
        case 7:   
            monthText = 'Августа';
            break;                
        case 8:  
            monthText = 'Сентября';
            break;                
        case 9:   
            monthText = 'Октября';
            break;                 
        case 10:   
            monthText = 'Ноября';
            break;                 
        case 11: 
            monthText = 'Декабря';
            break;                   
    }
    return `${randomDate.getDate()} ${monthText} ${randomDate.getFullYear()}г. Время: ${randomDate.getHours()} ч ${randomDate.getMinutes()} мин ${randomDate.getSeconds()} сек`
}
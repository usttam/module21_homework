const domParser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = domParser.parseFromString(xmlString,"text/xml");

const listNode = xmlDOM.querySelector('list');

const studentNode = listNode.querySelectorAll('student');

let list = new Array();

studentNode.forEach(element => {
    let nameNode = element.querySelector('name');
    let ageNode = element.querySelector('age');  
    let profNode = element.querySelector('prof');  
    let langAttr = nameNode.getAttribute('lang');
    let firstNode = nameNode.querySelector('first');
    let scndNode = nameNode.querySelector('second'); 
  
    result = {       
         name: firstNode.textContent + ' '+ scndNode.textContent,
         age: ageNode.textContent, 
         prof: profNode.textContent, 
         lang: langAttr    
    }
    list.push(result);
});

const object = {
    list: list
};


console.log(object);
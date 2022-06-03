const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!'
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('content');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const header = document.createElement('h3');
header.classList.add('content');
header.textContent = "I'm a blue h3!";
header.style.color = 'blue';
container.appendChild(header);

const divid = document.createElement('div');
divid.style.borderStyle = 'solid';
divid.style.backgroundColor = 'pink';


const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";

divid.appendChild(header1);
divid.appendChild(paragraph2);
container.appendChild(divid);
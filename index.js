let names = ['Nicolas' , 'Nadine', 'Taheny', 'Carla' , 'Aline', 'Tassnim' , 'Nicolas' , 'Nadine' , 'Nicolas' , 'Nadine', 'Taheny', 'Carla']

let ages = ['20 years old' , '30 years old' , '23 years old' , '10 years old' , '13 years old' , '43 years old', '20 years old' , '30 years old' , '30 years old' , '23 years old' , '10 years old' , '13 years old']



let container = document.createElement('div');

document.body.appendChild(container);

container.style.textAlign = 'center';


function card( name , ages ){
 // elements
  let card = document.createElement('div');
  let title = document.createElement('h4');
  let age = document.createElement('p');
  let image = document.createElement('img');



 // content

 let head = document.createTextNode(name);
  let ageContent = document.createTextNode(ages);
  image.src = 'img/1.png';

  title.appendChild(head);
  age.appendChild(ageContent);


  card.appendChild(title)
  card.appendChild(age)
  card.appendChild(image)
  container.appendChild(card)

 // styles

 card.style.width = '100px'
 card.style.background = '#444'
 card.style.color = '#fff'
 card.style.padding = '10px'
 card.style.margin = '6px'
 card.style.display = 'inline-block'

  image.style.width = '100%'
}


for(let i=0 ; i<10 ; i++)
{
  card( names[i] , ages[i]);
}

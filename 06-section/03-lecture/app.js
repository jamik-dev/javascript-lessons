// dom traversal vs query methods
// 1 - dom traversal
const ul = document.body.firstElementChild.nextElementSibling;
const li = ul.firstElementChild;
console.log(li);

// 2 - query methods
const li2 = document.querySelector('li');
console.log(li2);

// styling elements
li2.className = "class1 class2 class3";
li2.id = "id1 id2 id3";

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = "green"; // in html elements tab you can see style proprety
// section.className = "";

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  section.classList.toggle('invisible');
})
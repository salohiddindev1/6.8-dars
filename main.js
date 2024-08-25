const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', async (e) => {
  e.preventDefault();

  const cards = document.querySelector('.cards');
  cards.textContent = '';

  // backenddan userlar malumotini olish:
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  const users = data.users;

  // yosh kirilganda shu yerga tushadi:
  const age = input.value || 0;

  // userlarni yosh boyicha filter qilish:
  const usersFilter = users.filter((object) => object.age > age);

  console.log(usersFilter);

  usersFilter.forEach((element) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img  src=${element.image}/>
 
      <div class='card-description'>
       <h2>Ismi: ${element.firstName}</h2>
       <h2>Familiyasi: ${element.lastName}</h2>
       <h2>Yoshi: ${element.age}</h2>
      </div>
    `;

    cards.appendChild(card);
  });
});

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li').length;
  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${categoryItems}`);
});

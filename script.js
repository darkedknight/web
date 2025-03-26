let currentIndex = 0;
let items = document.querySelectorAll('.scroll-item');
function showNextItem() {
  items.forEach((item, index) => {
    item.style.display = (index === currentIndex) ? 'block' : 'none';
  });
  currentIndex = (currentIndex + 1) % items.length;
}   
setInterval(showNextItem, 5000);
showNextItem();
function openArticle(id) {
  document.querySelector('.articles').style.display = 'none';
  document.querySelector('.scroll-container').style.display = 'none';
  for (let i = 1; i <= 10; i++) {
    document.getElementById('articlePage' + i).style.display = 'none';
  }
  document.getElementById('articlePage' + id).style.display = 'block';
}
function closeArticle(id) {
  document.getElementById('articlePage' + id).style.display = 'none';
  document.querySelector('.articles').style.display = 'block';
  document.querySelector('.scroll-container').style.display = 'flex';
}
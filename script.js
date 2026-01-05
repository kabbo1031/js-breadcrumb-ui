const pages = ['Home Page', 'Product List', 'Product Details'];

function go(index){
  document.getElementById('content').innerText = pages[index];
}

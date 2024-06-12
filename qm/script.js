document.getElementById('searchinput').addEventListener('keyup',function(){
  const searchTerm = this.value.toLowerCase();
  const products = document.querySelectorAll('#productList li');
  
  products.forEach(function(product){
    const name = product.querySelector('.productName').textContent.toLowerCase();
    const description = product.querySelector('.productDescription').textContent.toLowerCase();
    
    if(name.includes(searchTerm) || description.includes(searchTerm)){
      product.style.display = 'block';
    }else{
      product.style.display = 'none';
    }
  })
})
document.querySelectorAll('.clickable-item').forEach(item => {
    item.addEventListener('click', function() {
        /*const url = this.getAttribute('data-url');
        window.location.href = url;*/
    });
});
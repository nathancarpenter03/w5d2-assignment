// Search button results 

var searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', function() {
    var searchInput = document.querySelector('#searchInput').value;
    console.log(searchInput);
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchInput) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // data.results.pop();
            document.querySelector('#card').innerHTML = '';
            data.results.forEach(function(item) {
                createCard(item);
        })
    });
})

//  Function to create card with pulled data
function createCard(item) {
    var card = `<div class = "card col-sm-3">
      <img src = "${item.Images[0].url_170x135}" alt ="image" />
      <h5 class = "card-caption">${item.title.slice(0, 22)}...</h5>
      <span class = "text-muted">${item.Shop.shop_name > 10 ? 
          item.Shop.shop_name.slice(0,10) + '...' : item.Shop.shop_name}</span>
                        <span class="text-muted pull-right">${item.price}</span>`;
    document.querySelector('#card').innerHTML += card;
}

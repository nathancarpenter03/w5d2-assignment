// Declare empty items array
var items= [];

getItems();

// AJAX request- fetch etsy data - puts into new array called data
function getItems() {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('dogs') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            items = data.results;
            items.forEach(function(item) {
                createCard(item);
        })
    });
}

//  Function to create card with new data
function createCard(item) {
    var card = `<div class = "card col-sm-3">
      <img src = "${item.Images[0].url_170x135}" alt ="image" />
      <h5 class = "card-caption">${item.title.slice(0, 22)}...</h5>
      <span class = "text-muted">${item.Shop.shop_name > 10 ? 
          item.Shop.shop_name.slice(0,10) + '...' : item.Shop.shop_name}</span>
                        <span class="text-muted pull-right">${item.price}</span>`;
    document.querySelector('#card').innerHTML += card;
}

//---------------------------------------------------------------------------


// Search button results- work in progress

// var searchButton = document.querySelector('#searchButton');
// var searchInput = '';

// searchButton.addEventListener('click', function(e) {
//     searchInput = document.querySelector('#searchInput').value;
//     console.log(searchInput);
//     fetch(`https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('${searchInput}') + '&includes=Images,Shop`)
//         .then(response => response.json())
//         .then(data => {
//             items = data.results;
//             items.forEach(function(item) {
//                 createCard(item);
//         })
//     });
// })


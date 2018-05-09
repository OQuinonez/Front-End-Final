function inventoryDisplay(products) {
    console.log(products);
    var realInventory = products
        .map(function(inventory) {
            return [
                '<div class="col-lg-4 col-md-4 col-sm-4 products">' +
                    '<img src="' +
                    inventory.PicAddress +
                    '">' +
                    '<p></p>' +
                    '<b>Name: </b>' +
                    inventory.ItemName +
                    '<br>' +
                    '<b>Price: $</b>' +
                    inventory.Price +
                    '<br>' +
                    '<b>Quantity: </b>' +
                    inventory.Quantity +
                    '<p></p>',
                '<button type="button" id="BuyItem" class="btn btn-primary" onclick="buyItem(' +
                    inventory.ItemID +
                    ')">' +
                    '<i class="fa fa-shopping-cart" aria-hidden="true"></i>     Buy Item</button>',
                '</div>'
            ].join('');
        })
        .join('');

    realInventory = '<h3> Here Are our Products</h3>' + realInventory;
    $('#DisplayInventory').html(realInventory);
}

function newDisplay(products) {
    console.log(products);
    var realInventory = products
        .map(function(inventory) {
            return [
                '<div class="col-lg-4 col-md-4 col-sm-4 products">' +
                    '<img src="' +
                    inventory.PicAddress +
                    '">' +
                    '<p></p>' +
                    '<b>Name: </b>' +
                    inventory.ItemName +
                    '<br>' +
                    '<b>Price: $</b>' +
                    inventory.Price +
                    '<br>' +
                    '<b>Quantity: </b>' +
                    inventory.Quantity +
                    '<p></p>',
                '<button type="button" id="newBuyItem" class="btn btn-primary" onclick="buyItem(' +
                    inventory.ItemID +
                    ')">' +
                    '<i class="fa fa-shopping-cart" aria-hidden="true"></i>     Buy Item</button>',
                '</div>'
            ].join('');
        })
        .join('');

    realInventory = '<h3> Here Are our Products</h3>' + realInventory;
    $('#newDisplay').html(realInventory);
}

$('#newFeed').click(function() {
    showNewInventory();
    $('#newFeed-div').show();
    $('#purchased').hide();
    $('#signup-Page').hide();
    $('#Store').hide();
    $('#login-Page').hide();
    $('#purchased').hide();
    $('#sell-Page').hide();
});

function showInventory() {
    fetch('http://localhost:8080/products').then(response =>
        response
            .json()
            .then(data => ({
                data: data,
                status: response.status
            }))
            .then(res => {
                inventoryDisplay(res.data);
            })
    );
}

function showNewInventory() {
    fetch('http://localhost:8080/products').then(response =>
        response
            .json()
            .then(data => ({
                data: data,
                status: response.status
            }))
            .then(res => {
                newDisplay(res.data);
            })
    );
}

function buyItem(productID) {
    console.log('The button is working');
    console.log(productID);
    $('#purchased').show();
    $('#sell-Page').hide();
    $('#login-Page').hide();
    $('#Store').hide();
    $('#signup-Page').hide();
    $('#feed-div').hide();
    var url = 'http://localhost:8080/Buy/' + productID;
    $.ajax({
        url: url,
        method: 'Post',
        dataType: 'json',
        crossDomain: false,
        data: JSON.stringify({
            productID: productID
        }),
        contentType: 'application/json',
        mimeType: 'application/json',
        mode: 'cors'
    })
        .then(function handleResponse(response) {
            var DATA = response;
            console.log(DATA);
        })
        .catch(function handleError(error) {
            console.log(error);
        });
}

function sellItem() {
    console.log(
        JSON.stringify({
            ItemName: $('#itemName').val(),
            price: $('#price').val(),
            PicAddress: $('#picAddress').val()
        })
    );
    fetch('http://localhost:8080/Sell', {
        method: 'POST',
        body: JSON.stringify({
            ItemName: $('#itemName').val(),
            Category: '',
            Price: $('#price').val(),
            Quantity: 1,
            PicAddress: $('#picAddress').val()
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        crossDomain: true
    })
        .then(function handleResponse(response) {
            var DATA = response;
            console.log(DATA);
            showNewInventory();
            $('#newFeed-div').show();
            $('#purchased').hide();
            $('#signup-Page').hide();
            $('#Store').hide();
            $('#login-Page').hide();
            $('#purchased').hide();
            $('#sell-Page').hide();
        })
        .catch(function handleError(error) {
            console.log(error);
        });
}

$('#sellForm').on('submit', function(event) {
    event.preventDefault();
    sellItem();
});

function main() {
    showInventory();
}

$(main);

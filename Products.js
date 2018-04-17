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
                // if (inventory.quatity > 0) {
                //     html +=
                //         '<button type="button" class="btn btn-primary" onclick="takeAway(' +
                //         i +
                //         ')">' +
                //         '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>';
                // } else if (inventory.quantity <= 0) {
                //     html +=
                //         '<div class="warning"> <b> Item is out of stock sorry! </b></div>';
                // }
            ].join('');
        })
        .join('');

    realInventory = '<h3> Here Are our Products</h3>' + realInventory;
    $('#DisplayInventory').html(realInventory);
}

// function initializeInventory(inventory) {
//     $('#DisplayInventory').html(inventoryDisplay(inventory));
// }

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
    // .then(initializeInventory());
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
    $('#purchased').hide();
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
        // fetch('http://localhost:8080/Buy/' + productID, {
        //     method: 'DELETE',
        //     // body: JSON.stringify({
        //     //     ItemName:
        //     // })
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     dataType: 'json',
        //     mode: 'no-cors'
        // })
        .then(function handleResponse(response) {
            var DATA = response;
            // $('#BuyItem').click(function() {
            // });
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
        })
        .catch(function handleError(error) {
            console.log(error);
        });
}

// $('#BuyItem').on('submit', function(event) {
//     event.preventDefault();
// buyItem();
// });

$('#sellForm').on('submit', function(event) {
    event.preventDefault();
    sellItem();
    // $('#purchased').show();
    // $('#signup-Page').hide();
    // $('#login-Page').hide();
    // $('#feed-div').hide();
    // $('#Store').hide();
});

function main() {
    showInventory();
}

$(main);

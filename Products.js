function inventoryDisplay(products) {
    var realInventory = products
        .map(function(inventory) {
            return [
                '<div class="col-lg-4 col-md-4 col-sm-4 products">' +
                    '<img src="' +
                    inventory.img +
                    '">' +
                    '<p></p>' +
                    '<b>Name: </b>' +
                    inventory.name +
                    '<br>' +
                    '<b>Description: </b>' +
                    inventory.description +
                    '<br>' +
                    '<b>Price: $</b>' +
                    inventory.price +
                    '<br>' +
                    '<b>Quantity: </b>' +
                    inventory.quantity +
                    '<p></p>'
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

    return '<h3> Here Are our Products</h3>' + realInventory;
}

function initializeInventory(inventory) {
    $('#DisplayInventory').html(inventoryDisplay(inventory));
}

function showInventory() {
    fetch('http://localhost:8080/products')
        .then(response => response.json())
        .then(initializeInventory);
}

function main() {
    showInventory();
}

$(main);

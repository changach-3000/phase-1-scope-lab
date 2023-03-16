// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer = "any";

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer="Brian";
}



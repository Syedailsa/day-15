function sandwich_order(flavour, quantity) {
    var costumization = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        costumization[_i - 2] = arguments[_i];
    }
    console.log("My Sandwich Order: Flavour: ".concat(flavour, ".\nQuantity: ").concat(quantity, ".\nCostumization:\n").concat(costumization.join(".\n"), "."));
}
;
sandwich_order("cheese", 1, "no ketchup", "extra cheese", "with olives");

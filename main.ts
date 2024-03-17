function sandwich_order(flavour: string , quantity: number , ...costumization: string[]){
    console.log(`My Sandwich Order: Flavour: ${flavour}.\nQuantity: ${quantity}.\nCostumization:\n${costumization.join(".\n")}.`)
};

sandwich_order("cheese", 1, "no ketchup", "extra cheese", "with olives");
class Sale {
    constructor(money, inventory){
        this.money = money;
        this.inventory = inventory;
    }

    madeSale (){
        this.money = this.money + 100
        this.inventory = this.inventory--;
    }
}
let sale1 = new Sale(0, 20);
console.log(sale1);
sale1.madeSale();
console.log(sale1);
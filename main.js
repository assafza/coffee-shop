var coffeeShop = {
   money: 100,

  beans: {
    cost: 50,
    amount: 40,
    refillBagAmount: 50
  },

  soldItems : [],

  drinkRequirements: {
    latte:{
        cost : 5,
        beansRequired : 10
    } ,
    americano:{
        cost : 3,
        beansRequired : 5
    } ,
    doubleShot:{
        cost : 7,
        beansRequired : 15

    } ,frenchPress:{
        cost : 6,
        beansRequired : 12
    } 
  },
  makeDrink: function (drinkType) {
     //checks if the drink is not menu 
    if (!this.drinkRequirements[drinkType]){
      return("Sorry we don't do " + drinkType);
    }
    //check if drink exist in menu + if there are enough beans to make it
    else if (this.drinkRequirements[drinkType].beansRequired <= this.beans.amount && this.drinkRequirements[drinkType]){
          this.beans.amount -= this.drinkRequirements[drinkType].beansRequired;
          this.soldItems.push(drinkType);
          console.log(this.soldItems);
          this.money += this.drinkRequirements[drinkType].cost;
          console.log(this.money);
           return ("Your " + drinkType + " is ready");
           //alert ("You earned " +this.drinkRequirements[drinkType].cost+ "$" );
       }
       // checks if we are low with beans 
    else if (this.drinkRequirements[drinkType].beansRequired  > this.beans.amount){
        this.buySupplies();
        console.log(this.beans.amount);
        return("Sorry we ran out of beans please come back later");
       }
      
    
  },

  buySupplies: function(){
    // check we have enough money to buy beans
    if (this.money >= this.beans.cost){
      this.beans.amount += this.beans.refillBagAmount;
      this.money -= this.beans.cost;
      alert("you filled your beans inventory - current beans count is : " + this.beans.amount );
    }
    else{
      alert("you dont have enough money to buy beans!");
    }
  },

  sales : function(){
    var salesString = "";
    for (var i = 0; i < this.soldItems.length; i++) {
         salesString += this.soldItems[i] + " </br>";
          }
    return (salesString + " ------ </br>" + "TOTAL" );
  },

  income : function(){
    var moneyString ="";
     var total = 0;
     for (var i = 0; i <this.soldItems.length; i++) {
          var drink = this.soldItems[i];
          total += this.drinkRequirements[drink].cost;
          moneyString += this.drinkRequirements[drink].cost.toString() + " </br>"
          }
      return (moneyString + " ------ </br>" + total );
  }

}


// coffeeShop.makeDrink("filtered");
// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");

// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress");

// alert("Your total cash flow is: " + coffeeShop.money);


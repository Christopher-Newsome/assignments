var shopper = {  
    firstName: "John",
    lastName: "Green",
    age: 26,
    isShopping: true,
    johnDoe: function() {
        return this.firstName + " Deer " + this.lastName;
    },
    groceryCart: ["Apples", "Bacon", "Bread"]
};

console.log(shopper.johnDoe())
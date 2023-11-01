setTimeout(() => {
    console.log("please wait")
}, 4000);

const vegitables_and_fruits = {
    name: "potato",
    isTasty: true,
    //"åß®√å¬©": false,
    eatVegitable: function () {
        console.log("I'm eating " + this.name);
    }
};
//vegitables_and_fruits.name = "tomato";
//vegitables_and_fruits.isTasty = false;
//console.log(vegitables_and_fruits["åß®√å¬©"]);
//console.log(vegitables_and_fruits);
vegitables_and_fruits.eatVegitable();



class Food {
    constructor(name, isTasty) {
        this.name = name;
        this.isTasty = isTasty;
    }
    eatVegitable() {
        console.log("we are fond of " + this.name);
    }
}

const myFood = new Food("cucumber", true);
myFood.eatVegitable();
console.log(myFood);

const ourFood = new Food("banana", false);
ourFood.eatVegitable(); 
console.log(ourFood);

const theirFood = new Food("pineapple", "sure");
theirFood.eatVegitable();
console.log (theirFood);
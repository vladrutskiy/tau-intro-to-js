setTimeout(() => {
    console.log("please wait")
}, 4000);

const vegitables_and_fruits = {
    name: "potato",
    isTasty: true,
    "åß®√å¬©": false,
};
vegitables_and_fruits.name = "tomato";
vegitables_and_fruits.isTasty = false;
console.log(vegitables_and_fruits["åß®√å¬©"]);
console.log(vegitables_and_fruits);
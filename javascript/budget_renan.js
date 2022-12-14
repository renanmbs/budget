
//Define the budget
let spending_power = 1630;
let sum = 0;
let remaining = 0;

//Define the month
let month = "October";

//Spending categories
let groceries = 0;
let food = 0;
let clothes = 0;
let fun = 0;
let gas = 0;
let fixed = 0;
let extra =  0;

//Defining spending categories arrays
let category1 = [];
let category2 = [];
let category3 = [];
let category4 = [];
let category5 = [];
let category6 = [];
let category7 = [];

//Define weeks
let week1 = 0;
let week2 = 0;
let week3 = 0;
let week4 = 0;
let week5 = 0;

//Defining spending days arrays
let day17 = [];
let day815 = [];
let day1622 = [];
let day2330 = [];
let day31 = [];


//Array to input expenses
let spending = [

    add_expense(100,"fixed", 25), //Rent
    add_expense(360,"fixed", 25), //CC
    add_expense(42,"groceries", 25), //Walmart
    add_expense(15,"fixed", 25), //Routing
    add_expense(25,"gas", 26), //Gas Smiths
    add_expense(11,"fixed", 26), //Spotify
    add_expense(8,"gas", 29), //Chevron Cedar City
    add_expense(6,"extra", 29), //Cedar City food
    add_expense(15,"food", 29), //Karim Bakery
    add_expense(6,"food", 30), //Starbucks
    add_expense(9,"groceries", 31), //Walmart
    add_expense(24,"food", 1), //Chipotle
    // add_expense(32,"food", 15), //Chipotle
    // add_expense(5,"groceries", 18), //Ridleys
    // add_expense(27,"food", 18), //La Bonita
    // add_expense(13,"extra", 20), //Walgreens
    // add_expense(99,"fixed", 20), //Credit Glory
    // add_expense(13,"food", 21), //Phoenix House
    // add_expense(60,"gas", 20), //Credit Glory





];

//Create object for expense
function add_expense(money_spent, category, date){
    return{
        money_spent: money_spent,
        category: category,
        date: date
    }
}

//Filter of categories and calculation
for (const check of spending){

    //Calculations
    sum += check.money_spent;
    remaining = spending_power - sum;

    if(check.category === "groceries"){
        groceries += check.money_spent;
        category1.push(check);
    }

    else if(check.category === "food"){
        food += check.money_spent;
        category2.push(check);
    }

    else if(check.category === "clothes"){
        clothes += check.money_spent;
        category3.push(check);
    }

    else if(check.category === "fun"){
        fun += check.money_spent;
        category4.push(check);
    }

    else if(check.category === "gas"){
        gas += check.money_spent;
        category5.push(check);
    }

    else if(check.category === "fixed"){
        fixed += check.money_spent;
        category6.push(check);
    }

    else if(check.category === "extra"){
        extra += check.money_spent;
        category7.push(check);
    }

    else{
        console.log("Invalid Category");
    }
}

//Filtering through dates
for (const check of spending){
    if(check.date >= 1 && check.date <= 7){
        week1 += check.money_spent;
        day17.push(check);
    }

    else if(check.date >= 8 && check.date <= 15){
        week2 += check.money_spent;
        day815.push(check);
    }

    else if(check.date >= 16 && check.date <= 22){
        week3 += check.money_spent;
        day1622.push(check);
    }

    else if(check.date >= 23 && check.date <= 30){
        week4 += check.money_spent;
        day2330.push(check);
    }

    else if(check.date === 31){
        week5 += check.money_spent;
        day31.push(check);
    }

    else{
        console.log("Invalid Date");
    }
}

//Set Pie Chart - Calculations
anychart.onDocumentReady(function() {

    //Set the data
    var data = [
        {x: "Spent", value: sum},
        {x: "Remaining", value: remaining},
    ];

    //Create the chart
    var chart1 = anychart.pie();

    //Chart Title
    chart1.title(`Renan's Budget Calculation - Month of ${month}`);

    //Add the data
    chart1.data(data);

    //Display the chart in the container
    chart1.container('container');
    chart1.draw();
});

//Set Pie Chart - Categories
anychart.onDocumentReady(function() {

    //Set the data
    var data = [
        {x: "Groceries", value: groceries},
        {x: "Food", value: food},
        {x: "Clothes", value: clothes},
        {x: "Fun", value: fun},
        {x: "Gas", value: gas},
        {x: "Fixed", value: fixed},
        {x: "Extra", value: extra},
    ];

    //Create the chart
    var chart2 = anychart.pie();

    //Chart Title
    chart2.title(`Renan's Budget Categories- Month of ${month}`);

    //Add the data
    chart2.data(data);

    //Display the chart in the container
    chart2.container('container2');
    chart2.draw();
});

//Set Pie Chart - Weeks
anychart.onDocumentReady(function() {

    //Set the data
    var data = [
        {x: "Days 1 to 7", value: week1},
        {x: "Days 8 to 15", value: week2},
        {x: "Days 16 to 22", value: week3},
        {x: "Days 23 to 30", value: week4},
        {x: "Day 31", value: week5},
    ];

    //Create the chart
    var chart3 = anychart.pie();

    //Chart Title
    chart3.title(`Renan's Budget Weeks - Month of ${month}`);

    //Add the data
    chart3.data(data);

    //Display the chart in the container
    chart3.container('container3');
    chart3.draw();
});

// TEST
// console.log(`sum: ${sum}`);
// console.log(`remaining: ${remaining}`);
// console.log(`groceries: ${groceries}`);
// console.log(`food: ${food}`);
// console.log(`clothes: ${clothes}`);
// console.log(`fun: ${fun}`);
// console.log(`gas: ${gas}`);
// console.log(`fixed: ${fixed}`);
// console.log(`extra: ${extra}`);

// console.log("_______________________");
// console.log(category1);
// console.log(category2);
// console.log(category3);
// console.log(category4);
// console.log(category5);
// console.log(category6);
// console.log(category7);

// console.log("_______________________");

// console.log(day17);
// console.log(day815);
// console.log(day1622);
// console.log(day2330);
// console.log(day31);



/*TO DO:
    - take input online
*/

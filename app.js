//declaring variables

var daysOfWeek=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var femaleNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];


// calling function
function getName(){
    var year=parseInt(document.getElementById("year").value);
    var month =parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    //validating
    if(day<=0||day>31)
    alert("please enter a valid day")

}
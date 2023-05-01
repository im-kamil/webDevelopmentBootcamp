console.log("This is module.js");
function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/array.length;
}

// module.exports = {
//     avg : average,
//     name : "kamil",
//     repo : "github",
// } 
module.exports.name = "kamil";
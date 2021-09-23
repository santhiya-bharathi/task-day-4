//1.How to compare two JSON have the same properties without order?
//a.	var obj1 = { name: "Person 1", age:5 };
//b.	var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var result = true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(var key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            result=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log(result);


//qn.no 2 answer this rest countries url v3 (in task qn doesn't work)
const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        for(let blog of blogs){
            //print capital only
            console.log(blog["flag"]);
            
        }
    };
        xhr.send();
    
};
getBlogs();



//qn.no 3 answer this rest countries url v3 (in task qn doesn't work)
const getBlogs1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs1 = xhr.response;
        for(let blog1 of blogs1){
           
            //print region, subregion,independent
            console.log("name:"+ blog1["name"], "region:" + blog1["region"], "subregion:" + blog1["subregion"], "population:" + blog1["population"]);
        }
    };
        xhr.send();
    
};
getBlogs1();
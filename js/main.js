fetch("./fruits.json")
.then( response => {
    return response.json();
})
.then( data =>{
    // console.log(data);

})

//this gets and stores the search parameter

let searchValue = document.getElementById('search-value').ariaValueMax;

// console.log(searchValue);

// starts the search when btn is clicked

let searchBtn = document.getElementById('search-brn');
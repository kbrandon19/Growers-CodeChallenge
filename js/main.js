/* Variation #2 */

// # 1. Accept a file as input

let fileHandle;
let searchFileBtn = document.getElementById('search-file-btn');
let p = document.querySelector('.textarea');

async function stringVal(){
    [fileHandle] = await window.showOpenFilePicker();
    const fileData = await fileHandle.getFile();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  p.textContent = contents;
    
  
}



searchFileBtn.addEventListener('click',stringVal)

// # 2.  Accept a string value as a "search parameter"

// 3. Accept a string value as a "replacement parameter"

let searchReplaceBtn = document.getElementById('search-replace-btn');

function searchReplace(){

    let searchValue = document.getElementById('search-value').value;
    let replaceValue = document.getElementById('replace-value').value;
  
  let test = document.querySelector('.test');

  

  while(test.textContent.indexOf(searchValue) != -1){
    test.textContent = test.textContent.replace(searchValue,replaceValue);
  }
   

    

}

searchReplaceBtn.addEventListener('click', searchReplace);


// //getting data from json file 
// fetch("./fruits.json")
// .then( response => {
//     return response.json();
// })
// .then( data =>{
//     // console.log(data);

// })

// //this gets and stores the search parameter

// let searchBtn = document.getElementById('search-btn');
// //function that will search for string parameter and replace it with another string value
// function StringFindReplace(){

//     let searchValue = document.getElementById('search-value').value;

//     let replaceValue = document.getElementById('replace-value').value;
// }


// // console.log(searchValue);

// // starts the search when btn is clicked



// searchBtn.addEventListener('click')





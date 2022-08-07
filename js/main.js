//  1

let fileHandle;
let searchFileBtn = document.getElementById("search-file-btn");
let p = document.querySelector(".textarea");

async function stringVal() {
  [fileHandle] = await window.showOpenFilePicker();
  const fileData = await fileHandle.getFile();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  p.textContent = contents;
}

searchFileBtn.addEventListener("click", stringVal);

// 2 & 3

function searchReplace(e, stringVal) {
  e.preventDefault();

  let searchValue = document.getElementById("search-value").value;
  let replaceValue = document.getElementById("replace-value").value;

  //verifies what data type the input value is
  console.log(searchValue + " is a " + typeof searchValue);
  console.log(replaceValue + " is a " + typeof replaceValue);

  while (p.textContent.indexOf(searchValue) != -1) {
    p.textContent = p.textContent.replace(searchValue, replaceValue);
  }

  // 4
  function countString(searchReplace) {
    fileText = p.textContent;

    let a = fileText.split(" ");

    //testing to see if I get text from the file
    console.log(searchValue + " is the search value");

    let counter = 0;

    // for (i = 0; i < a.length; i++) {
    //   if (searchValue === (a[i])) 
    //   counter++;
    // }
    
    // return counter;
  }

  countString();
}

document.getElementById("search-replace-btn").addEventListener("click", searchReplace);

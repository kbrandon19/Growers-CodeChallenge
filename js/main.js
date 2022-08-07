//  1

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

// 2 & 3

function searchReplace(e, stringVal){
    e.preventDefault();
    
    let searchValue = document.getElementById('search-value').value;
    let replaceValue = document.getElementById('replace-value').value;

  //verifies what data type the input value is
      console.log(typeof(searchValue));
        
  while(p.textContent.indexOf(searchValue) != -1){
    p.textContent = p.textContent.replace(searchValue,replaceValue)
  }
 
}

document.getElementById('search-replace-btn').addEventListener('click', searchReplace);






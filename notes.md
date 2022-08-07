## 1. Accept a file as input
<hr><br>
As far as the file that's to be inputted I was unsure if it would be from a json file or an uploaded file. I took the approach if there was going to be a simple text file uploaded.

For the example text I create 3 separate files, 2 text files and one json file, just to test it later on.

Using fileHandle was new to me and it was interesting to see how it work after reading more about it in MDN Web Docs.
<br><br>

## 2. , 3. Accept a string value as a "search parameter" and a "replacement parameter"
<hr><br>

To meet these requirements I placed them inside a single function named ```searchReplace()```. Here the search and replacement of words will occur once the ```search-replace-btn```button  is clicked.

This step was pretty easy as I've use this method of getting text from an input field before with several projects. I didn't do any type casting as the text is already a string. To verify this I did ```console.log(typeof(searchValue))```
<br><br>
<hr>

### Issue #1

*After the first 3 steps were completed I started to think if I need to nest the functions or if I would be able to reach through functions to replace the text.*
<hr>
<br><br>

<!--
## 4. Count every occurrence of the value of the "search parameter" in the file -->

## 5. Replace each occurance of the "search parameter" with the value of the "replacement parameter"
<hr><br>

To replace each occurance of the search parameter with the replacement parameter I used the replace method. 

At first every occurance wasn't replaced at the same time so I have to click the Search & Replace (S&R) button until every word was replace. The only problem with this is that I would have to know the exact number of items to replace, if not there's a chance I can miss it.

To correct this I put it inside of a while loop, this ensure that every occurance it replace on a single click..

<!--
## 6. Save the file

## 7. Output the total number of occurrences of the "search parameter", and the total number of replacements. -->
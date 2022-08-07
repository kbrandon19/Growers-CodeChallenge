![Banner](./assets/Banner.png)
<br><br><br>

## The challenge was to create a program that does the following:

1. [Accept a file as input](#1-accept-a-file-as-input)
2. [Accept a string value as a "search parameter"](#2--3-accept-a-string-value-as-a-search-parameter-and-a-replacement-parameter)
3. [Accept a string value as a "replacement parameter"](#2--3-accept-a-string-value-as-a-search-parameter-and-a-replacement-parameter)
4. [Count every occurrence of the value of the "search parameter" in the file](#4-count-every-occurrence-of-the-value-of-the-search-parameter-in-the-file)
5. [Replace each occurance of the "search parameter" with the value of the "replacement parameter"](#5-replace-each-occurance-of-the-search-parameter-with-the-value-of-the-replacement-parameter)
6. [Save the file](#6-save-the-file)
7. [Output the total number of occurrences of the "search parameter", and the total number of replacements.](#7-output-the-total-number-of-occurrences-of-the-search-parameter-and-the-total-number-of-replacements)

<br><br><br><hr>

## Below are some notes and feedback and took throughout the challenge

[Issues I Encounterd](#issues)

<hr><br><br><br>

## 1. Accept a file as input

<hr><br>
As far as the file that's to be inputted I was unsure if it would be from a json file or an uploaded file. I took the approach if there was going to be a simple text file uploaded.

For the example text I create 3 separate files, 2 text files and one json file, just to test it later on.

Using fileHandle was new to me and it was interesting to see how it work after reading more about it in MDN Web Docs.
<br><br>

## 2. , 3. Accept a string value as a "search parameter" and a "replacement parameter"

<hr><br>

To meet these requirements I placed them inside a single function named `searchReplace()`. Here the search and replacement of words will occur once the `search-replace-btn`button is clicked.

This step was pretty easy as I've use this method of getting text from an input field before with several projects. I didn't do any type casting as the text is already a string. To verify this I did `console.log(typeof(searchValue))`
<br><br>

## 4. Count every occurrence of the value of the "search parameter" in the file

<hr><br>

My first thought was that *1.* I need a function to execute when the S&R button is clicked and it should be placed inside of the function searchReplace(). *2* A for loops needs to be used as well to go through each string and compare it to the searchValue and then increment i.



<br><br>

## 5. Replace each occurance of the "search parameter" with the value of the "replacement parameter"

<hr><br>

To replace each occurance of the search parameter with the replacement parameter I used the replace method.

At first every occurance wasn't replaced at the same time so I have to click the Search & Replace (S&R) button until every word was replace. The only problem with this is that I would have to know the exact number of items to replace, if not there's a chance I can miss it.

To correct this I put it inside of a while loop, this ensure that every occurance it replace on a single click.

## 6. Save the file

<hr><br>

## 7. Output the total number of occurrences of the "search parameter", and the total number of replacements.

<hr><br><br>

<br><br><br>

# Issues

#1 After the first 3 steps were completed I started to think if I need to nest the functions or if I would be able to reach through functions to replace the text.

<hr>
#2 I was testing some things out when it came to passing the searchValue. When I console.log it I would only get undefined. Unsure why I looked back at the function parameter and I thought it could be how I was passing the parameters. First I had 

`function countString(stringVal, searchValue){...}` but I though about having the whole searchReplace function as the parameter, despite it being inside of that function, weird right? But, it worked. 


<hr>
<br><br>

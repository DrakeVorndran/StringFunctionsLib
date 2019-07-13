# String Casing
Various functions to handle string casing added onto the string prototype

### Functions
* __String.prototype.capatlize())__  
  Capatlizes the first char of the string and returns it.
  ```js
  "this is a string".capatlize() //=> "This is a string" 
  ```
* __String.prototype.lower())__  
  Opposite of capatlize, makes the first char lower case.
  ```js
  "This is a String".lower() //=> "this is a String" 
  ```
* __String.prototype.capatlizeSentence())__  
  Capatlizes each word in the string
  ```js
  "this is a string".capatlizeSentence() //=> "This Is A String" 
  ```
* __String.prototype.evenCaps())__  
  Capatlizes every other letter in the string on the even
  ```js
  "this is a string".evenCaps() //=> "ThIs iS A StRiNg"
  ```
* __String.prototype.oddCaps())__  
  Capatlizes every other letter in the string on the odd
  ```js
  "this is a string".oddCaps() //=> "tHiS Is a sTrInG"
  ```
* __String.prototype.removeWhitespace())__  
  Removes all spaces from a string
  ```js
  "this is a string".removeWhitespace() //=> "thisisastring"
  ```
* __String.prototype.removeExtraWhitespace())__  
  Remove whitespace from the ends of the string as well as extra spaces in-between words
  ```js
  "   this  is a    string   ".removeExtraWhitespace() //=> "this is a string"
  ```

* __String.prototype.kabobCase()__  
  changes string from sentence into kabob case
  ```js
  "this is a string".kabobCase() //=> "this-is-a-string"
  ```
* __String.prototype.snakeCase()__  
  changes string from sentence into kabob case
  ```js
  "this is a string".snakeCase() //=> "this_is_a_string"
  ```
* __String.prototype.camelCase()__  
  changes string from sentence into kabob case
  ```js
  "this is a string".camelCase() //=> "ThisIsAString"
  ```
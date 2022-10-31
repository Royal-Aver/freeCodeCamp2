// Using the Test Method
// Использование метода тестирования

// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
//Регулярные выражения используются в языках программирования для сопоставления частей строк. Вы создаете шаблоны, чтобы помочь вам сделать это сопоставление.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
//Если вы хотите найти слово the в строке Собака преследовала кошку, вы можете использовать следующее регулярное выражение: /the/. Обратите внимание, что в регулярном выражении не требуются кавычки.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
//В JavaScript есть несколько способов использования регулярных выражений. Один из способов проверить регулярное выражение — использовать метод .test(). Метод .test() принимает регулярное выражение, применяет его к строке (которая помещена в круглые скобки) и возвращает true или false, если ваш шаблон что-то находит или нет.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); //true

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); //true
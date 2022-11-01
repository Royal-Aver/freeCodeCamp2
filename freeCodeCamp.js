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



// Match Literal Strings
// Совпадение с литеральными строками

//In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:
//В последнем задании вы искали слово Hello, используя регулярное выражение /Hello/. Это регулярное выражение искало буквальное совпадение строки Hello. Вот еще один пример поиска буквального совпадения строки Kevin:

testStr = "Hello, my name is Kevin.";
testRegex = /Kevin/;
testRegex.test(testStr); //true

//This test call will return true. Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.
//Этот тестовый вызов вернет true. Любые другие формы Кевина не подойдут. Например, регулярное выражение /Kevin/ не будет соответствовать kevin или KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr); //false, так как слово kevin с маленькой буквы



// Match a Literal String with Different Possibilities
// Сопоставьте литеральную строку с различными возможностями

// Using regexes like /coding/, you can look for the pattern coding in another string.
// Используя регулярные выражения, такие как /coding/, вы можете искать кодировку шаблона в другой строке.

// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.
// Это мощный инструмент для поиска отдельных строк, но он ограничен только одним шаблоном. Вы можете искать несколько шаблонов, используя чередование или оператор ИЛИ: |.

// This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.
// Этот оператор сопоставляет шаблоны либо до, либо после него. Например, если вы хотите сопоставить строки да или нет, вам нужно регулярное выражение /yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
// Вы также можете искать более двух шаблонов. Вы можете сделать это, добавив больше шаблонов с большим количеством операторов ИЛИ, разделяющих их, например /yes|no|maybe/.

// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
// Заполните регулярное выражение petRegex, чтобы оно соответствовало собаке, кошке, птице или рыбе домашних животных.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
result = petRegex.test(petString); //true, т.к. есть cat



// Ignore Case While Matching
// Игнорировать регистр при сопоставлении

//Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
// До сих пор вы рассматривали регулярные выражения для буквального сопоставления строк. Но иногда вы можете захотеть также сопоставить различия в регистре.

//Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
// Регистр (или иногда регистр букв) — это разница между прописными и строчными буквами. Примеры прописных букв: A, B и C. Примеры строчных букв: a, b и c.

//You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex.An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
// Вы можете сопоставить оба случая, используя так называемый флаг. Есть и другие флаги, но здесь вы сосредоточитесь на флаге, который игнорирует регистр — флаг i. Вы можете использовать его, добавив в регулярное выражение.Примером использования этого флага является /ignorecase/i. Это регулярное выражение может соответствовать строкам ignorecase, igNoreCase и IgnoreCase.

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
// Напишите регулярное выражение fccRegex для соответствия freeCodeCamp, независимо от регистра. Ваше регулярное выражение не должно соответствовать никаким аббревиатурам или вариациям с пробелами.

myString = "freECodECamp";
let fccRegex = /freeCodeCamp/i;
result = fccRegex.test(myString); //true, т.к. есть флаг i



//Extract Matches
// Извлечь совпадения

// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
// До сих пор вы только проверяли, существует ли шаблон в строке или нет. Вы также можете извлечь фактические совпадения, которые вы нашли, с помощью метода .match().

//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
//Чтобы использовать метод .match(), примените метод к строке и передайте регулярное выражение в круглых скобках.
"Hello, World!".match(/Hello/); //Hello
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //expressions

//Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
//Обратите внимание, что синтаксис .match является «противоположным» методу .test, который вы использовали до сих пор:
'string'.match(/regex/);
/regex/.test('string');

//Apply the .match() method to extract the string coding.
// Примените метод .match() для извлечения строкового кода.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
result = extractStr.match(codingRegex);



// Find More Than the First Match
// Найдите больше, чем первое совпадение
testStr = "Repeat, Repeat, Repeat";
ourRegex = /Repeat/;
testStr.match(ourRegex); //Repeat

// So far, you have only been able to extract or search a pattern once.
// До сих пор вы могли извлекать или искать шаблон только один раз.

// Here match would return ["Repeat"].
// Здесь совпадение вернет ["Повторить"].

// To search or extract a pattern more than once, you can use the global search flag: g.
// Чтобы найти или извлечь шаблон более одного раза, вы можете использовать флаг глобального поиска: g.
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //[ 'Repeat', 'Repeat', 'Repeat' ]

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// Используя регулярное выражение starRegex, найдите и извлеките оба слова Twinkle из строки twinkleStar.
// Note You can have multiple flags on your regex like /search/gi
// Примечание У вас может быть несколько флагов в вашем регулярном выражении, например /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // ищу все слова и игнорирую регистр
result = twinkleStar.match(starRegex); //[ 'Twinkle', 'twinkle' ]



// Match Anything with Wildcard Period
// Сопоставьте что угодно с точкой подстановки

// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
// Иногда вы не будете (или не должны) знать точные символы в своих шаблонах. Обдумывание всех слов, которые соответствуют, скажем, орфографической ошибке, заняло бы много времени. К счастью, вы можете сэкономить время, используя подстановочный знак: .

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
// Подстановочный знак . будет соответствовать любому одному символу. Подстановочный знак также называется точкой и точкой. Вы можете использовать подстановочный знак так же, как и любой другой символ в регулярном выражении. Например, если вы хотите сопоставить hug, huh, hut и hum, вы можете использовать регулярное выражение /hu./ для соответствия всем четырем словам.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); //true
console.log(huRegex.test(hugStr)); //true

// //Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
// Дополните регулярное выражение unRegex так, чтобы оно соответствовало строкам run, sun, fun, pun, nun и bun. Ваше регулярное выражение должно использовать подстановочный знак.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
result = unRegex.test(exampleStr);
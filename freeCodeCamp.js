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
huRegex.test(humStr); //true
huRegex.test(hugStr); //true

// //Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
// Дополните регулярное выражение unRegex так, чтобы оно соответствовало строкам run, sun, fun, pun, nun и bun. Ваше регулярное выражение должно использовать подстановочный знак.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
result = unRegex.test(exampleStr);



//Match Single Character with Multiple Possibilities
// Сопоставьте одного персонажа с несколькими возможностями

// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
// Вы узнали, как сопоставлять литеральные шаблоны (/literal/) и подстановочные знаки (/./). Это крайности регулярных выражений, когда одно находит точные совпадения, а другое — все. Есть варианты, представляющие собой баланс между двумя крайностями.

// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// Вы можете искать буквальный шаблон с некоторой гибкостью с помощью классов символов. Классы символов позволяют вам определить группу символов, которые вы хотите сопоставить, поместив их в квадратные ([ и ]) скобки.

//For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
// Например, вы хотите сопоставить bag, big, и bug but но не bog. Для этого вы можете создать регулярное выражение /b[aiu]g/. [aiu] — это класс символов, который будет соответствовать только символам a, i или u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //["big"]
bagStr.match(bgRegex); //["bag"]
bugStr.match(bgRegex); //["bug"]
bogStr.match(bgRegex); //null

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample. Note: Be sure to match both upper- and lowercase vowels.
// Используйте класс символов с гласными (a, e, i, o, u) в вашем регулярном выражении vowelRegex, чтобы найти все гласные в строке quoteSample. Примечание. Убедитесь, что гласные в верхнем и нижнем регистре совпадают.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
result = quoteSample.match(vowelRegex); //[  'e', 'a', 'e', 'o', 'u',  'i', 'e', 'a', 'o',  'e', 'o', 'e',  'I', 'a', 'e',  'o',  'o', 'e',  'i', 'o', 'e',  'o',  'i', 'e', 'i'] нашел все буквы несмотря на регистр



// Match Letters of the Alphabet
//Совпадение букв алфавита

// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
// Вы видели, как можно использовать наборы символов, чтобы указать группу символов для сопоставления, но это требует много времени, когда вам нужно сопоставить большой диапазон символов (например, каждую букву алфавита). К счастью, есть встроенная функция, которая делает это коротким и простым.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// Внутри набора символов вы можете определить диапазон символов для сопоставления с помощью символа дефиса: -.

// For example, to match lowercase letters a through e you would use [a-e].
// Например, чтобы найти строчные буквы от a до e, вы должны использовать [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
bgRegex = /[a-e]at/;
catStr.match(bgRegex); //["cat"]
batStr.match(bgRegex); //["bat"]
matStr.match(bgRegex); //null

// Match all the letters in the string quoteSample.
// Note: Be sure to match both uppercase and lowercase letters.
// Совпадение со всеми буквами в строке quoteSample. Примечание. Убедитесь, что совпадают как прописные, так и строчные буквы.
quoteSample = "The quick brown fox jumps over the lazy dog.";
alphabetRegex = /[a-z]/gi;
result = quoteSample.match(alphabetRegex);



// Match Numbers and Letters of the Alphabet
// Совпадение чисел и букв алфавита

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
// Использование дефиса (-) для соответствия диапазону символов не ограничивается буквами. Он также работает, чтобы соответствовать диапазону чисел.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// Например, /[0-5]/ соответствует любому числу от 0 до 5, включая 0 и 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.
// Кроме того, можно комбинировать диапазон букв и цифр в одном наборе символов.
let jennyStr = "Jenny8675309";
myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
// Создайте одно регулярное выражение, которое соответствует диапазону букв от h до s и диапазону чисел от 2 до 6. Не забудьте включить в регулярное выражение соответствующие флаги.
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/gi;
result = quoteSample.match(myRegex);


// Match Single Characters Not Specified
// Совпадение с отдельными символами, не указанными

// So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
// До сих пор вы создали набор символов, которые вы хотите сопоставить, но вы также можете создать набор символов, которые вы не хотите сопоставлять. Эти типы наборов символов называются наборами символов с отрицанием.

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
// Чтобы создать отрицательный набор символов, вы помещаете символ вставки (^) после открывающей скобки и перед символами, которые не должны совпадать.

//For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
// Например, /[^aeiou]/gi соответствует всем символам, не являющимся гласными. Обратите внимание, что такие символы, как ., !, [, @, / и пробел, совпадают — набор символов с отрицанием гласных исключает только символы гласных.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
// Создайте одно регулярное выражение, которое соответствует всем символам, не являющимся числом или гласной. Не забудьте включить соответствующие флаги в регулярное выражение.

quoteSample = "3 blind mice.";
myRegex = /[^aeiou^0-9]/gi;
result = quoteSample.match(myRegex);



//Match Characters that Occur One or More Times
// Сопоставьте символы, которые встречаются один или несколько раз

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
// Иногда вам нужно сопоставить символ (или группу символов), который появляется один или несколько раз подряд. Это означает, что это происходит хотя бы один раз и может повторяться.

//You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
// Вы можете использовать символ +, чтобы проверить, так ли это. Помните, что символ или шаблон должны присутствовать последовательно. То есть символ должен повторяться один за другим.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].
// Например, /a+/g найдет одно совпадение в abc и вернет ["a"]. Из-за + он также найдет одно совпадение в aabc и вернет ["aa"].

//If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.
// Если бы вместо этого проверялась строка abab, она нашла бы два совпадения и вернула бы ["a", "a"], потому что символы a не стоят в строке - между ними есть b. Наконец, поскольку в строке bcd нет символа a, совпадение не будет найдено.

//You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
// Вы хотите найти совпадения, когда буква s встречается один или несколько раз в Миссисипи. Напишите регулярное выражение, использующее знак +.
let difficultSpelling = "Misssissippi";
myRegex = /s+/g;
result = difficultSpelling.match(myRegex); //[ 'sss', 'ss' ]



// Match Characters that Occur Zero or More Times
// Соответствие символам, которые встречаются ноль или более раз

// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
// В последней задаче использовался знак плюс + для поиска символов, которые встречаются один или несколько раз. Существует также параметр, который соответствует символам, встречающимся ноль или более раз.

// The character to do this is the asterisk or star: *.
// Символ для этого — звездочка или звездочка: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //["goooooooo"]
gPhrase.match(goRegex); //["g"]
oPhrase.match(goRegex); //null

//For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
// Для этого задания ChewieQuote был инициализирован строкой Aaaaaaaaaaaaaaarrrgh! за кулисами. Создайте регулярное выражение ChewieRegex, которое использует символ * для сопоставления с символом A в верхнем регистре, за которым непосредственно следует ноль или более символов a нижнего регистра в ChewieQuote. Вашему регулярному выражению не нужны флаги или классы символов, и оно не должно совпадать ни с какими другими кавычками.

let chewieQuote = 'He made a fair move. Screaming about it can\'t help you.'
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

result = chewieQuote.match(chewieRegex);

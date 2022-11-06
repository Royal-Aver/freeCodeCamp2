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
let unRegex = /.un/;
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
myRegex = /[^aeiou^0-9]/gi; //исключены все гласные и цифры
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



// Find Characters with Lazy Matching
// Найдите символы с ленивым сопоставлением

//In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// В регулярных выражениях жадное совпадение находит максимально длинную часть строки, которая соответствует шаблону регулярного выражения, и возвращает ее как совпадение. Альтернатива называется ленивым сопоставлением, которое находит наименьшую возможную часть строки, удовлетворяющую шаблону регулярного выражения.

//You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
//Вы можете применить регулярное выражение /t[a-z]*i/ к строке "titanic". Это регулярное выражение представляет собой шаблон, который начинается с t, заканчивается на i и содержит несколько букв между ними.

//Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
// Регулярные выражения по умолчанию являются жадными, поэтому совпадение вернет ["titani"]. Он находит самую большую подстроку, соответствующую шаблону.

//However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
//Тем не менее, вы можете использовать ? символ, чтобы изменить его на ленивое сопоставление. "titanic", сопоставленный с скорректированным регулярным выражением /t[a-z]*?i/, возвращает ["ti"].

//Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.
// Примечание. Следует избегать синтаксического анализа HTML с помощью регулярных выражений, но сопоставление шаблона строки HTML с регулярными выражениями вполне допустимо.

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
// Исправьте регулярное выражение /<.*>/, чтобы оно возвращало HTML-тег <h1>, а не текст «<h1>Зима близко</h1>». Запомните подстановочный знак. в регулярном выражении соответствует любому символу.
let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/;
result = text.match(myRegex);



// Find One or More Criminals in a Hunt
// Найдите одного или нескольких преступников на охоте

//Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.
//Время сделать паузу и проверить свои новые навыки написания регулярных выражений. Группа преступников сбежала из тюрьмы и сбежала, но вы не знаете, сколько. Однако вы знаете, что они держатся вместе, когда находятся рядом с другими людьми. Вы несете ответственность за обнаружение всех преступников сразу.

//Here's an example to review how to do this:
//Вот пример, чтобы рассмотреть, как это сделать:

//The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:
// Регулярное выражение /z+/ соответствует букве z, когда она встречается один или несколько раз подряд. Он найдет совпадения во всех следующих строках:
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

// But it does not find matches in the following strings since there are no letter z characters:
// Но он не находит совпадений в следующих строках, так как в них нет символов буквы z:
""
"ABC"
"abcabc"

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
// Напишите жадное регулярное выражение, которое находит одного или нескольких преступников в группе других людей. Преступник обозначается заглавной буквой С.
regex = 'C';
let reCriminals = /C+/;
result = regex.match(reCriminals);



// Match Beginning String Patterns
// Совпадение с шаблонами начальных строк

// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
// Предыдущие испытания показали, что регулярные выражения можно использовать для поиска ряда совпадений. Они также используются для поиска шаблонов в определенных позициях в строках.

//In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

//В более ранней задаче вы использовали символ вставки (^) внутри набора символов, чтобы создать набор символов с отрицанием в форме [^thingsThatWillNotBeMatched]. Вне набора символов знак вставки используется для поиска шаблонов в начале строк.
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); //true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //false

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
// Используйте символ вставки в регулярном выражении, чтобы найти Кэла только в начале строки rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
result = calRegex.test(rickyAndCal); //true



// Match Ending String Patterns
// Совпадение с шаблонами конечных строк

// In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
// В последнем задании вы научились использовать символ вставки для поиска шаблонов в начале строк. Существует также способ поиска шаблонов в конце строк.

// You can search the end of strings using the dollar sign character $ at the end of the regex.
// Вы можете искать конец строки, используя символ доллара $ в конце регулярного выражения.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //false

// Use the anchor character ($) to match the string caboose at the end of the string caboose.
// Используйте символ привязки ($), чтобы сопоставить строку caboose в конце строки caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
result = lastRegex.test(caboose);



// Match All Letters and Numbers
// Сопоставьте все буквы и цифры

// Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
// Используя классы символов, вы могли искать все буквы алфавита с помощью [a-z]. Этот тип класса символов достаточно распространен, поэтому для него есть ярлык, хотя он также включает в себя несколько дополнительных символов.

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
// Ближайший класс символов в JavaScript, соответствующий алфавиту, — это \w. Этот ярлык равен [A-Za-z0-9_]. Этот класс символов соответствует прописным и строчным буквам, а также цифрам. Обратите внимание, что этот класс символов также включает символ подчеркивания (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //true
shortHand.test(numbers); //true
longHand.test(varNames); //true
shortHand.test(varNames); //true

// These shortcut character classes are also known as shorthand character classes.
// Эти классы сокращенных символов также известны как классы сокращенных символов.

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// Используйте класс сокращенных символов \w для подсчета количества буквенно-цифровых символов в различных кавычках и строках.

quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; //посчитает каждую букву, если указать /\w+/g посчитает каждое слово
result = quoteSample.match(alphabetRegexV2).length; //31 (/\w+/g будет 6)



// Match Everything But Letters and Numbers
// Сопоставьте все, кроме букв и цифр

// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.
// Вы узнали, что можно использовать ярлык для сопоставления буквенно-цифровых символов [A-Za-z0-9_] с помощью \w. Естественный шаблон, который вы, возможно, захотите найти, противоположен буквенно-цифровому.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
// Вы можете искать противоположное \w с помощью \W. Обратите внимание, что в противоположном шаблоне используется заглавная буква. Этот ярлык аналогичен [^A-Za-z0-9_].
shortHand = /\W/;
numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); //["%"]
sentence.match(shortHand); //["!"]

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// Используйте класс сокращенных символов \W для подсчета количества не буквенно-цифровых символов в различных кавычках и строках.
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
result = quoteSample.match(nonAlphabetRegex).length; //6 так как считает пробелы



// Match All Numbers
// Совпадение со всеми числами

// You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers. The shortcut to look for digit.
// Вы изучили сочетания клавиш для распространенных шаблонов строк, таких как буквенно-цифровые символы. Другой распространенный шаблон — поиск только цифр или чисел. Ярлык для поиска цифры.

//The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
// Ярлык для поиска цифровых символов — это \d, с буквой d в нижнем регистре. Это соответствует классу символов [0-9], который ищет один символ любого числа от нуля до девяти.

// Match All Non-Numbers
// Совпадение со всеми нечисловыми значениями

// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
// В последнем задании было показано, как искать цифры с помощью сочетания клавиш \d со строчной буквой d. Вы также можете искать нецифры, используя аналогичный ярлык, который вместо этого использует заглавную букву D.

//The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
//Ярлык для поиска нецифровых символов — \D. Это эквивалентно классу символов [^0-9], который ищет единственный символ, который не является числом от нуля до девяти.



// Restrict Possible Usernames
// Ограничить возможные имена пользователей

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
// Имена пользователей используются повсюду в Интернете. Это то, что дает пользователям уникальную идентичность на их любимых сайтах.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// Вам нужно проверить все имена пользователей в базе данных. Вот несколько простых правил, которым должны следовать пользователи при создании своего имени пользователя.

// 1. Usernames can only use alpha-numeric characters.
// 2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 3. Username letters can be lowercase and uppercase.
// 4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// 1. Имена пользователей могут использовать только буквенно-цифровые символы.
// 2. Единственные цифры в имени пользователя должны быть в конце. В конце их может быть ноль или больше. Имя пользователя не может начинаться с цифры.
// 3. Буквы имени пользователя могут быть строчными и прописными.
// 4. Имя пользователя должно быть не менее двух символов. Двухсимвольное имя пользователя может использовать только буквы алфавита в качестве символов.

let username = "Oceans11";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
result = username.match(userCheck);



// Match Whitespace
// Совпадение с пробелами

// The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
// До сих пор задачи касались сопоставления букв алфавита и цифр. Вы также можете сопоставить пробелы или пробелы между буквами.

//You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
// Вы можете искать пробелы, используя \s, что является строчной буквой s. Этот шаблон соответствует не только пробелам, но и символам возврата каретки, табуляции, перевода страницы и новой строки. Вы можете думать об этом как о классе символов [ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); //[" ", " "]



// Match Non-Whitespace Characters
// Совпадение с непробельными символами

// You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.
// Вы узнали о поиске пробелов с помощью \s со строчной буквой s. Вы также можете искать все, кроме пробелов.

// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].
// Ищите непробельные символы, используя \S, которая является буквой s в верхнем регистре. Этот шаблон не будет соответствовать пробелам, возврату каретки, табуляции, переводу формы и символам новой строки. Вы можете думать, что это похоже на класс символов [^ \r\t\f\n\v].

whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;



// Specify Upper and Lower Number of Matches
// Укажите верхнее и нижнее количество совпадений

//Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.
//Помните, что вы используете знак плюс + для поиска одного или нескольких символов и звездочку * для поиска нуля или более символов. Это удобно, но иногда вы хотите сопоставить определенный диапазон шаблонов.

//You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.
// Вы можете указать нижнее и верхнее количество шаблонов с помощью спецификаторов количества. Спецификаторы количества используются с фигурными скобками ({ и }). Вы ставите между фигурными скобками две цифры - для нижнего и верхнего номера узора.

//For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
// Например, чтобы соответствовать только букве a, встречающейся от 3 до 5 раз в строке ah, вашим регулярным выражением будет /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); //true
multipleA.test(A2); //false



//Specify Only the Lower Number of Matches
// Укажите только меньшее количество совпадений

//You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
// Вы можете указать нижнее и верхнее количество шаблонов с помощью спецификаторов количества, используя фигурные скобки. Иногда вы хотите указать только меньшее количество шаблонов без верхнего предела.

//To only specify the lower number of patterns, keep the first number followed by a comma.
// Чтобы указать только меньшее количество шаблонов, оставьте первое число с запятой.

//For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
// Например, чтобы сопоставить только строку hah с буквой a, появляющейся не менее 3 раз, ваше регулярное выражение будет /ha{3,}h/.
A4 = "haaaah";
A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
multipleA = /ha{3,}h/;
multipleA.test(A4); //true
multipleA.test(A2); //false
multipleA.test(A100); //true



// Specify Exact Number of Matches
// Укажите точное количество совпадений

// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.
// Вы можете указать нижнее и верхнее количество шаблонов с помощью спецификаторов количества, используя фигурные скобки. Иногда вам нужно только определенное количество совпадений.

//To specify a certain number of patterns, just have that one number between the curly brackets.
// Чтобы указать определенное количество шаблонов, просто поместите это число в фигурные скобки.

//For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.
// Например, чтобы сопоставить только слово hah с буквой a 3 раза, ваше регулярное выражение будет /ha{3}h/.
A4 = "haaaah";
let A3 = "haaah";
A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); //false
multipleHA.test(A3); //true
multipleHA.test(A100); //false



//Check for All or None
// Проверить все или ничего

//Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
// Иногда шаблоны, которые вы хотите найти, могут иметь части, которые могут существовать или не существовать. Тем не менее, может быть важно проверить их, тем не менее.

//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
// Вы можете указать возможное существование элемента с помощью знака вопроса, ?. Это проверяет наличие нуля или одного из предыдущих элементов. Вы можете думать об этом символе как о том, что предыдущий элемент является необязательным.

//For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
// Например, в американском и британском английском есть небольшие различия, и вы можете использовать вопросительный знак, чтобы соответствовать обоим вариантам написания.
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true



//Positive and Negative Lookahead
// Положительный и отрицательный взгляд вперед

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
// Lookaheads — это шаблоны, которые сообщают JavaScript о том, что нужно смотреть вперед в вашей строке, чтобы проверить наличие шаблонов дальше. Это может быть полезно, когда вы хотите найти несколько шаблонов в одной и той же строке.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.
// Существует два вида просмотра вперед: положительный просмотр вперед и отрицательный просмотр вперед.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// Положительный просмотр вперед проверяет наличие элемента в шаблоне поиска, но на самом деле не соответствует ему. Положительный просмотр вперед используется как (?=...), где ... - это требуемая часть, которая не соответствует.

//On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
//С другой стороны, отрицательный просмотр вперед будет проверять, что элемента в шаблоне поиска нет. Отрицательный просмотр вперед используется как (?!...), где ... это образец, что вы не хотите быть там. Остальная часть шаблона возвращается, если отрицательная часть просмотра вперед отсутствует.

//Lookaheads are a bit confusing but some examples will help.
// Прогнозы немного сбивают с толку, но некоторые примеры помогут.
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); //["q"]
noquit.match(qRegex); //["q"]

//A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
// Более практичное использование просмотра вперед — это проверка двух или более шаблонов в одной строке. Вот (наивно) простая проверка пароля, которая ищет от 3 до 6 символов и по крайней мере одну цифру:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);




//Check For Mixed Grouping of Characters
// Проверьте наличие смешанной группировки символов

// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
// Иногда нам нужно проверить группы символов с помощью регулярного выражения, и для этого мы используем круглые скобки ().

//If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
//Если вы хотите найти Penguin или Pumpkin в строке, вы можете использовать следующее регулярное выражение: /P(engu|umpk)in/g

//Then check whether the desired string groups are in the test string by using the test() method.
// Затем проверьте, находятся ли нужные группы строк в тестовой строке, используя метод test().
testStr = "Pumpkin";
testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); //true

//Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// Исправьте регулярное выражение, чтобы оно проверяло имена Франклина Рузвельта или Элеоноры Рузвельт с учетом регистра и делало послабления для отчеств.

//Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
// Затем исправьте код, чтобы регулярное выражение, которое вы создали, сверялось с myString, и возвращалось значение true или false в зависимости от того, соответствует ли регулярное выражение.



// Reuse Patterns Using Capture Groups
// Повторное использование шаблонов с помощью групп захвата

// Say you want to match a word that occurs multiple times like below.
// Допустим, вы хотите сопоставить слово, которое встречается несколько раз, как показано ниже.
let repeatStr = "row row row your boat";

//You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.
// Вы можете использовать /row row row/, но что, если вы не знаете повторяющееся конкретное слово? Группы захвата можно использовать для поиска повторяющихся подстрок.

// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
// Группы захвата создаются путем заключения шаблона регулярного выражения в круглые скобки. В этом случае цель состоит в том, чтобы захватить слово, состоящее из буквенно-цифровых символов, поэтому группа захвата будет \w+, заключенная в круглые скобки: /(\w+)/.

//The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
//Подстрока, соответствующая группе, сохраняется во временной «переменной», к которой можно получить доступ в том же регулярном выражении, используя обратную косую черту и номер группы захвата (например, \1). Группы захвата автоматически нумеруются по положению открывающих скобок (слева направо), начиная с 1.

//The example below matches a word that occurs thrice separated by spaces:
// Пример ниже соответствует слову, которое встречается трижды через пробел:
repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

//Using the .match() method on a string will return an array with the matched substring, along with its captured groups.
// Использование метода .match() для строки вернет массив с совпадающей подстрокой вместе с ее захваченными группами.



//Use Capture Groups to Search and Replace
// Используйте группы захвата для поиска и замены

//Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
// Поиск полезен. Однако вы можете сделать поиск еще более эффективным, если он также изменяет (или заменяет) текст, который вы ищете.

//You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
// Вы можете искать и заменять текст в строке, используя .replace() в строке. Входные данные для .replace() — это сначала шаблон регулярного выражения, который вы хотите найти. Второй параметр — это строка для замены совпадения или функция, которая что-то делает.
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// The replace call would return the string The sky is blue.. You can also access capture groups in the replacement string with dollar signs ($).
// Вызов replace вернет строку The sky is blue.. Вы также можете получить доступ к группам захвата в строке замены со знаком доллара ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); //Camp Code



//Remove Whitespace from Start and End
// Удалить пробелы в начале и конце

//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings. Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
// Напишите регулярное выражение и используйте соответствующие строковые методы для удаления пробелов в начале и конце строк. Примечание. Здесь будет работать метод String.prototype.trim(), но вам нужно будет выполнить эту задачу, используя регулярные выражения.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
result = hello.replace(wsRegex, "");




// Basic Data Structures
// Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.
// In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.

// Основные структуры данных
// Данные можно хранить и получать к ним доступ разными способами. Вы уже знаете некоторые распространенные структуры данных JavaScript — массивы и объекты.
// В этом курсе «Основные структуры данных» вы узнаете больше о различиях между массивами и объектами, а также о том, что использовать в разных ситуациях. Вы также узнаете, как использовать полезные методы JS, такие как splice() и Object.keys(), для доступа к данным и управления ими.

// Use an Array to Store a Collection of Data
// Используйте массив для хранения набора данных

//The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:
//Ниже приведен пример простейшей реализации структуры данных массива. Это известно как одномерный массив, что означает, что он имеет только один уровень или что в нем нет других вложенных массивов. Обратите внимание, что он содержит логические значения, строки и числа, а также другие допустимые типы данных JavaScript:
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length); //7

//All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
//Все массивы имеют свойство длины, к которому, как показано выше, можно очень легко получить доступ с помощью синтаксиса Array.length. Более сложную реализацию массива можно увидеть ниже. Это известно как многомерный массив или массив, который содержит другие массивы. Обратите внимание, что этот массив также содержит объекты JavaScript, которые мы очень подробно рассмотрим в следующем разделе, а пока все, что вам нужно знать, это то, что массивы также способны хранить сложные объекты.
let complexArray = [
  [{ one: 1, two: 2},{ three: 3, four: 4 }],
  [{ a: "a", b: "b" }, { c: "c", d: "d" }]
];



//Access an Array's Contents Using Bracket Notation
// Доступ к содержимому массива с использованием скобочных обозначений

//The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.
//Фундаментальной особенностью любой структуры данных является, конечно же, возможность не только хранить данные, но и извлекать эти данные по команде. Итак, теперь, когда мы узнали, как создать массив, давайте начнем думать о том, как мы можем получить доступ к информации этого массива.

//When we define a simple array as seen below, there are 3 items in it:
// Когда мы определяем простой массив, как показано ниже, в нем есть 3 элемента:
let ourArray = ["a", "b", "c"];

//In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:
//В массиве каждый элемент массива имеет индекс. Этот индекс удваивается как позиция этого элемента в массиве и то, как вы на него ссылаетесь. Однако важно отметить, что массивы JavaScript имеют нулевой индекс, а это означает, что первый элемент массива фактически находится в нулевой позиции, а не в первой. Чтобы получить элемент из массива, мы можем заключить индекс в скобки и добавить его в конец массива или, что чаще, к переменной, которая ссылается на объект массива. Это известно как запись в скобках. Например, если мы хотим получить a из массива ourArray и присвоить его переменной, мы можем сделать это с помощью следующего кода:
let ourVariable = ourArray[0];

//In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:
// В дополнение к доступу к значению, связанному с индексом, вы также можете установить индекс на значение, используя ту же нотацию:
ourArray[1] = "not b anymore";




//Решил задачку с рекурсией

//Мы определили функцию с именем rangeOfNumbers с двумя параметрами. Функция должна возвращать массив целых чисел, который начинается с числа, представленного параметром startNum, и заканчивается числом, представленным параметром endNum. Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию, вызывая саму себя, и не использовать циклы любого вида. Это также должно работать в случаях, когда и startNum, и endNum совпадают.
function rangeOfNumbers(startNum, endNum) {
  let res = []
  if (endNum < startNum) {
    return []
  } else {
    res = rangeOfNumbers(startNum, endNum - 1);
    res.push(endNum)
  }
  return res;
};

rangeOfNumbers(1, 5) //[1, 2, 3, 4, 5]


//Решил задачу тернарником

//Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число.
// Например: 2-й месяц (февраль) является частью первого квартала; 6 месяц (июнь) входит во второй квартал; и месяц 11 (ноябрь) является частью четвертого квартала.
const quarterOf = (month) => {
  return (month === 1 || month <= 3) ? 1 :
  (month <= 6) ? 2 :
  (month <= 9) ? 3 : 4
}

quarterOf(11) //1


//Возвращает количество (количество) гласных в заданной строке. Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y). Входная строка будет состоять только из строчных букв и/или пробелов.
function getCount(str) {

  const res = str.match(/[aeiou]/g)
  return (res) ? res.length : 0
}

getCount('abracadabra') //5


//В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
function highAndLow(numbers){

  let arr = numbers.split(' ');
  let minNumber = arr[0];
  let maxNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minNumber < +arr[i]) minNumber = arr[i];
    else if (maxNumber > +arr[i]) maxNumber = arr[i];
  }
  return `${minNumber} ${maxNumber}`
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") //"42 -9"


//В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
function filter_list(l) {
  return l.filter(e => typeof e === 'number')
}

filter_list([1,2,'a','b']) //[1,2]


// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
// Примечание. Если число кратно и 3, и 5, считайте его только один раз.

function solution(number){
  let res = 0;
  for (let i = number - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i
    }
  }
  return res
}

solution(10) //23


//Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять! Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.
function greet(language) {
	const obj = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
  }

  if(obj[language]) {
    return obj[language]
  }
  return 'Welcome'
}

console.log(greet('italian')) //'Welcome'

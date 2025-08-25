/*
Strings in PHP:
Strings in PHP are sequences of characters used to represent text. They can be defined using single quotes (' ') or
double quotes (" "). Double-quoted strings support variable interpolation and escape sequences,
while single-quoted strings do not.
*/

// Example of single-quoted string
<?php
$singleQuoted = 'Hello, World!';
echo "<p>Single-quoted: $singleQuoted</p>";
?>

// Example of double-quoted string with variable interpolation
<?php
$doubleQuoted = "Hello, World!";
echo "<p>Double-quoted: $doubleQuoted</p>";
?>

// Example of escape sequences in double-quoted string
<?php
$escaped = "He said, \"Hello, World!\"";
echo "<p>Escape sequences: $escaped</p>";
?>

// Example of concatenation in PHP
<?php
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;
echo "<p>Full Name: $fullName</p>";
?>



/* 
String functions in PHP: 

    String functions in PHP are built-in functions that allow you to manipulate and work with strings. Some common string 
    functions include:
*/

// 1. strlen() - Get the length of a string
$string = "Hello, World!";
echo "<p>Length of string: " . strlen($string) . "</p>";

// 2. strtoupper() - Convert a string to uppercase
echo "<p>Uppercase: " . strtoupper($string) . "</p>";

// 3. strtolower() - Convert a string to lowercase
echo "<p>Lowercase: " . strtolower($string) . "</p>";

// 4. substr() - Get a substring
echo "<p>Substring: " . substr($string, 7, 5) . "</p>";

// 5. str_replace() - Replace a substring
echo "<p>Replace: " . str_replace("World", "PHP", $string) . "</p>";
*/

// Example of string functions

//1. Concatenate two strings
<?php
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;
echo "<p>Full Name: $fullName</p>";
?>

//2. Find the length of a string
<?php
$string = "Hello, World!";
echo "<p>Length of string: " . strlen($string) . "</p>";
?>

//3. Convert the string to uppercase
<?php
echo "<p>Uppercase: " . strtoupper($string) . "</p>";
?>

//4. Convert the string to lowercase
<?php
echo "<p>Lowercase: " . strtolower($string) . "</p>";
?>

//5. Get a substring
<?php
echo "<p>Substring: " . substr($string, 7, 5) . "</p>";
?>

//6. Replace a substring
<?php
echo "<p>Replace: " . str_replace("World", "PHP", $string) . "</p>";
?>


// Practice set for Strings in PHP:

//Q.no.1 Write a PHP program to convert a string "welcome to php" into uppercase.
<?php
$string1 = "welcome to php";
echo "<p>Uppercase: " . strtoupper($string1) . "</p>";
?>

//Q.no.2 Take a string "Learning PHP is fun" and extract only the word "PHP".
<?php
$string2 = "Learning PHP is fun";
preg_match("/PHP/", $string2, $matches);
echo "<p>Extracted: " . $matches[0] . "</p>";
?>

//Q.no.3 Write a PHP code that checks if the word "network" exists inside "computer network basics".
<?php
$string3 = "computer network basics";
if (strpos($string3, "network") !== false) {
    echo "<p>Word 'network' found.</p>";
} else {
    echo "<p>Word 'network' not found.</p>";
}
?>

//Q.no.4 Replace "World" with "Aashish" in the string "Hello World".
<?php
$string4 = "Hello World";
echo "<p>Replaced: " . str_replace("World", "Aashish", $string4) . "</p>";
?>

//Q.no.5 Create a PHP program that counts the number of vowels in the string "Cybersecurity".
<?php
$string5 = "Cybersecurity";
$vowelCount = preg_match_all("/[aeiou]/i", $string5, $matches);
echo "<p>Number of vowels: " . $vowelCount . "</p>";
?>
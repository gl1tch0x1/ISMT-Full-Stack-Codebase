/*
Variables and Constants in PHP:
    Variables are used to store data, and they can change during the execution of a script.
    Constants are similar to variables, but their values cannot be changed once defined.
*/

// Example of a variable
<?php
$greeting = "Hello, World!";
echo "<h1>$greeting</h1>";
?>
// This code defines a variable $greeting and outputs its value within an H1 heading.


// Example of a constant
<?php
define("SITE_NAME", "My Awesome Website");
echo "<p>Welcome to " . SITE_NAME . "</p>";
?>
// This code defines a constant SITE_NAME and outputs its value within a paragraph.


/* Further More examples of variables and constants are: */

// Example of a variable
<?php
$age = 25;
echo "<p>Age: $age</p>";
?>

// Example of a constant
<?php
define("PI", 3.14);
echo "<p>Value of PI: " . PI . "</p>";
?>

// WARNING: In PHP, variable names are case-sensitive, while constant names are not.

/* Example of case sensitivity
<?php
$Name = "John";
echo "<p>Name: $Name</p>"; // Outputs: Name: John
// echo "<p>Name: " . NAME . "</p>"; // Error: Constant NAME is not defined
?>
*/

// Swapping values of two variables using third variable
<?php
$a = 5;
$b = 10;
echo "<p>Before Swap: a = $a, b = $b</p>";
$temp = $a;
$a = $b;
$b = $temp;
echo "<p>After Swap: a = $a, b = $b</p>";
?>




/* Practice set for Variables and Constants in PHP:

// Qno.1 Create two variables $firstName and $lastName, combine them into a full name, and print "Hello, my name is FirstName LastName.".
<?php
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;
echo "<p>Hello, my name is $fullName.</p>";
?>


// Qno.2 Declare $x = 50 and $y = 100, swap their values without using a third variable, and print before and after.
<?php
$x = 50;
$y = 100;
echo "<p>Before Swap: x = $x, y = $y</p>";
$x = $x + $y;
$y = $x - $y;
$x = $x - $y;
echo "<p>After Swap: x = $x, y = $y</p>";
?>

// Qno.3 Define a constant PI = 3.1416, take $radius = 7, and calculate the area of the circle.
<?php
define("PI", 3.1416);
$radius = 7;
$area = PI * $radius * $radius;
echo "<p>Area of the Circle: $area</p>";
?>

// Qno.4 Using $a = 8, $b = 4, and $c = 2, perform addition, subtraction, multiplication, and division, and print the results.
<?php
$a = 8;
$b = 4;
$c = 2;
echo "<p>Addition: " . ($a + $b + $c) . "</p>";
echo "<p>Subtraction: " . ($a - $b - $c) . "</p>";
echo "<p>Multiplication: " . ($a * $b * $c) . "</p>";
echo "<p>Division: " . ($a / $b / $c) . "</p>";
?>

// Qno.5 Create variables $name, $age, and $country, assign your details, and print "My name is Name, I am Age years old, and I live in Country.".
<?php
$name = "John";
$age = 25;
$country = "USA";
echo "<p>My name is $name, I am $age years old, and I live in $country.</p>";
?>

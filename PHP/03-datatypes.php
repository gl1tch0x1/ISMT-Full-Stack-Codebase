/* 
Datatypes in PHP:
    Datatypes in PHP are used to define the type of data that a variable can hold. PHP is a dynamically typed language,
    which means that you do not need to declare the datatype of a variable explicitly. The interpreter automatically converts
    the variable to the appropriate datatype based on its value.

    Here are some of the most commonly used datatypes in PHP:
    1. String
    2. Integer
    3. Float
    4. Boolean
    5. Array
    6. Object
    7. NULL


    1. String:
        A string is a sequence of characters enclosed in single or double quotes.
        Example:
            $name = "John Doe";
            $greeting = 'Hello, World!';
            echo $greeting;

    2. Integer:
        An integer is a whole number without a decimal point.
        Example:
            $age = 25;
            $year = 2024;
            echo $age;
            echo $year;
    
    3. Float:
        A float (or double) is a number with a decimal point.
        Example:
            $price = 19.99;
            $temperature = -5.5;
            echo $price;
            echo $temperature;
            echo $price + $temperature;
    
    4. Boolean:
        A boolean represents a value that can be either true or false.
        Example:
            $is_admin = true;
            $is_logged_in = false;
            echo $is_admin;
            echo $is_logged_in;
            echo $is_admin && $is_logged_in;
            echo $is_admin || $is_logged_in;
            echo !$is_admin;
    
    5. Array:
        An array is a collection of values that can be of different datatypes.
        Example:
            $fruits = array("Apple", "Banana", "Orange");
            echo $fruits[0]; // Outputs: Apple
            echo $fruits[1]; // Outputs: Banana
            echo $fruits[2]; // Outputs: Orange

    6. Object:
        An object is an instance of a class that can hold properties and methods.
        Example:
            class Car {
                public $color;
                public $model;

                public function __construct($color, $model) {
                    $this->color = $color;
                    $this->model = $model;
                }

                public function getMessage() {
                    return "The car is a " . $this->color . " " . $this->model . ".";
                }
            }

            $myCar = new Car("red", "Toyota");
            echo $myCar->getMessage(); // Outputs: The car is a red Toyota.
            echo $myCar->color;
            echo $myCar->model;

    7. NULL:
        NULL represents a variable with no value.
        Example:
            $var = NULL;
            echo $var; // Outputs nothing
            var_dump($var); // Outputs: NULL

            $var = "Hello, World!";
            echo $var; // Outputs: Hello, World!
            var_dump($var); // Outputs: string(13) "Hello, World!"
*/




/*
 Example code demonstrating different datatypes in PHP (real scenarios examples):

1. Write a PHP program to store a person’s name, age, and email in variables of correct datatypes and print them.

2. Write a PHP program to store the prices of 3 grocery items in an array and calculate the total.

3. Write a PHP program to check if a student’s exam score is greater than 40 and print Pass/Fail using boolean datatype.

4. Write a PHP program to store a list of 5 employee names in an array and display them in a loop.

5. Write a PHP program to create an associative array for a book with title, author, and price, then print each value.

*/


<?php

// Q.No.1, Answer:
$employee_names = array("Alice", "Bob", "Charlie", "David", "Eve");
foreach ($employee_names as $name) {
    echo "Employee Name: " . $name . "\n";
}

// Q.No.2, Answer:
$book = array(
    "title" => "The Great Gatsby",
    "author" => "F. Scott Fitzgerald",
    "price" => 10.99
);
echo "Book Title: " . $book["title"] . "\n";
echo "Author: " . $book["author"] . "\n";
echo "Price: $" . $book["price"] . "\n";

// Q.No.3, Answer:
$exam_score = 45;
$is_pass = $exam_score > 40;
echo "Exam Result: " . ($is_pass ? "Pass" : "Fail") . "\n";

// Q.No.4, Answer:
$employee_names = array("Alice", "Bob", "Charlie", "David", "Eve");
foreach ($employee_names as $name) {
    echo "Employee Name: " . $name . "\n";
}

// Q.No.5, Answer:
$book = array(
    "title" => "The Great Gatsby",
    "author" => "F. Scott Fitzgerald",
    "price" => 10.99
);
echo "Book Title: " . $book["title"] . "\n";
echo "Author: " . $book["author"] . "\n";
echo "Price: $" . $book["price"] . "\n";

?>
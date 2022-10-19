
![Tree Avatar](https://raw.githubusercontent.com/hxAri/hxAri/main/assets/images/1653507345%3B50XUUPql.z.png)

## Abouts
Create a Tree structure using an Array or Object.
You want to create a tree structure like in the Command Line Interface?
Sans!... *Tree* is the solution!.. It's really very simple and without the hassle!

In addition to using PHP, Tree has also been made for the JavaScript version,
but now it only supports HTML display, for the next version maybe I will add a feature
so that the JavaScript version of Tree can run on the Command Line Interface along with NodeJS.

## Install
Install with Composer
```
composer require hxari/tree
```
Install with Wget
```
wget https://raw.githubusercontent.com/hxAri/Tree/main/src/PHPTree/Tree.php
```
Install with Git
```
git clone https://github.com/hxAri/Tree
```

Or you can also download it directly from [Github](https://github.com/hxAri/Tree/archive/refs/heads/main.zip) if you don't want to bother.

## Usage
Very simple usage.
```php

use Tree\Tree;

// If you use Composer.
require "vendor/autoload.php";

// If you use Git/ Download.
require "Tree/Tree.php";

// If you use Wget.
require "Tree.php";

// Suppose you have an array.
$array = [
    'users' => [
        [
            'id' => 2288,
            'profile' => [
                'fname' => "Xyz",
                'uname' => "xyz"
            ]
        ],
        [
            'id' => 2289,
            'profile' => [
                'fname' => "Xxx",
                'uname' => "xxx"
            ]
        ]
    ],
    'malware' => [
        'trojan' => "Horse"
    ]
];

// Creating a tree structure.
echo Tree::create( $array );
```
This will display.
```
├── users
│   ├── Array
│   │   ├── id
│   │   │   └── 2288
│   │   └── profile
│   │       ├── fname
│   │       │   └── Xyz
│   │       └── uname
│   │           └── xyz
│   └── Array
│       ├── id
│       │   └── 2289
│       └── profile
│           ├── fname
│           │   └── Xxx
│           └── uname
│               └── xxx
└── malware
    └── trojan
        └── Horse
```

## Methods
Explanation for method.<br/>

The `::create` method has three parameters which are:
```php
Tree::create( Array $data, Int $start = 0, Int $flags = 0 )
```
Parameter `$data` is an array data that will be used to create a tree structure.<br/><br/>
The `$start` parameter is used to identify how many spaces will be used for the start.<br/><br/>
Meanwhile, the `$flags` parameter is used to identify whether to use a line or a dot to create the structure.<br/><br/>

The `::setKeyHandler` method has one parameter with `Callable` type.
This is quite useful when you want to color the key values ​​of your array elements.
```php

// Method.
Tree::setKeyHandler( Callable $handler );

// Method Use.
Tree::setKeyHandler( fn( Mixed $key ) => "\e[1;32m{$key}" );

// Or
Tree::setKeyHandler( function( Mixed $key ) {
    // Something....
});
```
For `::setValHandler` method also has the same function.

## Constants
**Class**|**Constants**|**Type**|**Value**
:-----:|:-----:|:-----:|:-----:
Tree\Tree|SPACE|public|String
Tree\Tree|NONE|public|String
Tree\Tree|STRAIGHT_LINE|public|String
Tree\Tree|MIDDLE_LINE|public|String
Tree\Tree|LAST_LINE|public|String
Tree\Tree|LINE|public|Int
Tree\Tree|DOUBLE_POINT|public|String
Tree\Tree|POINT|public|Int


## License
All source code under [GNU General Public License](https://github.com/hxAri/Tree/blob/main/LICENSE)


![Faiba Avatar](https://raw.githubusercontent.com/hxAri/hxAri/main/assets/images/1653507345%3B50XUUPql.z.png)

# Faiba
Create a Tree structure using an Array or Object.
You want to create a tree structure like in the Command Line Interface?
Sans!... *Faiba* is the solution!.. It's really very simple and without the hassle!

In addition to using PHP, Faiba has also been made for the JavaScript version,
but now it only supports HTML display, for the next version maybe I will add a feature
so that the JavaScript version of Faiba can run on the Command Line Interface along with NodeJS.

<hr />

# Install
Install with Npm
```
npm install faiba
```
CDN via jsDelivr
```
https://cdn.jsdelivr.net/gh/hxAri/Faiba/dist/js/faiba.js
```

# Usage
This is just an example, you can implement it however you like later.
```html
<div class="main">
  <pre id="root"></pre>
</div>

<script type="text/javascript">
  
  window.addEventListener( "load", function() {
    Faiba.create({
      el: "#root",
      data: {
        self: {
          id: 160824,
          name: "hxAri",
          user: "hxari",
          info: {
            bio: "Everybody Needs A Programmer."
          }
        },
        you: []
      }
    });
  });
  
</script>
```
This will display a very beautiful tree structure inside the &lt;pre&gt; tag
```
├── self
│   ├── id
│   │   └── 160824
│   ├── name
│   │   └── hxAri
│   ├── user
│   │   └── hxari
│   └── info
│       └── bio
│           └── Everybody Needs A Programmer.
└── you
```

<hr />

# Install
Install with Composer
```
composer require hxari/phptree
```
Install with Wget
```
wget https://raw.githubusercontent.com/hxAri/Faiba/main/src/PHPTree/Tree.php
```
Install with Git
```
git clone https://github.com/hxAri/Faiba
```

Or you can also download it directly from [Github](https://github.com/hxAri/PHPTree/archive/refs/heads/main.zip) if you don't want to bother.

# Usage
Very simple usage.
```php

use Faiba\Faiba;

// If you use Composer.
require "vendor/autoload.php";

// If you use Git/ Download.
require "Faiba/Faiba.php";

// If you use Wget.
require "Faiba.php";

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
echo Faiba::create( $array );
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

# Methods
Explanation for method.<br/>

The `::create` method has three parameters which are:
```php
Faiba::create( Array $data, Int $start = 0, Int $flags = 0 )
```
Parameter `$data` is an array data that will be used to create a tree structure.<br/><br/>
The `$start` parameter is used to identify how many spaces will be used for the start.<br/><br/>
Meanwhile, the `$flags` parameter is used to identify whether to use a line or a dot to create the structure.<br/><br/>

The `::setKeyHandler` method has one parameter with `Callable` type.
This is quite useful when you want to color the key values ​​of your array elements.
```php

// Method.
Faiba::setKeyHandler( Callable $handler );

// Method Use.
Faiba::setKeyHandler( fn( Mixed $key ) => "\e[1;32m{$key}" );

// Or
Faiba::setKeyHandler( function( Mixed $key ) {
    // Something....
});
```
For `::setValHandler` method also has the same function.

# Constants
**Class**|**Constants**|**Type**|**Value**
:-----:|:-----:|:-----:|:-----:
Faiba\Faiba|SPACE|public|String
Faiba\Faiba|NONE|public|String
Faiba\Faiba|STRAIGHT_LINE|public|String
Faiba\Faiba|MIDDLE_LINE|public|String
Faiba\Faiba|LAST_LINE|public|String
Faiba\Faiba|LINE|public|Int
Faiba\Faiba|DOUBLE_POINT|public|String
Faiba\Faiba|POINT|public|Int


# License
All source code under [GNU General Public License](https://github.com/hxAri/Faiba/blob/main/LICENSE)

# Stylze

A simple styling library for jsx elements.

~ **Stylze has not been actively worked on in ages. My apologies... I might pick back up on it shortly. Stay tuned!** ~

## Installation

```
npm install stylze
```

or

```
yarn add stylze
```

## Example code
--------------------
```js
import React, { Component } from 'react';
import stylze from 'stylze';

class App extends Component {

  /* The eventHandler for 'myButton' below. */
  greet()  {
    console.log('Hello Kaycee!');
  }

  render() {

    // pre-defined styles for h1 elements.
    const h1 = stylze('h1-1-px', 'Hello world!');

    // You can also override the existing styles
    // with the optional third arg (styles override object).
    const h1 = stylze('h1-1-em', 'Hello world!',
      { color: '#333',
        backgroundColor: '#eee',
        fontSize: `${33}px`
      });

    /*
    You simply pass your eventHandler through the 'styles override object',
    as shown above on the h1 element.

    You have to use the property name 'eventHandler' so stylze can
    find the it. Stylze automatically adds everything else. Eazy Peazy...

    Once the button is clicked it will now log 'Hello Kaycee!' to the console.

    There are 3 sizes of buttons: button-1-sm, button-1-md, button-1-lg.
    */

    const myButton = stylze('button-1-lg', 'Click me', { 
      eventHandler: this.greet
    });

    return (
      <div className="App">
        <div className="SomeClassThatHandlesPositioning">
          { h1 }
          { myButton }
        </div>
      </div>
    );
  }
}

export default App;
```
## Pre-defined styles (So far)

### h1:

- h1-1-px
- h1-2-px
- h1-3-px

- h1-1-em
- h1-2-em
- h1-3-em

### button

- button-1-sm
- button-1-md
- button-1-lg
# Currency Input

Currency Input allows an easy input of currency formatted numbers based on the ECMAScript Internationalization API (
Intl.NumberFormat).

Built on [Vue Currency Input](https://github.com/dm4t2/vue-currency-input) and TypeScript

## Guide

To use Currency Input just import component<br/>
```import { CurrencyInput } from '../dist/currencyInput.min.js';```

Init class<br/>

```
const inputEl = document.getElementById('currency-input')

const currencyInput = new CurrencyInput(inputEl, {
    options: {
      locale: 'de-DE', //BCP 47 language tag
      currency: 'EUR' //ISO 4217 currency code
    }
  });
```

## Functions

```getValue()```<br/>

To get value from Currency Input use method<br/>
```currencyInput.getValue()```
it returns Object<br/>

```
{
    "number": 300,
    "formatted": "300 €"
}
```


```setValue(value)```<br/>
To set value use method<br/>
```currencyInput.setValue(value)```

## Options

List of options you can find here [Options](https://vue-currency-input-v1.netlify.app/config/#component)

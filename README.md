# Fiscal Year Nepal

This was created to find upcoming fiscal last date from input date for Nepal(B.S) i.e Asadh 1. This mainly occurs at either 15 or 16 of July in A.D.

The list containing corresponding year and day was manually collected using calender.

> Currently supports date only from 2011 to 2033 A.D

### Installation

```yarn add fiscal-year-nepal```

### Usage

```javascript
import fiscalCalculator from 'fiscal-year-nepal';

let upcomingFiscal = fiscalCalculator('2018-7-18');
console.log(upcomingFiscal);
```

```
2019-07-16
```

### Tests
You can view tests or play with it in RunKit from [here](https://runkit.com/sbimochan/fiscal-year-test)

## License

[MIT](LICENSE)
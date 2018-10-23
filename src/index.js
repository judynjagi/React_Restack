import numeral from 'numeral';
import './index.css';

const cost = numeral(1000).format('$0,0.00')

console.log(`The cost is ${cost}`) // eslint-disable-line  no-console

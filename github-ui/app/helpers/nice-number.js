import { helper } from '@ember/component/helper';
import numeral from 'npm:numeral';

numeral.locales.en.abbreviations = {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T'
};

export function niceNumber(params/*, hash*/) {
  const [value, format] = params;
  if (!format || value < 1000)
    return value;
  return numeral(value).format(format)
}

export default helper(niceNumber);

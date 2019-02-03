import {
  dateList
} from './dateList';
/**
 * @param {string} inputDate
 * input date should be in YYYY-MM-DD format A.D
 * @returns {string}
 */
export default function fiscalCalculator(inputDate) {
  /**
   * Only checking if it contains hyphen, first is 4 digit and a string
   * Should I use moment isValid? 🤔
   */
  if (inputDate.indexOf('-') === 4 && typeof inputDate === 'string') {
    return manipulateDate(inputDate);
  } else {
    throw new TypeError('Date is not in right format.');
  }
}

function manipulateDate(inputDate) {
  let splittedDate = {};
  const splittedIntDate = inputDate
    .split('-')
    .map(stringDate => parseInt(stringDate));

  splittedDate.year = splittedIntDate[0];
  splittedDate.month = splittedIntDate[1];
  splittedDate.day = splittedIntDate[2];
  const nextFiscalExpireDate = fiscalMachine(splittedDate);

  return nextFiscalExpireDate;
}

function fiscalMachine(splittedDate) {
  let fiscalYear;
  switch (true) {
    case splittedDate.month > 7:
      fiscalYear = splittedDate.year + 1;
      break;

    case splittedDate.month >= 7 &&
    splittedDate.day > dateList[splittedDate.year]:
      fiscalYear = splittedDate.year + 1;
      break;

    case splittedDate.month >= 7 &&
    splittedDate.day === dateList[splittedDate.year]:
      fiscalYear = splittedDate.year + 1;
      break;

    case splittedDate.month >= 7 &&
    splittedDate.day < dateList[splittedDate.year]:
      fiscalYear = splittedDate.year;
      break;

    default:
      fiscalYear = splittedDate.year;
      break;
  }
  const fiscalDay = dateList[fiscalYear];
  const nextFiscalExpireDate = `${fiscalYear}-07-${fiscalDay}`;

  return nextFiscalExpireDate;
}
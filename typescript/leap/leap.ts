function isLeapYear( year: number ):boolean {

    const isDivisibleBy = (num: number):boolean => year % num === 0;

    return isDivisibleBy(4) && !isDivisibleBy(100) || isDivisibleBy(400);
}

export default isLeapYear
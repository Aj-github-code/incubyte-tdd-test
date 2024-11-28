function add(param) {
    if(!param){
        return 0;
    }
    let numbers = param.toString();
    let delimiter = /,|\n/;
    const matchDelimiter = numbers.match(/^\/\/(.+)\n/);
    if (matchDelimiter) {
        delimiter = new RegExp(matchDelimiter[1]);
        numbers = numbers.slice(matchDelimiter[0]?.length);
    }
    const numArray = numbers.toString().split(delimiter).map((num) => parseInt(num, 10));

    const negativeNumbers = numArray.filter((num) => num < 0);
    if(negativeNumbers.length){
        return `Negative numbers not allowed: ${negativeNumbers.join(", ")}`;
        // throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`) // Throw not working
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}

export default add;
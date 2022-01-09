module.exports = function toReadable(number) {
    let length = number.toString().length;

    let index = number.toString().split('').map(Number);


    const singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const doubleDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    switch (length) {

        case 1:

            return singleDigit[index];

        case 2:

            return (index[0] < 2) ? doubleDigit[index[1]] : (index[1] == 0) ? tens[index[0]] : tens[index[0]] + ' ' + singleDigit[index[1]];


        case 3:

            return (index[1] == 0 && index[2] == 0) ? singleDigit[index[0]] + ' hundred' :

                (index[1] == 0) ? singleDigit[index[0]] + ' hundred ' + singleDigit[index[2]] :

                    (index[1] < 2) ? singleDigit[index[0]] + ' hundred ' + doubleDigit[index[2]] :

                        (index[2] == 0) ? singleDigit[index[0]] + ' hundred ' + tens[index[1]] :

                            singleDigit[index[0]] + ' hundred ' + tens[index[1]] + ' ' + singleDigit[index[2]];

    }

}

 export function convertToWords(number) {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const suffixes = ['', 'Thousand', 'Million', 'Billion'];

    if (number === 0) {
        return 'Zero';
    }

    const toWords = (number) => {
        let result = '';
        for (let i = 0; number > 0; i++) {
            if (number % 1000 !== 0) {
                result = `${helper(number % 1000)} ${suffixes[i]} ${result}`;
            }
            number = Math.floor(number / 1000);
        }
        return result.trim();
    };

    const helper = (number) => {
        if (number === 0) {
            return '';
        } else if (number < 10) {
            return ones[number];
        } else if (number < 20) {
            return teens[number - 10];
        } else if (number < 100) {
            return `${tens[Math.floor(number / 10)]} ${helper(number % 10)}`;
        } else {
            return `${ones[Math.floor(number / 100)]} Hundred ${helper(number % 100)}`;
        }
    };

    return `${toWords(number)} only.`;
}



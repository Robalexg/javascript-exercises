const palindromes = function (str) {
    let revStr = str.split("").reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

    let newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

    console.log(revStr)
    return revStr === newStr
};

// Do not edit below this line
module.exports = palindromes;

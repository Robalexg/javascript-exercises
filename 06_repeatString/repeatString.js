const repeatString = function(word,times) {
    let newword = ''

    if(times < 0){
        return 'ERROR'   
    } 
    
    for(let i = 0; i < times; i++){
        newword+= word
    }

    return newword
};

// Do not edit below this line
module.exports = repeatString;

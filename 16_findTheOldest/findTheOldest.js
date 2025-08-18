const findTheOldest = function(arr) {
    let blah =  arr
    .reduce((oldest,curPerson) => {
        if(curPerson.yearOfBirth && curPerson.yearOfDeath){
            let age = curPerson.yearOfDeath - curPerson.yearOfBirth

            if((oldest.yearOfDeath - oldest.yearOfBirth) < age){
                return curPerson
            }else{
                return oldest
            }
        }else{
            if(!curPerson.yearOfDeath){
                return oldest
            }else{
                return curPerson
            }
        }
    },{yearOfBirth:0, yearOfDeath:0})

    console.log(blah.name)
    return blah
};

// Do not edit below this line
module.exports = findTheOldest;

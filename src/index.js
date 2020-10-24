module.exports = function towelSort (matrix) {
    let result = [];
    let newNumbers = [];

    if(matrix === [] || matrix === undefined)
        return result;

    let length = matrix.length;
    
    for(let i = 0;i<length;i++){
        if(i % 2 === 0){
            matrix[i].forEach(function (num) {
                result.push(num);
            })
        }
        else{
            matrix[i].forEach(function (num) {
                newNumbers.push(num);
            })

            newNumbers.reverse().forEach(function (num) {
                result.push(num);
            });
        }

        newNumbers = [];
    }

    return result;
}




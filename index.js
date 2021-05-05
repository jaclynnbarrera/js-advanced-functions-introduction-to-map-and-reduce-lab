// Your code here
function mapToNegativize(sourceArray){
    let final = sourceArray.map(x => (0 - x))
    return final
}

function mapToNoChange(sourceArray){
    let final = sourceArray.map(x => x)
    return final
}

function mapToDouble(sourceArray){
    let final = sourceArray.map(x => x * 2)
    return final
}

function mapToSquare(sourceArray){
    let final = sourceArray.map(x => x ** 2)
    return final
}

function reduceToTotal(sourceArray, startingPoint=0){
    let final = sourceArray.reduce(function(result, item){
        return result + item
    }, startingPoint)
    return final
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    } 
    return false
}
const calcul = function(var1, var2){
    var1 = parseInt(var1)
    var2 = parseInt(var2)

    return Promise.resolve([var1, var2])
    .then(([var1, var2]) => {
        var result = var1 + var2
        if (result % 2 == 0) {
            return [result, var1, var2]
        }
        throw new Error("test")
    })
}

module.exports = { calcul }
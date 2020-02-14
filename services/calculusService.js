const calculusService = {
  sum: (operand1, operand2) => {
    return Promise.resolve([operand1, operand2])
      .then(([operand1, operand2]) => {
        return operand1 + operand2
      })
  }
}

module.exports = calculusService

const result = promiseFunction()
result
    .then((res) => console.log(`Промис ${typeof res === 'string' ? '' : 'НЕ'} работает ${typeof res === 'string' ? res : ''}`))
    .catch((e) => console.log(e))


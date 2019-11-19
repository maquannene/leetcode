const rf = (str) => {
    let currentInput = '';
    let inputTimes = 0;
    let result = '';
    str.split('').forEach((s, index) => {
        if (currentInput === s && index !== str.length - 1) {
            inputTimes = inputTimes + 1
            currentInput = s
        }
        else  {
            if (inputTimes < 3) {
                result = result + new Array(inputTimes + 2).join(currentInput)
            }
            if (inputTimes > 3) {
                result = result + new Array(inputTimes + 1 - 3).join(currentInput)
            }
            inputTimes = 1
            currentInput = s
        }
    })
    return result
}

let result = rf('abbbccccccc')
console.log(result);
result = rf('aaaaccc')
console.log(result);
result = rf('abaa')
console.log(result);

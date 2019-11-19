/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = nums.reduce((result, num, index) => {
        const value = result[`${num}`]
        if (value == null) {
            result[`${num}`] = `${index}`
        } else {
            result[`${num}`] = value + ',' + `${index}`
        }
        return result
    }, {})
    let result = []
    Object.keys(numsMap).find(key => {
        result = []
        const a = parseInt(key, 10)
        const b = target - a
        const sIndexs = numsMap[`${b}`]
        if (sIndexs != null) {
            const sIndexsArray = sIndexs.split(',').map(index => parseInt(index, 10))
            if (a === b) {
                if (sIndexsArray.length > 1) {
                    result = [parseInt(numsMap[`${key}`]), sIndexsArray[1]]
                    return true
                }
            } else {
                result = [parseInt(numsMap[`${key}`]), sIndexsArray[0]]
                return true
            }
        }
    })
    return result
};


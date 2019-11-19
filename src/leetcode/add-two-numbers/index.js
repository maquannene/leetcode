// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//
// 示例:
//
//     给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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


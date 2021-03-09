/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     let p = n, q = n
//     do{
//         p = getNext(p)
//         q = getNext(getNext(q))
//     }while(p !== q && q != 1) 

//     return q === 1
// };

var isHappy = function(n) {
    let map = {}
    while(n !== 1 && !map[n]) {
        map[n] = true
        n = getNext(n)
    }

    return n === 1

}
function getNext(n) {
    if(n === 1) return 1
    let sum = 0

    while(n!=0) {
        sum += Math.pow(n%10, 2)
        n = parseInt(n/10)
    } 
    return sum
}

//console.log(isHappy(19))

// @lc code=end




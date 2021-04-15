/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    if(a > b) [a, b] = [b, a]
    if(a > c) [a, c] = [c, a]
    if(b > c) [b, c] = [c, b]
    
    var ans = 0
    //step1
    var cnt1 = Math.min(c-b, a)
    a -= cnt1; 
    c -= cnt1;
    ans += cnt1

    if(a != 0) {
        if(a % 2 !== 0) a--
        b -= a/2
        c -= a/2
        ans += a
    }

    ans += b

    return ans

};

var getNumberOfBacklogOrders = function(orders) {
    let mod = 1000000007; 
    let buy = new MaxPriorityQueue({priority:(bid) => bid.price});//采购 
    let sell = new MinPriorityQueue({priority:(bid) => bid.price});//销售
    console.log(buy)
};
// @lc code=end

getNumberOfBacklogOrders([[10,5,0],[15,2,1],[25,1,1],[30,4,0]])


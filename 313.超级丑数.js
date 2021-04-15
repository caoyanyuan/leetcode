/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let data = [1],
        p_len = primes.length,
        p = new Array(p_len).fill(0),
        ans = 1
    
    while(data.length !== n) {
        ans = primes[0] * data[p[0]]

        for(let i=1; i<p_len; ++i) {
            ans = Math.min(ans, primes[i] * data[p[i]] )
        }
        for(let i=0; i<p_len; ++i) {
            if (primes[i] * data[p[i]] === ans) p[i]++
        }
        data.push(ans)
    }

    return ans
};

var nthSuperUglyNumber = function(n, primes) {
    let data = [1],
        p_len = primes.length,
        p = new Array(p_len).fill(0),
        min = 1, arr = []
    
    for(let i = 1; i<n; i++){
        min = data[p[0]]* primes[0]

        primes.map((prime,index) => {
            min = Math.min(min, data[p[index]]* prime)
        } )

        primes.forEach((prime, index) => {
            if(data[p[index]]* prime === min) {
                p[index]++
            }
        })
        data.push(min)
    }
    return min
};
// @lc code=end

nthSuperUglyNumber(12, [2,7, 13,19])
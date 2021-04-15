/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 function Heap(arr=[], isLess) {
    this.data = []
    
    this.comprator = (a, b) => {
        if(isLess) {
            return a - b 
        }else{
            return b - a 
        }
    }
    arr.map(item => this.push(item))
}

Heap.prototype.top = function() {
    return this.data[0]
}
Heap.prototype.size = function() {
    return this.data.length
}
Heap.prototype.push = function(val) {
    this.data[this.size()] = val

    let data = this.data, 
        cIndex = this.size() - 1

    while(cIndex > 0 ) {
        let pIndex = parseInt((cIndex - 1)/2)
        if(this.comprator(data[ pIndex ], val) > 0) {
            
            this.swap( cIndex, pIndex )
            cIndex = pIndex
        }else{
            break;
        }
       
    }
}

Heap.prototype.pop = function() {
    let ret = this.data[0]
   
    if(ret === undefined) return null

    this.data[0] = this.data[ this.size()-1 ]
    this.data.splice(this.size()-1, 1)

    console.log(this.data)

    let cIndex = 0, 
        data = this.data

    while(cIndex * 2 + 1 <= this.size()) {
        let findIndex = cIndex,
            lIndex = cIndex * 2 + 1,
            rIndex = cIndex * 2 + 2

        if( lIndex < this.size() && this.comprator(data[findIndex], data[lIndex]) > 0 ) findIndex = lIndex
        if( rIndex < this.size() && this.comprator(data[findIndex], data[rIndex]) > 0 ) findIndex = rIndex

        if(findIndex === cIndex) break
        
        this.swap(findIndex, cIndex)
        cIndex = findIndex
    }

    return ret
}

Heap.prototype.swap = function(index1, index2) {
    let temp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = temp
}

var nthUglyNumber = function(n) {
    let dp = [1], p2 = 0, p3 = 0, p5 = 0
    
    for(let i=1; i< n; i++){
        dp[i] = Math.min(dp[p2] * 2, Math.min(dp[p3] * 3, dp[p5] * 5))
        
        if(dp[i] === dp[p2] * 2) p2++
        if(dp[i] === dp[p3] * 3) p3++
        if(dp[i] === dp[p5] * 5) p5++
    }
    
    return dp[n - 1]
};

// @lc code=end

nthUglyNumber(10)
/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

function Heap(arr, isLess) {
    this.data = []
    this.cnt = 0
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
Heap.prototype.push = function(val) {
    this.data[this.cnt++] = val

    let data = this.data, 
        cIndex = this.cnt-1

    while(cIndex && this.comprator(data[ parseInt((cIndex - 1)/2) ]), val) {
        this.swap( cIndex, parseInt((cIndex - 1)/2) )
        cIndex = parseInt((cIndex - 1)/2)
    }
}

Heap.prototype.pop = function() {

    let ret = this.data[0]
    if(!ret) return null

    this.data[0] = this.data[--this.cnt]
    this.data.splice(this.cnt, 1)

    let cIndex = 0, 
        data = this.data

    while(cIndex * 2 + 1 <= this.cnt) {
        let maxIndex = cIndex,
            lIndex = cIndex * 2 + 1,
            rIndex = cIndex * 2 + 2

        if(this.comprator(data[cIndex], data[lIndex])) maxIndex = lIndex

        if( rIndex <= this.cnt &&  
            this.comprator(data[cIndex], data[rIndex]) && 
            this.comprator(data[lIndex], data[rIndex])
        )   maxIndex = rIndex

        if(maxIndex === cIndex) break
        
        this.swap(maxIndex, cIndex)
        cIndex = maxIndex
    }

    return ret
}

Heap.prototype.swap = function(index1, index2) {
    console.log(index1, index2)
    let temp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = temp
}


var lastStoneWeight = function(stones) {
    if(stones.length <= 1) return stones[0] || 0

    let heap = new Heap(stones)
    
   
    while(heap.cnt > 1) {
        let x = heap.pop()

        let y = heap.pop()

        if(x-y > 0) {
            heap.push(x -y)
        }
    }
    if(heap.cnt === 0) return 0
    else return heap.top()
}; 

var getLeastNumbers = function(arr, k) {
    let heap = new Heap(arr, true), 
        ret = []
    
    console.log(heap)
    return 

    while(ret.length < k) {
        ret.push(heap.pop())
    }
    console.log(ret)
    return ret
};

getLeastNumbers([11,2,5,1,6], 2)

// @lc code=end


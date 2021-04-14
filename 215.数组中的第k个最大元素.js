/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
function Heap(arr, isLess) {
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

    let cIndex = 0, 
        data = this.data

    while(cIndex * 2 + 1 <= this.size()) {
        let findIndex = cIndex,
            lIndex = cIndex * 2 + 1,
            rIndex = cIndex * 2 + 2

        if( lIndex < this.size() && this.comprator(data[findIndex], data[lIndex]) > 0) findIndex = lIndex
        if( rIndex < this.size() && this.comprator(data[findIndex], data[rIndex]) > 0 ) findIndex = rIndex

        if(findIndex === cIndex) break

        console.log(data[findIndex], data[lIndex])
        
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

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //创建一个小顶堆
    let heap = new Heap(nums, true)

    nums.forEach(num => {
        if(heap.size() > k) heap.pop() 
    })
    return heap.top()
};
// @lc code=end
let num = [3,2,1,5,6,4] 
findKthLargest(num, 2)

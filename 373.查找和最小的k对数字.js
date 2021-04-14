/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */
function Heap(arr = [], isLess) {
    this.data = []
    
    this.comprator = (a, b) => {
        if(isLess) {
            return a[0]+a[1] - b[0]-b[1]
        }else{
            return b[0]+b[1] - a[0]-a[1] 
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let ret = new Heap()
    nums1.forEach(x => {
        nums2.forEach(y => {
            if(ret.size() < k || ( x+y ) < (ret.top()[0] + ret.top()[1])) {
                ret.push([x, y])
                if(ret.size() > k) {
                    ret.pop()
                }
            }
        })
    })
    
    return ret.data.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]))
};
// @lc code=end
let nums1 = [1,7,11], nums2 = [2,4,6], k = 3
let m = kSmallestPairs(nums1, nums2, 3)
console.log(m)


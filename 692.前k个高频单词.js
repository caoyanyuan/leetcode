/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 function Heap(arr = [], isLess) {
    this.data = []
    
    this.comprator = (a, b) => {
        if(isLess) {
            return a - b > 0
        }else{
            return b - a > 0
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
        if(this.comprator(data[ pIndex ], val)) {
            
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

        if( lIndex < this.size() && this.comprator(data[findIndex], data[lIndex]) ) findIndex = lIndex
        if( rIndex < this.size() && this.comprator(data[findIndex], data[rIndex]) ) findIndex = rIndex

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



var topKFrequent = function(words, k) {
    let freq = new Map()
    words.forEach(word => {
        freq.has(word) ? freq.set(word, freq.get(word)+1) : freq.set(word, 1)
    })
    let heap = new Heap([])
    heap.comprator = (a, b) => {
        if(freq.get(a) - freq.get(b)) { return freq.get(a) > freq.get(b) }
        
        return a < b
    }
    
    for(let [key] of freq) {
        heap.push(key)
        if(heap.size() > k) heap.pop()
    }
    console.log(heap)

    heap.data.sort((a, b) => {
        if(freq.get(b) - freq.get(a)) return freq.get(b) - freq.get(a) 
        
        return a > b ? 1 : -1
    })
    
    console.log(heap.data)

    return heap.data
};

let words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]

word2 = ["i", "love", "leetcode", "i", "love", "coding"]

word3 = [ 'a','aa','aaa' ]

topKFrequent(word2, 2)

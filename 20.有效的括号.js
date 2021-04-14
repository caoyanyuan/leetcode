/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [],
        map = {
            ')':'(',
            "}": '{',
            ']': '['
        }
    while(s.length) {
        let str = s.substring(0,1)
       
           
        switch(str){
            case '(': 
                arr.push('(');
                break;
            case "{":
                arr.push('{');
                break;
            case "[":
                arr.push('[')
                break;
            default:
                //console.log(arr.pop() !== map[str], str)
                let last = arr.pop()
                
                if(last !== map[str]){
                   
                    return false
                }
                break
        }
        s = s.substring(1)
           
    }

    return arr.length==0
};
// @lc code=end

console.log(isValid('({{]})'))


const strings = ["leetcode", "leet", "leeds", "leed"];
const prefix = longestCommonPrefix(strings);
console.log(prefix);  // Output: "lee"
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") {
          return "";
        }
      }
    }
    
    return prefix;
  }
 
  
  
  
  
  
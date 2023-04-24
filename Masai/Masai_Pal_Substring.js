let S = 'thiscarisgood';
let res = masaiPalSubString(S);
console.log(res);

function masaiPalSubString(S){
    let n = S.length;
    let maxLength = 1;
    let start = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (S[i + k] != S[j - k])
                    flag = 0;
            if (flag!==0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    MasaiPalindromicSubstring(S, start, start + maxLength - 1);
    return maxLength;
}
function MasaiPalindromicSubstring(str,low,high)
{
    var count = 0;
    for (let i = low; i <= high; ++i)
       if(str[i]){
           count++;
       }
       console.log(count);
}
//https://oj.masaischool.com/contest/3267/problem/01

function alanFrequency(N, string) {
    //write code here
    var str = string.split("");
    var temp;
      for(var i=0;i<str.length;i++)
      {
          for(var j=i+1;j<str.length;j++)
          {
              if(str[i]>str[j])
              {
                  temp = str[i];
                  str[i] = str[j];
                  str[j] = temp;
              }
          }
      }
      // console.log(str)
      var obj = {};
      for(var i=0;i<str.length;i++)
      {
          if(obj[str[i]]===undefined)
          {
              obj[str[i]]=1;
          }
          else
          {
              obj[str[i]]++;
          }
      }
      for(var key in obj)
      {
          console.log(key+"-"+obj[key]);
      }
  }
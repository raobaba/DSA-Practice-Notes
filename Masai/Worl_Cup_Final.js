let NzScore = 246;
let NzSuperOver = 15;
let NzFours = 21;
let EngFours = 16;
let EngScore = 246;
let EngSuperOver = 15;

function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    //Write code here
      var a = NzScore;
      var b = NzSuperOver;
      var c = NzFours;
      var d = EngScore;
      var e = EngSuperOver;
      var f = EngFours;
      if(a>d)
      console.log("New Zealand");
      else if(a<d)
      console.log("England");
      else if(b>e)
      console.log("New Zealand");
      else if(b<e)
      console.log("England");
      else if(c>f)
      console.log("New Zealand");
      else if(c<f)
      console.log("England");
}
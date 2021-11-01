
const huruf = [0,'D', 'U','M','B','W','A','Y','S','I','D','U','J','I','A','N']
var x=0
function renderPyramid(n) {
    for (var i = 0; i < n; i++) {
      var str = '';
      for (var j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (var k = 1; k <= (i+1); k++) {
          x++
        str = str + huruf[x]+(" ");
      }
      console.log(str);
    }
  }
  renderPyramid(5)


module.exports = function check(str, bracketsConfig) {
var a = str.split("");
var al = a.length;
for (i=0; i<al;i++) {
  for (j=0; j<al;j++) {
    if ((a[j]==='(')&&(a[j+1]===')')) a.splice(j,2);
  }
}
 if (a.length===0) return(1)
  else return(0);
}
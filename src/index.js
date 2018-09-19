module.exports = function check(str, bracketsConfig) {
var a = str.split("");
var al = a.length;
for (i=0; i<(2*al);i++) {
  for (j=0; j<al;j++) {
    if (((a[j]==='(')&&(a[j+1]===')'))
      ||((a[j]==='[')&&(a[j+1]===']'))
      ||((a[j]==='{')&&(a[j+1]==='}'))
      ||((a[j]==='1')&&(a[j+1]==='2'))
      ||((a[j]==='3')&&(a[j+1]==='4'))
      ||((a[j]==='5')&&(a[j+1]==='6'))
      ||((a[j]==='7')&&(a[j+1]==='7'))
      ||((a[j]==='8')&&(a[j+1]==='8'))
      ||((a[j]==='|')&&(a[j+1]==='|'))) a.splice(j,2);
  }
}

 if (a.length===0) return(1)
  else return(0);
}
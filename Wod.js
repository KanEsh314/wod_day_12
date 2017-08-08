function encrylet(str)
{
  var a = 3;
  var sb;
  var dc;
  var en;
  var ar =[];
  ar = str.split("");
  //document.write(ar[i]);
  for(var i = 0; i < ar.length;i++)
  {
    en = ar[i].charCodeAt(0);
    sb = en+a;
    dc = String.fromCharCode(sb);
    document.write(dc);
  }
}
encrylet("Kanesh");
function longestword(str)
{
  var str1=str.split(' ')// here there must be a space between quotations,then only we get the output
  var lword=''
  var llength=0
  for(let nword of str1)
  {
    if (nword.length>llength)
    {
    lword=nword
    llength=nword.length
    }
  }
  console.log(lword)
  console.log(llength)
}
longestword('i am an indian')
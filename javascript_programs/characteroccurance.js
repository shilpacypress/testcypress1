function charoccurance(str){
    charcount={}
    for(let char of str){
        charcount[char]==(charcount[char]||0)+1
    }
    console.log(charcount)
}
charoccurance('hheeoollwinnnn')
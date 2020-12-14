////////////Exercise 1////////////
const printStars = function(num) {
    let res = ''
    for (let i = 1; i <= num; i++) {
        res += '*'
        console.log(res)
    }
}

////////////Exercise 2////////////
const printBackwardsStars = function(num) {
    let res = ''
    while(num > 0) {
        if(res.length < num){
            res += '*'
        }
        else{
            console.log(res)
            num--
            res = ''
        }
    }
}

////////////Exercise 3////////////
const printStarSeries = function(num,count){
    for(let i = 0; i < num; i++){
        printStars(num)
        printBackwardsStars(num-1)
    }
}

////////////Exercise 4////////////
const reverse = function(str){
    let reversed = ''
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    console.log(reversed)
  }
  
 ////////////Exercise 5////////////
 const isPalindrom = function(str){
     str = str.replace(/\s/g, '').toLowerCase()
     let n = str.length
     for(let i=0; i < n; i++){
       if(str[i] !== str[n-i-1]){
            return false
        }
     }
     return true
 }

 
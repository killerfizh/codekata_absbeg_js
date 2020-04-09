// using Nodejs
const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});

function Leap_year(s){

    if (s%4 === 0){

        if (s%100 === 0){

            if (s%400 === 0){
                return true
            }
            else{
                return false
            }
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}

ip.on('line', (ans)=> {console.log(Leap_year(ans))})


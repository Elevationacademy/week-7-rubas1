class MinStack{
    constructor(){
        this.stack = []
        this.length = 0
        this.minVal = 'undef'
    }

    push(x){
        if(this.minVal === 'undef'){
            this.minVal = x
        }
        else{
            if(x < this.minVal){
                this.minVal = x
            }
        }
        this.stack.unshift(x)
        this.length++
    }

    isEmpty(){
        if(this.length === 0){
            return true
        }
        else{
            return false
        }
    }

    peek(){
        return this.stack[0]
    }

    pop(){
        if(this.length === 0){
            return "Empty Stack"
        }
        else{
            let x = this.stack[0]
            this.stack.shift()
            this.length--
            if(this.length === 0){
                this.minVal = "undef"
            }
            else{
                this.minVal = this.stack[0]
                for(let i=0; i < this.length; i++){
                    if(this.minVal > this.stack[i]){
                    this.minVal = this.stack[i]
                    }
                }
            }
            return x
        }
    }

    print(){
        for(let i=0; i < this.length; i++){
            console.log(this.stack[i])
        }
    }

    getMin(){
        if(this.minVal === "undef"){
            return "Empty Stack"
        }
        else{
            return this.minVal
        }
    }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19
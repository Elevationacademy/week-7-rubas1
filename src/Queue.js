class Queue{
    constructor(){
        this.queue = []
        this.length = 0
    }

    enqueue(x){
        this.queue.push(x)
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
        return this.queue[0]
    }

    dequeue(){
        if(this.isEmpty){
            return "Empty Queue"
        }
        else{
            let x = this.queue[0]
            this.queue.splice(0,1)
            this.length--
            return x
        }
    }

    print(){
        for(let i=0; i < this.length; i++){
            console.log(this.queue[i])
        }
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true
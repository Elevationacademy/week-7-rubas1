class uniqueStuff{
    constructor(){
        this.items = []
        this.length = 0
        this.obj = {}
    }
    add(item){
        if(!this.exists(item)) {
            this.items[this.length] = item
            this.length++
            this.obj[item] = 1
        }
    }

    showAll() {
        console.log(this.items)
    }

    exists(item) {
        if(this.obj[item]){
            return true
        }
        else{
            return false
        }
    }

    get(index) {
        if(index <= (this.length - 1)){
            return this.items[index]
        } 
        else {
            return -1
        }
    }
}
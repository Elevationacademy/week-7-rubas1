class BSNode {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(newVal){
        if (!this.value){
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild){
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild){
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value){
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(node, value){ 
        if(node === null) 
            return false; 
    
        else if(value < node.value) 
            return this.findNode(node.leftChild, value); 

        else if(value > node.value) 
            return this.findNode(node.rightChild, value); 
        else
            return true; 
    } 

    findCommonParent(root, val1, val2) {
        if(!root) {
            return null
        } else if(root.value === val1 || root.value === val2) {
            return root
        }
        let leftCommon = this.findCommonParent(root.leftChild, val1, val2)
        let rightCommon = this.findCommonParent(root.rightChild, val1, val2)
        if(leftCommon && rightCommon) {
            return root
        } 
        else {
            return leftCommon ? leftCommon : rightCommon
        }
    }

    removeNode(val, node){
        return !(this.removeAux(node, val) === false);
    }

    removeAux(root, val){
        if (root === null){
             return false;
        }
        if (val < root.value){
           root.leftChild = this.removeAux(root.leftChild, val);
           return root;
        } 
        else if (val > root.value){
           root.rightChild = this.removeAux(root.rightChild, val);
           return root;
        } 
        else {
           if (root.leftChild === null && root.rightChild === null){
              root = null;
              return root;
           }
           if (root.leftChild === null) return root.rightChild;
           if (root.rightChild === null) return root.leftChild;
           let currNode = root.rightChild;
           while (currNode.leftChild !== null) {
              currNode = currNode.leftChild;
           }
           root.value = currNode.value;
           root.rightChild = this.removeAux(root.rightChild, currNode.value);
           return root;
        }
    }
}

const letters =[4, 30, 12, 14, 2, 8, 1]
let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))

console.log(bSTree)
bSTree.removeNode(4)
console.log("after removing")
console.log(bSTree)

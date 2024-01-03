const Node = require('./node')

class LinkedList {
  constructor(head = null, size = 0){
    this.head = head
    this.size = size
  }

  prepend(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    } else {
      const current = this.head
      this.head = newNode
      this.head.nextNode = current
    }
    this.size++
  }

  size(){
    return this.size
  }

  head(){
    return this.head
  }

  tail(){
    if(!this.head) return null

    let pointer = this.head

    while(pointer.nextNode !== null){
      pointer = pointer.nextNode
    }

    return pointer
  }

  append(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    } else {
      let pointer = this.tail()
      pointer.nextNode = newNode
    }
    this.size++
  }

  at(index){
    let i = 0
    let current = this.head

    while (i < index){
      current = current.nextNode
      i++
    }

    return current
  }

  pop(){
    let current = this.head

    while(current.nextNode){
      if(!current.nextNode.nextNode){
        current.nextNode = null
        
      } else {
        current = current.nextNode
      }
      
    }
  }

  contain(value){
    let current = this.head

    while (current){
      if(current.value == value){
        return true
      } else {
        current = current.nextNode
      }
    }
    return false
  }

  find(value){
    let i = 0
    let current = this.head
    let found = false

    while(!found && i < this.size){
      if (current.value == value){
        found = true
        return i
      } else {
        current = current.nextNode
        i++
      }
    }

    return null
  }

  toString(){
    let str = ''
    let current = this.head

    if(!current) return null

    while(current){
      str += `( ${current.value} ) -> `
      current = current.nextNode
    }

    return str + "null"
  }

  insertAt(value,index){
    if (!index) {
      this.prepend(value)
      return
    }

    const newNode = new Node(value)

    let i = 1
    let prev = this.head
    let next = prev.nextNode

    while(i < index){
      prev = prev.nextNode
      i++
    }

    prev.nextNode = newNode
    newNode.nextNode = next
  }

  removeAt(index){
    if(!this.head) return null

    //index Out of Range
    if(index > this.size - 1 && index >= 0) {
      console.log('Index Out of Range')
      return
    }

    //case of removing the first index (this.head)
    if(!index){
      this.head = this.head.nextNode
      return
    }

    const prePointer = this.at(index - 1);
    console.log(prePointer)
    prePointer.nextNode = prePointer.nextNode.nextNode;
  

    this.size--
  }
}

const list = new LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.prepend(10);
list.prepend(9);
list.prepend(8);

list.insertAt(3, 1);
list.pop();
list.removeAt(4);

console.log(list.size);
console.log(list.head);
console.log(list.at(1));
console.log(list.find(10));
console.log(list.tail());
console.log(list.toString());
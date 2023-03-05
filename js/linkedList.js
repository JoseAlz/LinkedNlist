//import Node from "./nodo.js";

const linkedList = () => {
  let HEAD = null;
  let length = 0;
  let ERROR = "Empty List!";

  // adds a new node at end of linked list
  const append = (value) => {
    let newNode = Node(value);
    if (HEAD === null) {
      HEAD = newNode;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    length++;
    return newNode.value;
  };

  // adds a new node at the start of linked list
  const prepend = (value) => {
    let newNode = Node(value);
    if (HEAD === null) {
      HEAD = newNode;
    } else {
      let temp = HEAD;
      HEAD = newNode;
      HEAD.nextNode = temp;
    }
    length++;
    return newNode.value;
  };

  // return the total size of list
  const size = () => (!length ? ERROR : `size: ${length}`);

  // return the first node of list
  const head = () => (!HEAD ? ERROR : `HEAD: ${HEAD.value}`);

  // return the last node of list
  const tail = () => {
    if (!HEAD) {
      return ERROR;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return `TAIL: ${pointer.value}`;
    }
  };

  // return the node at specific index of list
  const at = (index) => {
    if (!HEAD) {
      return ERROR;
    } else {
      let pointer = HEAD;
      for (let i = 1; i < index; i++) {
        pointer = pointer.nextNode;
      }
      return pointer.value;
    }
  };

  // remove the last element from list
  const pop = () => {
    if (!HEAD) {
      return ERROR;
    } else if (HEAD.nextNode === null) {
      HEAD = null;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = null;
      length--;
    }
    return "POP!";
  };

  // return true if the passed in value is in the list and otherwise returns false
  const contains = (value) => {
    if (!HEAD) {
      return ERROR;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        if (pointer.value == value) return true;
        pointer = pointer.nextNode;
      }
      if (pointer.value == value) return true;
      return false;
    }
  };

  // return the index of the node containing value, or null if not found
  const find = (value) => {
    if (!HEAD) {
      return ERROR;
    } else {
      let index = 1;
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        if (pointer.value == value) {
          return index;
        } else {
          pointer = pointer.nextNode;
          index++;
        }
      }
      if (pointer.value == value) return index;
      return null;
    }
  };

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console
  // e.g.  ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let string = "";
    if (!HEAD) {
      return ERROR;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        string += `(${pointer.value}) -> `;
        pointer = pointer.nextNode;
      }
      string += `(${pointer.value}) -> NULL`;
    }
    return string;
  };

  // inserts a new node with provided value at given index
  const insertAt = (value, index) => {
    let newNode = Node(value);
    if (!HEAD) return ERROR;
    if (index > length) return "Index does not exist!";
    let pointer = HEAD;
    for (let i = 1; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    let next = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = next;
    length++;
    return `INSERT ${value} AT ${index}`;
  };

  // remove a node at given index
  const removeAt = (index) => {
    if (!HEAD) return ERROR;
    if (index > length) return "Index does not exist!";
    let pointer = HEAD;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = pointer.nextNode.nextNode;
    length--;
    return `REMOVE NODE AT ${index}`;
  };
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

let list = linkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.append(6));
console.log(list.append(20));
console.log(list.append(55));
console.log(list.append(10));
console.log(list.prepend(5));
console.log(list.head());
console.log(list.tail());
console.log(list.size());
console.log(list.pop());
console.log(list.size());
console.log(list.contains(6));
console.log(list.find(6));
console.log(list.toString());
console.log(list.insertAt(9, 5));
console.log(list.removeAt(5));

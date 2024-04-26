// Definition of single node element
class LinkedNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Linked list definition
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	// Add a node at the beginning of the list
	prepend(value) {
		const node = new LinkedNode(value);

		// Adding a node to the start when the list is empty
		if (this.isEmpty()) {
			this.head = node;
		}
		// Adding a node to the start of a non-empty list
		else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	append(value) {
		const node = new LinkedNode(value);

		// Adding a node when the list is empty
		if (this.isEmpty() || this.head === null) {
			this.head = node;
		}
		// Adding a node to the end of a non-empty list
		else {
			let prev = this.head;
			while (prev.next) {
				prev = prev.next;
			}
			prev.next = node;
		}
		this.size++;
	}

	// Printing the list content
	print() {
		// Check if list is empty
		if (this.isEmpty()) {
			console.log("List is empty");
		}
		// Lis is not emtpy, print its content
		else {
			let curr = this.head;
			let listElements = "";
			while (curr) {
				listElements += `${curr.value} `;
				curr = curr.next;
			}
			console.log(listElements);
		}
	}
}

// Declaring new LinkedList Object
const list = new LinkedList();

// Testing functionality
console.log(`List is empty? ${list.isEmpty()}`); // "List is empty? true"
console.log(`List size: ${list.getSize()}`); // "List size: 0"

// Testing prepend
console.time("prepend");
list.print(); // "list is empty"
list.prepend(10);
list.print(); // "10"
list.prepend(20);
list.prepend(30);
list.print(); // "30 20 10"
console.timeEnd("prepend"); // Prepend has O(1) time complexity

// Declaring new LinkedList Object
const list2 = new LinkedList();

console.log("--------------");

// Testing functionality
console.log(`List2 is empty? ${list2.isEmpty()}`); // "List2 is empty? true"
console.log(`List2 size: ${list2.getSize()}`); // "List2 size: 0"

// Testing append
console.time("append");
list2.print(); // "list2 is empty"
list2.append(10);
list2.print(); // "10"
list2.append(20);
list2.append(30);
list2.print(); // "10 20 30"
console.timeEnd("append"); // Right now append has O(n) time complexity (a tail pointer can be added to make it O(1))

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

	// Check if list is empty
	isEmpty() {
		return this.size === 0;
	}

	// Get list size
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

	// Append a node at the end of the list - O(n) solution
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

	// Insert a node at index position
	insert(value, index) {
		// Check if index goes out-of-bounds
		if (index < 0 || index > this.size) {
			return -1;
		}

		// Check if insertion has to happen at index 0 -> use append instead
		if (index === 0) {
			this.prepend(value);
		}
		// Index is > 0 and < this.size
		else {
			const node = new LinkedNode(value);
			let prev = this.head;
			for (let ii = 0; ii < index - 1; ii++) {
				prev = prev.next;
			}
			node.next = prev.next;
			prev.next = node;
			this.size++;
			return this.size;
		}
	}

	// Print the list content
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

// ---- Testing functionality ----

// Declaring new LinkedList Object
const list = new LinkedList();

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

// Declaring new LinkedList Object
const list3 = new LinkedList();

console.log("--------------");

console.log(`list3 is empty? ${list3.isEmpty()}`); // "list3 is empty? true"
console.log(`list3 size: ${list3.getSize()}`); // "list3 size: 0"

// Testing insert
list3.print(); // "list3 is empty"
list3.append(20);
list3.append(30);
list3.print(); // "20 30"
list3.insert(10, 0); // "append"
console.log(list3.insert(10, -3)); // "-1"
console.log(list3.insert(10, 10)); // "-1"
console.time("insert");
list3.insert(25, 2);
list3.print(); // "10 20 25 30"
console.timeEnd("insert"); // Index has O(1) time complexity

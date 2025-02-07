# **JavaScript Functional and Object-Oriented Programming Demonstrations**

This script showcases various JavaScript functionalities, including array manipulation, object cloning and merging, book filtering, and a simple slot machine simulation.

### **1. Array Operations**
The script defines utility functions to manipulate arrays:
- `head()`: Returns the first element of an array.
- `tail()`: Returns all elements except the first.
- `init()`: Returns all elements except the last.
- `last()`: Returns the last element.

### **2. Concatenation**
- `concat()`: Merges two arrays using the spread operator.
- `concatMultiple()`: Merges multiple arrays into one.

### **3. Object Cloning and Merging**
- `clone()`: Creates a shallow copy of an object.
- `merge()`: Merges two objects, giving precedence to the second object’s properties.
- `useCloneInMerge()`: Uses cloning before merging to ensure objects remain independent.

### **4. Book Reading Checker**
- `isBookRead()`: Checks whether a given book title has been marked as read in an array of book objects.
- This exercise also done in typescript.

### **5. Slot Machine Simulation**
- Implements a `SlothMachine` class that mimics a slot machine.
- `play()`: Simulates pulling the slot machine lever, incrementing a coin count and generating random boolean values.
- If all values are `true`, the user wins and the coin count resets.
- Otherwise, the user is prompted to try again.

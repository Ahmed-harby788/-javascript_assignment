console.group("Group 1");
console.log("Message one");
console.log("Message two");
    console.groupCollapsed("Child Group")
    console.log("Message one");
    console.log("Message two");
        console.groupCollapsed("Grand Child Group")
        console.log("Message one");
        console.log("Message two");
        console.groupEnd()
    console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Message one");
console.log("Message two");
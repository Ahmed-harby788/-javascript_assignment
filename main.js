function checkStatus(a, b, c) {
    let name;
    let age;
    let status;
    if(typeof a === "string"){
        name = a
    }else if(typeof a === "number"){
        age = a;
    }else{
        if(a === true){
            status = "You Are Available For Hire"
        }else{
            status = "You Are Not Available For Hire"
        }
    }
    if(typeof b === "string"){
        name = b
    }else if(typeof b === "number"){
        age = b;
    }else{
        if(b === true){
            status = "You Are Available For Hire"
        }else{
            status = "You Are Not Available For Hire"
        } 
    }
    if(typeof c === "string"){
        name = c
    }else if(typeof c === "number"){
        age = c;
    }else{
        if(c === true){
            status = "You Are Available For Hire"
        }else{
            status = "You Are Not Available For Hire"
        } 
    }
    document.write("<div>")
    document.write(`<p> Hello ${name}, Your Age Is ${age}, ${status} <p>`)
    document.write("</div>")
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
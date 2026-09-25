let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];

if(browsers == "edge") {
    alert("You've got the Edge!");
} else if (browsers == "Chrome" 
    || browsers == "Firefox"
    || browsers == "Safari"
    || browsers == "Opera"){
        alert("Okay we support these browsers too");
} else {
alert("We hope this page looks ok!")
}


let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];

if (browsers == "edge") {
    alert("You've got the Edge!");
} else if (browsers == "Chrome"
    || browsers == "Firefox"
    || browsers == "Safari"
    || browsers == "Opera") {
        alert("Okay we support these browsers too");
} else {
    alert("We hope this page loojs ok!");
}

switch (browsers) {
    case "edge":
        alert("You've got the Edge!");
        break;

    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("okay we support these browsers too!");
        break;
    
    default:
        alert("We hope this page looks ok!");
}

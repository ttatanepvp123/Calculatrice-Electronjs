function addInScreen(string) {
    var screen = document.getElementById("screen");
    screen.value += string;
}

function returner(){
    var screen = document.getElementById("screen");
    string = screen.value;
    string = string.split(' ');
    var result = 0;
    for (let index = 0; index < string.length; index++) {
        if(index == 0){
            result = parseFloat(string[0]);
        } else if (string[index] == '+') {
            result += parseFloat(string[index + 1]);
        } else if (string[index] == '-') {
            result -= parseFloat(string[index + 1]);
        } else if (string[index] == '*') {
            result = result * parseFloat(string[index + 1]);
        } else if (string[index] == 'x') {
            result = result * parseFloat(string[index + 1]);
        } else if (string[index] == 'X') {
            result = result * parseFloat(string[index + 1]);
        } else if (string[index] == '/') {
            result = result / parseFloat(string[index + 1]);
        } else if (string[index] == '√') {
            result = Math.sqrt(result);
        }
    }
    string = result.toString();
    screen.value = string.replace("NaN", "ERROR");;
}

function clearScreen(){
    var screen = document.getElementById("screen");
    screen.value = "";
}
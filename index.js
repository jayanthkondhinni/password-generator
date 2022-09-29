const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function genbtn(){
    let pass1=" "
    let pass2 = " "
    for (let i=0 ; i<=7 ;i++){
        pass1 += characters[Math.floor(Math.random()*characters.length + 1)]
    }
    document.getElementById("pass1").textContent =pass1
    for (let i=0 ; i<=7 ;i++){
        pass2 += characters[Math.floor(Math.random()*characters.length + 1)]
        console.log(pass2)
    }
    document.getElementById("pass2").textContent =pass2
}
function cpybtn1() {
    var copyBoxElement = document.getElementById('pass1')
    copyBoxElement.focus();
    copyBoxElement.execCommand('select');
    copyBoxElement.execCommand("copy");
    alert("Text has been copied")
}
function cpybtn2() {

    var copyBoxElement = document.getElementById('pass2');
    copyBoxElement.focus();
    document.execCommand('select');
    document.execCommand("copy");
    alert("Text has been copied")
}
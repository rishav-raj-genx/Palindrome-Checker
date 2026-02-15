const input = document.querySelector("input")
const button = document.querySelector("button")

function reverse(v){
    return v.split("").reverse().join("")
}


function check(){
    const value = input.value
    const rev = reverse(value)
    // alert(rev)

    if(value === rev){
        alert("palindrome");
    } else {
        alert("Not at All")
    }
    input.value = ""
}
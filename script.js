function run(event) {
    if (event.key === "Enter") {
        ShowDiff();
    }
}

function ShowDiff() {
    var func = document.getElementById('function-value');
    var constant = ''
    var variable = ''
    var pow = ''
    for (let num in func.value) {
        if (func.value[num].charCodeAt(0) >= 48 && func.value[num].charCodeAt(0) <= 57) {
            constant = constant + func.value[num]
        }

        else if (func.value[num].charCodeAt(0) >= 97 && func.value[num].charCodeAt(0) <= 122) {
            variable = variable + func.value[num]
        }  
        else if(func.value[num] == '^'){
            break
        }
    }

    for (let i = func.value.indexOf('^')+1; i < func.value.length; i++) {
        pow = pow + func.value[i]        
    }


     constant = parseInt(constant) 
     pow = parseInt(pow)
    document.getElementsByTagName('p')[0].innerText = 'Derivate : '+ (constant*pow)+''+variable+'^'+(pow-1)

}   

function print_string(num) {
	for (var i = 0; i < 37; i++) {
		document.getElementById(i).innerHTML = i
		//console.log(i)
		document.getElementById(i).style.color = f(i)
		if (i==num) {
			document.getElementById(i).style.color = "blue"
		}
	}
}

function even_odd(num) {
    if (num == 0) return 0
    if (num % 9 == 0)
        return 9
    else
        return num % 9
}

function f(num) {
    //green, black, red = 'зеленое', 'черное', 'красное'
    if (num == 0) return 'green'
    if (num == 10 || num == 28) return 'black'
	if (even_odd(num) % 2) 
		return 'red'
	else
		return 'black'
}
function multi(){
	print_string(document.getElementById('name').value)
}
print_string()



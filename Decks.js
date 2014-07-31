var deck = []

var cloneDeck = ["Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc", 
"Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd",
"Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh",
"As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks",]

function populateDeck(number) {
	if (deck.length > 0) {
		alert("Deck already chosen")
		return false
	}
	var i = 0
	
	while (i < number) {
		
		for (var j=0;j<cloneDeck.length;j++) {
			deck.push(cloneDeck[j])
		}

		i++
	}

}

function customPopulate(number) {
	if (deck.length > 0) {
		alert("Deck already chosen")
		return false
	}

	var number = Number(prompt("Please enter a number"))

	if (number > 2000) {
		alert("Invalid number. Please input a valid number (0-2000)")
		return false
	}

	i = 0

	while (i < number) {
	
		for (var j=0;j<cloneDeck.length;j++) {
			deck.push(cloneDeck[j])
		}
		
		i++
	}
}
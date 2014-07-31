// Dealer Functions
function switchDealerValue() {
	
	if (document.getElementById("displayValue") == null && aceDeck[0] == "A") {
		values.splice(0, 1, 11)
	}
	
	if (aceDeck[0] == "A" && document.getElementById("displayValue") != null) {
		var dealer = document.getElementById("displayValue").innerHTML
		
		if (dealer >= 11) {
			values.splice(0, 1, 1)
		}
	}
}


function dealCardDealer() {
	
	(document.getElementById("Element0") !== null) || (chipsBetted.length == 0) ? false : dealerCardFunction.call()
	
	function dealerCardFunction () {
		for (var i=0;i<1;i++) {
			var dealToDealer = document.createElement('img');
			dealToDealer.src = "Images/" + shuffledDeck[0] + ".gif" ;
			dealToDealer.id = "dealerCard"
			var lookup = document.getElementById("dealer");
			lookup.appendChild(dealToDealer);
			var removedCard = shuffledDeck.shift()
			var pushed = dealtCards.push(removedCard)
			aceDeck.shift()			
		}
	}
}

function bustDealer() {
	(document.getElementById("downCard") != null) || (document.getElementById("displayValue").innerHTML >= 17) ? false : bustDealerFunction.call()
	
	function bustDealerFunction () {
		for (var i=0;i<1;i++) {
			var dealToDealer = document.createElement('img');
			dealToDealer.src = "Images/" + shuffledDeck[0] + ".gif" ;
			dealToDealer.id = "dealerCard" + dealerCardValue.length
			var lookup = document.getElementById("dealer");
			lookup.appendChild(dealToDealer);
			var removedCard = shuffledDeck.shift()
			var pushed = dealtCards.push(removedCard)
			aceDeck.shift()
		}
	}
}

function dealDownCard() {

	(document.getElementById("Element0") !== null) || (chipsBetted.length == 0) ? false : dealDownCardFunction.call()

	function dealDownCardFunction () {
		
		for (var i=0;i<1;i++) {
			var dealToDealer = document.createElement('img');
			dealToDealer.src = "Images/dealer.gif";
			dealToDealer.id = "downCard"
			var lookup = document.getElementById("dealer");
			lookup.appendChild(dealToDealer);
		}
	}
}

function revealDownCard() {
	
	indicator.push(1)
	var deleteDownCard = document.getElementById("downCard")

	document.getElementById("doubleDown").childNodes.length == 2 || (chipsBetted.length == 0) ? false : revealDownCardFunction.call()

	function revealDownCardFunction () {
		deleteDownCard.remove()
		var create = document.createElement('img')
		create.src = "Images/" + shuffledDeck[0] + ".gif" 
		create.id = "downCardRevealed"
		var lookup = document.getElementById("dealer")
		lookup.appendChild(create)
		var removedCard = shuffledDeck.shift()
		var pushed = dealtCards.push(removedCard)
		aceDeck.shift()
	}
}

function determineDealerStartingValue() {
	i = 0
	result = 0
	while (i < shuffledDeck.length) {
		result = dealerCardValue[i] + dealerCardValue[i+1]	
		return result
	}
}

function addToDealerHand () {
	i = 0
	result = 0
	while (i < dealerCardValue.length) {
		result += dealerCardValue[i]
		i++
	}
	return result
}

function createDealerValue () {

	(document.getElementById("Element0") == null) || (chipsBetted.length == 0) || (document.getElementById("doubleDown").childNodes.length == 2) || (document.getElementById("displayValue") !== null) ? false : createDealerValueFunction.call()

	function createDealerValueFunction () {
		
		dealerCardValue.push(values[0])

		values.splice(0, 1)

		var find = document.getElementById("displayValue")
		if (find !== null) {
		find.remove()
		}
		
		var findAgain = document.getElementById("dealerValue")
		var value = document.createElement("button")
			
		value.className  = "btn btn-danger btn-large"
		value.id = "displayValue"
		value.innerHTML = determineDealerStartingValue.call()
			
		findAgain.appendChild(value)
	}
}

function addToDealerValue () {
	
	if (document.getElementById("displayValue") != null) {

		document.getElementById("displayValue").innerHTML >= 17 ? false : addToDealerValueFunction.call()

		function addToDealerValueFunction () {
		
			dealerCardValue.push(values[0])
			values.splice(0, 1)

			var find = document.getElementById("displayValue")
			if (find !== null) {
			find.remove()
			}

			var findAgain = document.getElementById("dealerValue")
			var value = document.createElement("button")
				
			value.className  = "btn btn-danger btn-large"
			value.id = "displayValue"
			var check = addToDealerHand.call()
			value.innerHTML = check
				
			findAgain.appendChild(value)
		}
	}
}



// Initial Game Functions

function startGame() {
if (document.getElementById("startedGame") !== null) {
	return false
}
if (deck.length == 0) {
	alert("Please select how many decks to use") 
	return false
}	
	var find = document.getElementById("DeckCount")
	var create = document.createElement("button")
	create.id = "startedGame"
	create.class = "btn btn-primary btn-large"
	create.innerHTML = "Deck: " + aceDeck.length + " cards"
	
	find.appendChild(create)
}

function dealHand() {
	
	(document.getElementById("Element0") !== null) || (chipsBetted.length == 0) ? false : dealHandFunction.call()
	
	function dealHandFunction () {

		roundCount.push(Number(1))

		for (var i=0;i<2;i++) {
			var dealToPlayer = document.createElement('img');
			dealToPlayer.src = "Images/" + shuffledDeck[0] + ".gif" ;
			dealToPlayer.id = "Element" + i


			var lookup = document.getElementById("player");
			lookup.appendChild(dealToPlayer);
			var removedCard = shuffledDeck.shift()
			var pushed = dealtCards.push(removedCard)
			aceDeck.shift()
		}
	}

}

function deckCount() {

	if (document.getElementById("startedGame") == null) {
		return false
	}

	var find = document.getElementById("RemainingDeck")
	var remainingDeck = document.createElement("button")
	remainingDeck.id = "deck"
	remainingDeck.class = "btn btn-primary btn-large"
	remainingDeck.innerHTML =  " Remaining Deck: " + shuffledDeck.length + " cards"
	find.appendChild(remainingDeck)

}

function updateCount() {
	var find = document.getElementById("deck")
	if (find !== null) {
		find.remove()
	}
}





// Player Functions

function switchValue() {
	
	if (document.getElementById("insert") != null) {

		var player = document.getElementById("insert").innerHTML

		if (aceDeck[0] == "A" && player >= 11) {
			values.splice(0, 1, 1)
		}

		if (document.getElementById("doubleDown").childNodes.length > 2) {
			var doubler = document.getElementById("doubleDownValue").innerHTML
			if (aceDeck[0] == "A" && doubler >= 11) {
				values.splice(0, 1, 1)
			}
			
			if (aceDeck[0] == "A" && doubler <= 10) {
				values.splice(0, 1, 11)
			}
		}
	
		else {
			return false
		}
	}
}

function dealCardPlayer() {
	if (document.getElementById("insert") != null) {
		if (document.getElementById("insert").innerHTML >= 22) {
			return false
		}
	}

	(chipsBetted.length == 0) || (document.getElementById("doubleDown").childNodes.length > 2) || (document.getElementById("Element0") == null) ? false : dealCardPlayerFunction.call()


	function dealCardPlayerFunction () {

		for (var i=0;i<1;i++) {
			var dealToPlayer = document.createElement('img');
			dealToPlayer.id = "Element" + playerHandValue.length
			dealToPlayer.src = "Images/" + shuffledDeck[0] + ".gif" ;
			var lookup = document.getElementById("player");
			lookup.appendChild(dealToPlayer);
			var removedCard = shuffledDeck.shift()
			var pushed = dealtCards.push(removedCard)
			aceDeck.shift()
		}
	}
}

function determineStartingValue() {
	i = 0
	result = 0
	while (i < shuffledDeck.length) {
		result = playerHandValue[i] + playerHandValue[i+1]	
		return result
	}
}

function addToHand () {
	i = 0
	result = 0
	while (i < playerHandValue.length) {
		result += playerHandValue[i]
		i++
	}
	return result
}

function createValue () {
	if (document.getElementById("Element0") !== null) {	
		return false
	}

	chipsBetted.length == 0 ? false : createValueFunction.call()

	if (chipsBetted.length == 0) {
		alert("Please make a wager")
		return false
	}

	function createValueFunction () {

		dealerCardValue.push(values[0])
		playerHandValue.push(values[1])
		playerHandValue.push(values[2])
		values.splice(0, 3)

		var find = document.getElementById("insert")
		if (find !== null) {
		find.remove()
		}
		
		var findAgain = document.getElementById("handValues")
		var value = document.createElement("button")
			
		value.className  = "btn btn-danger btn-large"
		value.id = "insert"
		value.innerHTML = determineStartingValue.call()
			
		findAgain.appendChild(value)
	}		
}

function addToValue () {
	if (document.getElementById("insert") != null) {
		if (document.getElementById("insert").innerHTML >= 22) {
			return false
		}
	}

	(document.getElementById("Element0") == null) || (chipsBetted.length == 0) || (document.getElementById("doubleDown").childNodes.length > 2) ? false : addToValueFunction.call()


	function addToValueFunction () {

		playerHandValue.push(values[0])
		values.splice(0, 1)

		var find = document.getElementById("insert")
		if (find !== null) {
		find.remove()
		}

		var findAgain = document.getElementById("handValues")
		var value = document.createElement("button")
			
		value.className  = "btn btn-danger btn-large"
		value.id = "insert"
		var check = addToHand.call()
		value.innerHTML = check
			
		findAgain.appendChild(value)
	}
}



// Double Down Functions

function dealDoubleDownCard() {
	if ( (document.getElementById("doubleDown").childNodes.length >= 2) && indicator[0] == 1) {

		var dealToPlayer = document.createElement('img');
		dealToPlayer.id = "DoubleDowns" + doubleDownHand.length
		dealToPlayer.src = "Images/" + shuffledDeck[0] + ".gif" ;
		var lookup = document.getElementById("doubleDown");
		lookup.appendChild(dealToPlayer);
		var removedCard = shuffledDeck.shift()
		var pushed = dealtCards.push(removedCard)
		aceDeck.shift()
		
	}
}

function doubleDownInitialDisplay() {
	
	if (document.getElementById("insert").innerHTML >= 21) {
		return false
	}

	for (var i=0;i<playerHandValue.length; i++) {

		if (playerHandValue[i] == playerHandValue[i+1]) {

			doubleDownElement.push(i)
			alert(doubleDownElement)

			var temp = document.getElementById("Element" + (i+1) )
			temp.remove()
			var find = document.getElementById("doubleDown")
			find.appendChild(temp)
			
			var secondHandValue = document.getElementById("secondHand")
			var newElement = document.createElement("div")
			newElement.id = "doubleDownDiv"
			newElement.innerHTML = "<div class='btn-group'> <button class='btn btn-primary btn-large' id='scoretwo'> Second Hand </button> </div> <div class='glyphicon glyphicon-arrow-right' id = 'glyphicon'> </div> <div class='btn-group' id='doubleDownExtra'> </div> <br><br>"
			secondHandValue.appendChild(newElement)

			var findAnother = document.getElementById("score")
			findAnother.innerHTML = "First Hand"

			doubleDownHand.push(playerHandValue[i+1])
			var transferValue = playerHandValue.splice((i+1), 1)
			
			
			var find = document.getElementById("doubleDownValue")
			if (find != null) {
				find.remove()
			}

			var findAgain = document.getElementById("doubleDownExtra")
			var value = document.createElement("button")
			value.className = "btn btn-danger btn-large"
			value.id = "doubleDownValue"
			var check = determineDoubleDownValue.call()
			value.innerHTML = check

			document.getElementById("insert").innerHTML = addToHand.call()

			findAgain.appendChild(value)
		}
	}
}


function doubleDownAddToValue () {

	if (document.getElementById("doubleDown").childNodes.length < 2) {
		return false
	}
	
	if ((document.getElementById("doubleDown").childNodes.length >= 2) && indicator[0] == 1) {
		doubleDownHand.push(values[0])
		values.splice(0, 1)

		var find = document.getElementById("doubleDownValue")
		if (find !== null) {
			find.remove()
		}

		var findAgain = document.getElementById("doubleDownExtra")
		var value = document.createElement("button")
		value.className = "btn btn-danger btn-large"
		value.id = "doubleDownValue"
		var check = addToDoubleDown.call()
		value.innerHTML = check

		findAgain.appendChild(value)
	}
}


function addToDoubleDown () {
	var i = 0
	var result = 0
	while (i < doubleDownHand.length) {
		result += doubleDownHand[i]
		i++
	}
	return result
}

function determineDoubleDownValue() {
	i = 0
	result = 0
	while (i < shuffledDeck.length) {
		result = doubleDownHand[i]
		return result
	}
}


// Keeping track of chippies functions

function initialCount (count) {

	(document.getElementById("startedGame") == null) || (currentChips.length > 0) ? false : initialCountFunction.call()
	
	function initialCountFunction () {
		currentChips.push(Number(count))
	}
}

function addChippies () {
	var amount = prompt("How many chips would you like to add?")
	currentChips.push(Number(amount) + currentChips[0])
	currentChips.shift()
	var add = document.getElementById("chippiesValue")
	add.innerHTML = currentChips
}

function custom() {

	var wager = prompt("Please enter a bet amount")
	
	if (Number(wager) > currentChips[0]) {
		alert("You don't have that much to bet")
		return false
	}
	
	return Number(wager)
}

function decrease() {
	var wager = prompt("Please enter an amount to decrease your bet by")
	
	if (Number(wager) > chipsBetted[0]) {
		alert("You never bet that much")
		return false
	}
	return Number(wager * (-1))
}

function wager(amount) {

	if (document.getElementById("startedGame") == null) {
		return false
	}
	
	var temp = []

	typeof(amount) == 'function' ? temp.push(amount.call()) : false

	typeof(amount) == 'function' ? currentChips.push(Number(currentChips[0] - temp[0])) : currentChips.push(Number(currentChips[0] - amount))
	
	typeof(amount) == 'function' ? chipsBetted.push(temp[0]) : chipsBetted.push(amount)

	currentChips.shift()

}

function displayChippies() {
	if (document.getElementById("startedGame") == null) {
		return false
	}

	var find = document.getElementById("chippiesValue")
	if (find !== null) {
	find.remove()
	}
	
	var findAgain = document.getElementById("chippies")
	var value = document.createElement("button")
		
	value.className  = "btn btn-danger btn-large"
	value.id = "chippiesValue"
	
	value.innerHTML = currentChips
		
	findAgain.appendChild(value)

}

function displayBetAmount() {
	if (document.getElementById("startedGame") == null) {
		return false
	}

	if (document.getElementById("doubleDown").childNodes.length >= 2) {
		doubleDownChips.push(chipsBetted[0])
	}

	var find = document.getElementById("totalWager")
	if (find !== null) {
	find.remove()
	}
	
	var findAgain = document.getElementById("amountBet")
	var value = document.createElement("button")
		
	value.className  = "btn btn-danger btn-large"
	value.id = "totalWager"
	
	value.innerHTML = chipsBetted
		
	findAgain.appendChild(value)

}

function calculateWagers() {
	result = 0
	i = 0
	
	while (i < chipsBetted.length) {
		result += chipsBetted[i]
		i++
	}
	chipsBetted.splice(0, (chipsBetted.length), Number(result))

}

function wagerEverything(amount) {
	var amount = currentChips[0]
	chipsBetted.push(amount)
	currentChips.shift()
	currentChips.push(0)
}
// Other Functions


function checks() {

	
	if (document.getElementById("insert") == null) {
		return false
	}
	
	
	else {

		var player = document.getElementById("insert").innerHTML
		var doubleDownLength = document.getElementById("doubleDown").childNodes.length
		var chipCount = document.getElementById("chippiesValue")
		
		if ( (player >= 21) && (doubleDownLength < 2) ) {

			if (typeof(currentChips[0]) == 'undefined') {
				currentChips.push(0)
				chipCount.innerHTML = currentChips
			}

			if ( player >= 22) {
				alert("Player has " + player + "." + "\n" + "Player loses.")
				chipsBetted.shift()
			}

			if ( player == 21) {
				alert("Blackjack!")
				currentChips.push( currentChips[0] + (Number(chipsBetted[0] * 3)) )
				chipCount.innerHTML = currentChips[1]
				currentChips.shift()
				chipsBetted.shift()
			}
		
			var firstElement = document.getElementById("Element0")
			firstElement.remove()
			var secondElement = document.getElementById("Element1")
			secondElement.remove()
			var thirdElement = document.getElementById("dealerCard")
			thirdElement.remove()
			var fourthElement = document.getElementById("downCard")
			fourthElement.remove()
			var fifthElement = document.getElementById("insert")
			fifthElement.remove()
			var sixthElement = document.getElementById("totalWager")
			sixthElement.remove()

			for (var i=2;i<playerHandValue.length; i++) {
				var elementX = document.getElementById("Element" + i)
				elementX.remove()
			}
		
			playerHandValue.splice(0, (playerHandValue.length))
			dealerCardValue.splice(0, (dealerCardValue.length))
			chipsBetted.splice(0, (chipsBetted.length))
			indicator.splice(0, (indicator.length))
			doubleDownElement.splice(0, (doubleDownElement.length))	
		}
	}
}

function dealerCheck() {
	if (document.getElementById("displayValue") == null) {
		return false
	}

	else {

		var dealer = document.getElementById("displayValue").innerHTML
		var player = document.getElementById("insert").innerHTML
		var doubleDownLength = document.getElementById("doubleDown").childNodes.length
		var chipCount = document.getElementById("chippiesValue")

		if (typeof(currentChips[0]) == 'undefined') {
			currentChips.push(0)
			chipCount.innerHTML = currentChips
		}


		if (document.getElementById("displayValue").innerHTML >= 17) {

			if ( (player <= dealer) && (dealer <= 21) && (player != 21) ) {
				alert("Player has " + player + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player loses.")
				chipsBetted.shift()
			}

			if ( player >= 22) {
				alert("Player has " + player + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player loses.")
				chipsBetted.shift()
			}

			if ( (player > dealer) && (dealer <= 19) && (player != 21) ) {
				alert("Player has " + player + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player wins.")
				currentChips.push( currentChips[0] + (Number(chipsBetted[0] * 2)) )
				chipCount.innerHTML = currentChips[1]
				currentChips.shift()
				chipsBetted.shift()
			}

			if ( (player < dealer) && (dealer >= 22) && (player != 21) ) {
				alert("Player has " + player + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player wins.")
				currentChips.push( currentChips[0] + (Number(chipsBetted[0] * 2)) )
				chipCount.innerHTML = currentChips[1]
				currentChips.shift()
				chipsBetted.shift()
			}

			if ( player == 21) {
				alert("Blackjack!")
				currentChips.push( currentChips[0] + (Number(chipsBetted[0] * 3)) )
				chipCount.innerHTML = currentChips[1]
				currentChips.shift()
				chipsBetted.shift()
			}			

			if (doubleDownLength > 2) {

				var doubler = document.getElementById("doubleDownValue").innerHTML
				
				if ( (doubler <= dealer) && (dealer <= 21) && (doubler != 21) ) {
					alert("Player has " + doubler + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player loses.")
					doubleDownChips.shift()
				}

				if ( doubler >= 22) {
					alert("Player has " + doubler + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player loses.")
					doubleDownChips.shift()
				}

				if ( (doubler > dealer) && (dealer <= 19) && (doubler != 21) ) {
					alert("Player has " + doubler + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player wins.")
					currentChips.push( currentChips[0] + (Number(doubleDownChips[0] * 2)) )
					chipCount.innerHTML = currentChips[1]
					currentChips.shift()
					doubleDownChips.shift()
				}

				if ( (doubler < dealer) && (dealer >= 22) && (doubler != 21) ) {
					alert("Player has " + doubler + "." + "\n" + "Dealer has " + dealer + "." + "\n" + "Player wins.")
					currentChips.push( currentChips[0] + (Number(doubleDownChips[0] * 2)) )
					chipCount.innerHTML = currentChips[1]
					currentChips.shift()
					doubleDownChips.shift()
				}

				if ( doubler == 21) {
					alert("Blackjack!")
					currentChips.push( currentChips[0] + (Number(doubleDownChips[0] * 3)) )
					chipCount.innerHTML = currentChips[1]
					currentChips.shift()
					doubleDownChips.shift()
				}

				var eigthElement = document.getElementById("doubleDownDiv")
				eigthElement.remove()
				var ninthElement = document.getElementById("Element" + (doubleDownElement[0] + 1) )
				ninthElement.remove()
				
				for (var i=1;i<doubleDownHand.length;i++) {
					var elementY = document.getElementById("DoubleDowns" + i)
					elementY.remove()
				}

			}

			var firstElement = document.getElementById("Element0")
			firstElement.remove()
			var secondElement = document.getElementById("Element1")
			secondElement.remove()
			var thirdElement = document.getElementById("dealerCard")
			thirdElement.remove()
			var fourthElement = document.getElementById("downCardRevealed")
			fourthElement.remove()
			var fifthElement = document.getElementById("insert")
			fifthElement.remove()
			var sixthElement = document.getElementById("displayValue")
			sixthElement.remove()
			var seventhElement = document.getElementById("totalWager")
			seventhElement.remove()

			for (var i=2;i<playerHandValue.length; i++) {
				var elementX = document.getElementById("Element" + i)
				elementX.remove()
			}

			for (var i=2;i<dealerCardValue.length; i++) {
				var elementZ = document.getElementById("dealerCard" + i)
				elementZ.remove()
			}
		
			playerHandValue.splice(0, (playerHandValue.length))
			dealerCardValue.splice(0, (dealerCardValue.length))
			doubleDownHand.splice(0, (doubleDownHand.length))
			indicator.splice(0, (indicator.length))
			doubleDownElement.splice(0, (doubleDownElement.length))


		}
	}
}

function newGame() {
	
	if (document.getElementById("Element0") != null) {
		
		for (var i=0; i<playerHandValue.length;i++) {
			var elementX = document.getElementById("Element" + i)
			elementX.remove()
		}
	}

	
	if (document.getElementById("dealerCard1") != null) {
		
		for (var i=1;i<dealerCardValue.length;i++) {
			var elementZ = document.getElementById("dealerCard" + i)
			elementZ.remove()
		}
	}



	if (document.getElementById("downCardRevealed") != null) {
		var firstElement = document.getElementById("downCardRevealed")
		firstElement.remove()
	}



	if (document.getElementById("insert") != null) {
		var secondElement = document.getElementById("insert")
		secondElement.remove()
	}



	if (document.getElementById("displayValue") != null) {
		var thirdElement = document.getElementById("displayValue")
		thirdElement.remove()
	}



	if (document.getElementById("downCard") != null) {
		var fourthElement = document.getElementById("downCard")
		fourthElement.remove()
	}

	if(document.getElementById("dealerCard") != null) {
		var fifthElement = document.getElementById("dealerCard")
		fifthElement.remove()
	}

	if(document.getElementById("startedGame") != null) {
		var sixthElement = document.getElementById("startedGame")
		sixthElement.remove()
	}

	if(document.getElementById("deck") != null) {
		var seventhElement = document.getElementById("deck")
		seventhElement.remove()
	}

	if(document.getElementById("totalWager") != null) {
		var eigthElement = document.getElementById("totalWager")
		eigthElement.remove()
	}

	if(document.getElementById("chippiesValue") != null) {
		var ninthElement = document.getElementById("chippiesValue")
		ninthElement.remove()
	}

	playerHandValue.splice(0, (playerHandValue.length))
	dealerCardValue.splice(0, (dealerCardValue.length))
	dealtCards.splice(0, (dealtCards.length))
	undealtCards.splice(0, (undealtCards.length))
	shuffledDeck.splice(0, (shuffledDeck.length))
	displayDeck.splice(0, (displayDeck.length))
	aceDeck.splice(0, (aceDeck.length))
	values.splice(0, (values.length))
	doubleDownHand.splice(0, (doubleDownHand.length))
	currentChips.splice(0, (currentChips.length))
	chipsBetted.splice(0, (chipsBetted.length))
	deck.splice(0, (deck.length))
	doubleDownChips.splice(0, (doubleDownChips.length))
	indicator.splice(0, (indicator.length))
	doubleDownElement.splice(0, (doubleDownElement.length))

}
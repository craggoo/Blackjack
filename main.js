var dealtCards = []
var undealtCards = []
var cutDeck = []
var shuffledDeck = []
var displayDeck = []
var aceDeck = []
var values = []
var playerHandValue = []
var dealerCardValue = []
var doubleDownHand = []
var doubleDownElement = []
var roundCount = []
var currentChips = []
var chipsBetted = []
var doubleDownChips = []
var indicator = []

//nanDeck, convertedDeck, and aceDeck used to create card values


function setUpGame () {

	if (shuffledDeck.length > 0) {
		return false
	}

	function copy() {
		for (var i=0;i<deck.length;i++) {
			undealtCards[i] = deck[i]
		}
	}

	copy()

	function cutCard() {
		var cut = Math.floor(Math.random() * deck.length)
		var slice = undealtCards.slice(cut,deck.length)
		for (var i=0;i<slice.length;i++){
			cutDeck[i] = slice[i]
		}
		
	}

	cutCard()

	function shuffle() {
		deckLength = cutDeck.length
		for (var i=0;i<deckLength;i++) {
			var removeCard = Math.floor(Math.random() * cutDeck.length)
			var card = cutDeck.splice(removeCard, 1)
			shuffledDeck.push(card)
		}
	}

	shuffle()

	function copier () {
		for (var i=0; i<shuffledDeck.length;i++) {
			displayDeck.push(shuffledDeck[i])
		}
	}

	copier()


	function convert() {
		for (var i=0;i<shuffledDeck.length;i++) {
			var temp = String(shuffledDeck[i])	
			var ace = temp.slice(0, -1)
			aceDeck.push(ace)
			}
		
		for (var k=0;k<shuffledDeck.length;k++) {
			if (aceDeck[k] == "A") {
				values.push(11)
			}

			else if (aceDeck[k] === "K") {
				values.push(10)
			}

			else if (aceDeck[k] === "J") {
				values.push(10)
			}

			else if (aceDeck[k] === "Q") {
				values.push(10)
			}
			
			else {
				values.push(Number(aceDeck[k]))
			}
		
		}

	}

	convert()

}
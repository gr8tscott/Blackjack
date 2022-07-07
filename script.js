const cardDeck = {
  d02: 2,
  d03: 3,
  d04: 4,
  d05: 5,
  d06: 6,
  d07: 7,
  d08: 8,
  d09: 9,
  d10: 10,
  dJ: 10,
  dQ: 10,
  dK: 10,
  dA: 11,
  h02: 2,
  h03: 3,
  h04: 4,
  h05: 5,
  h06: 6,
  h07: 7,
  h08: 8,
  h09: 9,
  h10: 10,
  hJ: 10,
  hQ: 10,
  hK: 10,
  hA: 11,
  s02: 2,
  s03: 3,
  s04: 4,
  s05: 5,
  s06: 6,
  s07: 7,
  s08: 8,
  s09: 9,
  s10: 10,
  sJ: 10,
  sQ: 10,
  sK: 10,
  sA: 11,
  c02: 2,
  c03: 3,
  c04: 4,
  c05: 5,
  c06: 6,
  c07: 7,
  c08: 8,
  c09: 9,
  c10: 10,
  cJ: 10,
  cQ: 10,
  cK: 10,
  cA: 11
}

const dealer = document.querySelector('.dealer')
const player = document.querySelector('.player')
const hitButton = document.querySelector('.hit')
const stayButton = document.querySelector('.stay')

const levelWinner = document.querySelector('.level-winner')

let playerSumCards = 0
let dealerSumCards = 0

//switch between game start page and playing page
function show(shown, hidden) {
  document.getElementById(shown).style.display = 'block'
  document.getElementById(hidden).style.display = 'none'
  return false
}

const pullDealerCard = () => {
  const keys = Object.keys(cardDeck)
  let prop = keys[Math.floor(Math.random() * keys.length)]
  let card = document.createElement('div')
  card.classList.add('card')
  //   card.classList.add(prop)
  card.innerText = prop
  console.log(cardDeck[prop])
  player.appendChild(card)
}

const aceCardValue = () => {
  if (playerSumCards > 10) {
    cardDeck.dA = 1
  } else {
    cardDeck.dA = 11
  }
}
const dealerAceValue = () => {
  if (dealerSumCards > 10) {
    cardDeck.dA = 1
  } else {
    cardDeck.dA = 11
  }
}

const playGame = () => {
  const playerCards = () => {
    let keys = Object.keys(cardDeck)
    let prop = keys[Math.floor(Math.random() * keys.length)]
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add(prop)
    card.classList.add('large')
    card.innerText = prop
    player.appendChild(card)

    let trackCards = []
    trackCards.push(cardDeck[prop])

    keys = Object.keys(cardDeck)
    prop = keys[Math.floor(Math.random() * keys.length)]
    card = document.createElement('div')
    card.classList.add('card')
    card.classList.add(prop)
    card.classList.add('large')
    card.innerText = prop
    player.appendChild(card)

    trackCards.push(cardDeck[prop])
    const reducer = (accumulator, current) => accumulator + current
    playerSumCards = trackCards.reduce(reducer)
    console.log('Player card sum:' + playerSumCards)

    hitButton.addEventListener('click', () => {
      const keys = Object.keys(cardDeck)
      let prop = keys[Math.floor(Math.random() * keys.length)]
      let card = document.createElement('div')
      card.classList.add('card')
      card.classList.add(prop)
      card.classList.add('large')
      card.innerText = prop
      player.appendChild(card)

      //Finds the value in the key for each Player Card
      for (const [key, value] of Object.entries(cardDeck)) {
        aceCardValue()
        if (key === prop) {
          trackCards.push(value)

          console.log(trackCards)
          const reducer = (accumulator, current) => accumulator + current
          playerSumCards = trackCards.reduce(reducer)
          console.log('Player card sum:' + playerSumCards)
          aceCardValue()

          if (playerSumCards > 21) {
            //bust or win
            console.log('Player BUST')
            levelWinner.innerHTML = `Player BUST, dealer wins!`
            levelWinner.style.opacity = 0.8
            hitButton.disabled = true
          }
          return playerSumCards
        }
      }
    })
  }

  const dealerCards = () => {
    const keys = Object.keys(cardDeck)
    let prop = keys[Math.floor(Math.random() * keys.length)]
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add(prop)
    card.classList.add('large')
    card.innerText = prop
    console.log(cardDeck[prop])
    dealer.appendChild(card)

    let trackCards = []
    trackCards.push(cardDeck[prop])

    let secondCard = document.createElement('div')
    secondCard.classList.add('face-down')
    secondCard.classList.add('card')
    secondCard.classList.add('back-blue')
    secondCard.classList.add('large')
    secondCard.innerText = '?'
    dealer.appendChild(secondCard)

    //Stay Button Clicked
    stayButton.addEventListener('click', () => {
      hitButton.disabled = true

      dealer.removeChild(secondCard)

      const keys = Object.keys(cardDeck)
      let prop = keys[Math.floor(Math.random() * keys.length)]
      let card = document.createElement('div')
      card.classList.add('card')
      card.classList.add(prop)
      card.classList.add('large')
      card.innerText = prop
      console.log(cardDeck[prop])
      dealer.appendChild(card)
      dealerAceValue()

      //   let trackCards = []
      for (const [key, value] of Object.entries(cardDeck)) {
        if (key === prop) {
          trackCards.push(value)

          console.log(trackCards)
          const reducer = (accumulator, current) => accumulator + current
          dealerSumCards = trackCards.reduce(reducer)
          console.log('dealer card sum:' + dealerSumCards)

          dealerAceValue()
        }
      }
      while (dealerSumCards <= 16) {
        const keys = Object.keys(cardDeck)
        let prop = keys[Math.floor(Math.random() * keys.length)]
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add(prop)
        card.classList.add('large')
        card.innerText = prop
        console.log(cardDeck[prop])
        dealer.appendChild(card)
        ///
        for (const [key, value] of Object.entries(cardDeck)) {
          if (key === prop) {
            trackCards.push(value)

            console.log(trackCards)
            const reducer = (accumulator, current) => accumulator + current
            dealerSumCards = trackCards.reduce(reducer)
            console.log('dealer card sum:' + dealerSumCards)
          }
        }
      }
      if (dealerSumCards > 21) {
        console.log('Dealer BUST')
        levelWinner.innerHTML = `Player BUST, dealer wins!`
        levelWinner.style.opacity = 0.8
      }

      checkWinner()
    })
  }

  //Dealer is 16 or 17 count
  //   if (dealerSumCards <= 16) {
  //     //dealerpulls another card, otherwise count is over 17 and dealer must stay
  //   }
  const checkWinner = () => {
    console.log(playerSumCards)
    console.log(dealerSumCards)
    if (playerSumCards > 21) {
      //bust or win
      console.log('Player BUST, dealer wins')
      levelWinner.innerHTML = `Player BUST, dealer wins!`
      levelWinner.style.opacity = 0.8
    } else if (dealerSumCards > 21) {
      console.log('Dealer BUST, player wins')
      levelWinner.innerHTML = `Dealer BUST, player wins!`
      levelWinner.style.opacity = 0.8
    } else if (playerSumCards > dealerSumCards) {
      console.log('yay player wins')
      levelWinner.innerHTML = `Yay Player wins!`
      levelWinner.style.opacity = 0.8
    } else if (playerSumCards < dealerSumCards) {
      console.log('Dealer won, you lost your money')
      levelWinner.innerHTML = `Dealer won, you lost your money!`
      levelWinner.style.opacity = 0.8
    } else if (playerSumCards === dealerSumCards) {
      console.log('its a tie')
      levelWinner.innerHTML = `You tied with the dealer!`
      levelWinner.style.opacity = 0.8
    }
  }

  playerCards()
  dealerCards()
}

playGame()

//who wins?

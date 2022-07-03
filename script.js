const cardDeck = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 1
}

const dealer = document.querySelector('.dealer')
const player = document.querySelector('.player')
const hitButton = document.querySelector('.hit')
const stayButton = document.querySelector('.stay')

// let playerSumCards = 0
// let dealerSumCards = 0
//const addUpDealer = document.querySelector

//console.log(Object.keys(cardDeck)[Math.round(Math.random()) * cardDeck.length])
// const keys = Object.keys(cardDeck)
// let prop = keys[Math.floor(Math.random() * keys.length)]
// console.log(prop)
// console.log(cardDeck[prop])

const pullDealerCard = () => {
  const keys = Object.keys(cardDeck)
  let prop = keys[Math.floor(Math.random() * keys.length)]
  let card = document.createElement('div')
  card.innerText = prop
  console.log(cardDeck[prop])
  dealer.appendChild(card)
}

// const pullPlayerCard = () => {
//   const keys = Object.keys(cardDeck)
//   let prop = keys[Math.floor(Math.random() * keys.length)]
//   let card = document.createElement('div')
//   card.innerText = prop
//   // console.log(cardDeck[prop])
//   player.appendChild(card)
// }

// const dealerSumCards = () => {
//   for (const [key, value] of Object.entries(cardDeck)) {
//     if (key === prop) {
//       // console.log(value)
//       trackCards.push(value)

//       console.log(trackCards)
//       const reducer = (accumulator, current) => accumulator + current
//       const sumCards = trackCards.reduce(reducer)
//       console.log('dealer card sum:' + sumCards)

//       if (sumCards > 21) {
//         //bust or win
//         console.log('BUST')
//       }
//     }
//   }
// }

const playGame = () => {
  const playerCards = () => {
    let trackCards = []

    hitButton.addEventListener('click', () => {
      const keys = Object.keys(cardDeck)
      let prop = keys[Math.floor(Math.random() * keys.length)]
      let card = document.createElement('div')
      card.innerText = prop
      // console.log(cardDeck[prop])
      player.appendChild(card)

      //Finds the value in the key for each Player Card
      for (const [key, value] of Object.entries(cardDeck)) {
        if (key === prop) {
          // console.log(value)
          trackCards.push(value)

          console.log(trackCards)
          const reducer = (accumulator, current) => accumulator + current
          const playerSumCards = trackCards.reduce(reducer)
          console.log('Player card sum:' + playerSumCards)

          if (playerSumCards > 21) {
            //bust or win
            console.log('BUST')
          }
          return playerSumCards
          //   checkWinner()
        }
      }
    })

    //   let sum = cardDeck[prop] + (cardDeck[prop] - 1)
    //   console.log(sum)

    //   Object.values(cardDeck).forEach((value) => {
    //     console.log(value++)
    //   })
    //const sumCards = () => Object.values().reduce((prop,))
    //   keys.forEach((element) => {
    //     let card = document.createElement('div')
    //     card.innerText = prop
    //     player.appendChild(card)
    //     const sum = element + cardDeck[prop]
    //     console.log(sum)
    //   })
    // })
  }

  const dealerCards = () => {
    const keys = Object.keys(cardDeck)
    let prop = keys[Math.floor(Math.random() * keys.length)]
    let card = document.createElement('div')
    card.innerText = prop
    console.log(cardDeck[prop])
    dealer.appendChild(card)

    let trackCards = []
    trackCards.push(cardDeck[prop])

    let secondCard = document.createElement('div')
    secondCard.classList.add('face-down')
    secondCard.innerText = '?'
    dealer.appendChild(secondCard)

    //Stay Button Clicked
    stayButton.addEventListener('click', () => {
      console.log('2stay')
      dealer.removeChild(secondCard)

      const keys = Object.keys(cardDeck)
      let prop = keys[Math.floor(Math.random() * keys.length)]
      let card = document.createElement('div')
      card.innerText = prop
      console.log(cardDeck[prop])
      dealer.appendChild(card)

      //   let trackCards = []
      for (const [key, value] of Object.entries(cardDeck)) {
        if (key === prop) {
          // console.log(value)
          trackCards.push(value)

          console.log(trackCards)
          const reducer = (accumulator, current) => accumulator + current
          const dealerSumCards = trackCards.reduce(reducer)
          console.log('dealer card sum:' + dealerSumCards)

          if (dealerSumCards > 21) {
            //bust or win
            console.log('BUST')
          }
          return dealerSumCards
        }
      }

      checkWinner()
    })
  }

  //   const checkWinner = () => {
  //     // let playerSumCards = playerCards(playerSumCards)
  //     // let dealerSumCards = dealerCards(dealerSumCards)
  //     if (playerSumCards > 21) {
  //       //bust or win
  //       console.log('Player BUST')
  //     } else if (playerSumCards > dealerSumCards) {
  //       console.log('yay player wins')
  //     } else if (playerSumCards < dealerSumCards) {
  //       console.log('Dealer won, you lost your money')
  //     } else if (playerSumCards === dealerSumCards) {
  //       console.log('its a tie')
  //     }
  //   }
  playerCards()
  dealerCards()
  //checkWinner()
  //   const test = () => {
  //     // console.log(playerCards(playerSumCards))
  //     // console.log(dealerCards(dealerSumCards))
  //     test1 = joint([playerCards, dealerCards, checkWinner])
  //     return test1
  //   }
  //   test()
}

playGame()

//who wins?

export const deckShuffle = (deck) => {
  for (let i = 0; i < 10; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 9);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }

  let splitDeck = Math.floor(deck.length / 2);
  // or instead of floor you can use ceil depending on what side gets the extra data

  let arrayFirstHalf = deck.slice(0, splitDeck);
  let arraySecondHalf = deck.slice(splitDeck, deck.length);

  return [arrayFirstHalf, arraySecondHalf];
};

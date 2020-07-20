export const addItemToCard = (cardItem, cardItemTOAdd) => {
  const existingCardItem = cardItem.find(
    (cardItem) => cardItem.id === cardItemTOAdd.id
  );
  if (existingCardItem) {
      return cardItem.map(cardItems=>
          cardItems.id === cardItemTOAdd.id ? {...cardItems , quantity: cardItems.quantity + 1}
          : cardItems
      )
  }
  return [...cardItem,{...cardItemTOAdd, quantity: 1}]
};

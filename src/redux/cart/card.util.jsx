export const addItemToCard = (cardItem, cardItemTOAdd) => {
  const existingCardItem = cardItem.find(
    (cardItem) => cardItem.id === cardItemTOAdd.id
  );
  if (existingCardItem) {
    return cardItem.map((cardItems) =>
      cardItems.id === cardItemTOAdd.id
        ? { ...cardItems, quantity: cardItems.quantity + 1 }
        : cardItems
    );
  }
  return [...cardItem, { ...cardItemTOAdd, quantity: 1 }];
};
export const removeItemFromCard = (cardItems, cardItemToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToRemove.id
  );
  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
  }
  return cardItems.map((cardItem) =>
    cardItem.id === cardItemToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

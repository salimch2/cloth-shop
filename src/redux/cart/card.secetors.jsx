import { createSelector } from "reselect";

const selectCard = (state) => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  (card) => card.cardItems
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  (cardItems) =>
    cardItems.reduce(
      (accumalatedQuantity, cardItems) =>
        accumalatedQuantity + cardItems.quantity,
      0
    )
);

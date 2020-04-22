import produce from 'immer';
import apiVol from '../../../services/apiVol';

export default function saveInfoBook(state = [], action) {
  switch (action.type) {
    case '@singleBook/SEARCH_BOOK':
      return produce(state, async (draft) => {
        const infoBook = [];

        const res = await apiVol.get(action.id);

        infoBook.push({
          title: res.data.volumeInfo.title,
          description: res.data.volumeInfo.description,
          //originPrice: res.data.saleInfo.listPrice.amount,
          //retailPrice: res.data.saleInfo.retailPrice.amount,
        });

        console.log(infoBook);
        draft.push({
          ...infoBook,
        });
      });
    default:
      return state;
  }
}

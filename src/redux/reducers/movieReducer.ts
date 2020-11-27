import { AnyAction } from 'redux';

const initialState: any = {
  list: []
};

const movieReducer = (action: AnyAction, state = initialState) => {
  switch (action) {
    default:
      return state;
  }
};

export default movieReducer;

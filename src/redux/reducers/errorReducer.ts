import { AnyAction } from 'redux';

const initialState: any = '';

const errorReducer = (action: AnyAction, state = initialState) => {
  switch (action) {
    default:
      return state;
  }
};

export default errorReducer;

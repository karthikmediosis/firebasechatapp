import {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducer';

import logger from 'redux-logger';

const Store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default Store;

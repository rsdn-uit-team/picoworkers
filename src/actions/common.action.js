import { action } from './index.action';

export const SET_LOADING = 'SET_LOADING';
export const SET_BUTTON_LOADING = 'SET_BUTTON_LOADING';

export const setLoading = (payload) => action(SET_LOADING, payload);
export const setButtonLoading = (payload) => action(SET_BUTTON_LOADING, payload);
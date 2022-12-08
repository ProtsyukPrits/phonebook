import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  handlePending,
  handleRejected,
  handleFetchContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
} from './constants';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFetchContactsFulfilled,
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: handleAddContactFulfilled,
    prepare({ name, number }) {
      return {
        payload: {
          name,
          number,
          id: nanoid(),
        },
      };
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: handleDeleteContactFulfilled,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

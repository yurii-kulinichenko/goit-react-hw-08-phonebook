import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const contacts = await axios.get('/contacts');

  return contacts.data;
};

export const addContact = async data => {
  const contact = await axios.post('/contacts', data);

  return contact.data;
};

export const deleteContact = async id => {
  const contact = await axios.delete(`/contacts/${id}`);

  return contact.data;
};

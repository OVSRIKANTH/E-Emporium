import client from './client';

const getMessages = (authToken, user) => client.get("/messages", authToken, user);

const send = (message, listingId) =>
  client.post("/messages", {
    message,
    listingId,
  });


export default {getMessages , send };
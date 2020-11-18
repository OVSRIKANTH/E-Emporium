import client from './client';

const endpoint= '/auth';

const login = ({email, password}) => client.post(endpoint, {email,password});

export default {login, };


import {create} from 'apisauce';
import authStorage from "../auth/storage";

const apiClient = create({
    baseURL:"http://192.168.1.7:9000/api"
});

export default apiClient;

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
  });
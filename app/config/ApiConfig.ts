import axios from 'axios';
import APIConstants from '../constants/ApiConstant';

const instance = axios.create({
  baseURL: APIConstants.baseUrl,
  headers: {
    'X-Authorization': 'sk_518244746c99e86b6c8166fdc086231afe8de4012b2f3',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export default instance;

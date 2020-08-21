import axios, {AxiosInstance, AxiosResponse, Method, CancelToken} from 'axios';
import Cookies from 'js-cookie';

interface IConfig {
  baseURL?: string;
  timeout?: number;
}

interface IRequest {
  url: string;

  baseURL?: string;
  method?: Method;
  payload?: object;
  params?: object;
  cancelToken?: CancelToken;
  data?: any;
  headers?: {[key: string]: string | number | undefined | null};
}

class Fetcher {
  private instance: AxiosInstance;

  // TODO определиться со значением timeout? Возможно его не надо зашивать
  constructor({baseURL, timeout = 30 * 1000}: IConfig) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use(config => {
      const token = Cookies.get('token');

      if (!token) {
        return config;
      }

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      return {...config, headers};
    });
  }

  request = ({method = 'GET', url, params, cancelToken, headers, baseURL, data}: IRequest): Promise<AxiosResponse> =>
    this.instance.request({
      url,
      method,
      params,
      cancelToken,
      headers,
      baseURL,
      data,
    });
}

export default Fetcher;

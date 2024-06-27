import axios from "axios";

export default class CommonService {

  private static CONTENT_SERVICE = '/music-control-system/service';

  public static setURL = (url: string) => {
    return CommonService.CONTENT_SERVICE += url.startsWith("/") ? url : `/${url}`;
  }

  public static get = (url: string, params: any, options?: any) => {
    url = CommonService.setURL(url);
    return axios.get(url, {withCredentials: true, params, ...(options || {})}).then((res: any) => {
      return res.data;
    }).catch((err: any) => {
      return err;
    })
  }

  public static post = (url: string, params: any, options?: any) => {
    url = CommonService.setURL(url);
    return axios.post(url, params, options).then((res: any) => {
      return res.data;
    }).catch((err: any) => {
      return err;
    });
  }
}
export default class CommonUtils{

  public static getUrlParams(paramKey?:string) {
    const params = window.location.search?.split("&");
    if(paramKey){
      for(const paramMap of params){
        const [key, value] = paramMap?.split("=") || "";
        if(paramKey === key) {
          return value;
        }
      }
      return "";
    }
    return params;
  }
}
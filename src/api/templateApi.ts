import BaseApi from "./baseApi";

class TemplateApi extends BaseApi {
  constructor() {
    super('templates');
  }
}

export default new TemplateApi();

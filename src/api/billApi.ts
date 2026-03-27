import BaseApi from "./baseApi";

class BillApi extends BaseApi {
  constructor() {
    super('bills');
  }
}

export default new BillApi();

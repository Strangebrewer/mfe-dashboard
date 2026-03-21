import BaseApi from "./baseApi";

class CarDataApi extends BaseApi {
  constructor() {
    super('car-data');
  }
}

export default new CarDataApi();

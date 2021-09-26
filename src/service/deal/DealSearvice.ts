import CommonSearvice from "../CommonServices";
import Deal from "../../model/deal/Deal";
import { apiHost } from "../../utils/utils";

class DealSearvice extends CommonSearvice<Deal> {
  constructor() {
    super();
    this.rootURL = apiHost + "/api/deals";
  }

  async searchData(search: String): Promise<Deal[]> {
    try {
      const response = await fetch(this.rootURL + "?searchTerm=" + search);
      if (!response.ok) {
        throw new Error("Cannot get data");
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
export const dealSearvice = new DealSearvice();

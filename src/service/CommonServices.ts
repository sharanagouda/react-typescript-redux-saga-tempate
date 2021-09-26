import CommonModel from "../model/CommonModel";
import iApiMethod from "./iApiMethods";

export default abstract class CommonSearvice<T extends CommonModel>
  implements iApiMethod<T>
{
  rootURL: string = "";

  searchData(_: String): Promise<any[]> {
    throw new Error("method not implemented");
  }

  async getAll(): Promise<T[]> {
    try {
      const response = await fetch(this.rootURL);
      if (!response.ok) {
        throw new Error("Cannot get data");
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async fetchById(dix: String): Promise<T | null> {
    try {
      const response = await fetch(this.rootURL + "/" + dix);
      if (!response.ok) {
        throw new Error("cant fetch data");
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}

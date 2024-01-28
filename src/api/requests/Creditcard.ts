import http from "../httpClient";
import ICreditcardData from "./Creditcard.types";

class CreditcardAPI {
    getAll() {
      return http.get<Array<ICreditcardData>>("/creditcards");
    }

}
export default new CreditcardAPI()
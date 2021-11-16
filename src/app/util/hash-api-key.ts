import {Md5} from "ts-md5";
import {environment} from "../../environments/environment";

export class GenerateApiKey {
  apiKey() {
    return Md5.hashStr(1+environment.public_key+environment.private_key)
  }
}

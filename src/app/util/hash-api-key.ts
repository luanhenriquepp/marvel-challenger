import {Md5} from "ts-md5";
import {environment} from "../../environments/environment";
import {timestamp} from "rxjs/operators";

export class GenerateApiKey {
  public static apiKey() {
     return Md5.hashAsciiStr(`1${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`)
  }
}

import {Injectable} from "@angular/core";
import {Observable, timer} from "rxjs";
import {first, map} from "rxjs/operators";
import {LOCAL_STORAGE_KEYS} from "../shared/constants/local-storage-keys";

@Injectable()
export class AuthService {
  authenticate(): Observable<boolean> {
    return timer(1000).pipe(
      first(),
      map(() => localStorage.getItem(LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.authenticated]) === 'true')
    )
  }
}

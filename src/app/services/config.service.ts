import {Injectable} from "@angular/core";
import {Observable, timer} from "rxjs";
import {first, tap} from "rxjs/operators";

@Injectable()
export class ConfigService {
  fetchConfigs(): Observable<any> {
    return timer(1000).pipe(
      first(),
      tap(() => console.log('Configurations available!')),
    )
  }
}

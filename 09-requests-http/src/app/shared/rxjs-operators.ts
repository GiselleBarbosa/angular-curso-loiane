import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { filter, map, pipe, tap } from "rxjs";

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: any) => res.body)
  );

}

export function uploadProgress<T>(callbackFn: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress)
      callbackFn(Math.round((event.loaded * 100) / event.total!))
  });
}
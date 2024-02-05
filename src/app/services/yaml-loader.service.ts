import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as yaml from 'js-yaml';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YamlLoaderService {

  constructor(private http: HttpClient) { }

  loadYaml(filePath: string): Observable<any> {
    return this.http.get(filePath, { responseType: 'text' })
      .pipe(map(yamlStr => yaml.load(yamlStr)));
  }
}

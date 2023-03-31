import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface LocalFile {
  name: string;
  icon: string;
  description: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalSearchService {

  constructor(
    private http: HttpClient
  ) {

  }

  // local backend url for file search
  // todo: move this to a config file or set up environment file
  apiUrl = 'https://localhost:7242/search'

  // private files: LocalFile[] = [
  //   { name: 'file1.txt', icon: 'iconUrl', description: 'file 1 description', type: 'file' },
  //   { name: 'file2.txt', icon: 'iconUrl', description: 'file 2 description', type: 'file' },
  //   { name: 'file3.txt', icon: 'iconUrl', description: 'file 3 description', type: 'file'  }
  // ];
  //
  // private apps: LocalFile[] = [
  //   { name: 'app1.exe', icon: 'iconUrl', description: 'app 1 description', type: 'app' },
  //   { name: 'app2.exe', icon: 'iconUrl', description: 'app 2 description', type: 'app' },
  //   { name: 'fileapp3.exe', icon: 'iconUrl', description: 'app 3 description', type: 'app' }
  // ];

  /*
  for frontend mock local search
   */
  // searchLocalSystem(query: string): Observable<LocalFile[]> {
  //   // can combine these into one filter operation
  //   const files = this.files.filter((file) =>
  //     file.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   const apps = this.apps.filter((app) =>
  //     app.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   return of(files.concat(apps));
  // }

  /*
  for backend mock local search
   */
  searchLocalSystem(query: string): any {
    return this.http.get(this.apiUrl, {
      params: { query }
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

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

  private files: LocalFile[] = [
    { name: 'file1.txt', icon: 'iconUrl', description: 'file 1 description', type: 'file' },
    { name: 'file2.txt', icon: 'iconUrl', description: 'file 2 description', type: 'file' },
    { name: 'file3.txt', icon: 'iconUrl', description: 'file 3 description', type: 'file'  }
  ];

  private apps: LocalFile[] = [
    { name: 'app1.exe', icon: 'iconUrl', description: 'app 1 description', type: 'app' },
    { name: 'app2.exe', icon: 'iconUrl', description: 'app 2 description', type: 'app' },
    { name: 'fileapp3.exe', icon: 'iconUrl', description: 'app 3 description', type: 'app' }
  ];

  searchLocalSystem(query: string): Observable<LocalFile[]> {
    // can combine these into one filter operation
    const files = this.files.filter((file) =>
      file.name.toLowerCase().includes(query.toLowerCase())
    );
    const apps = this.apps.filter((app) =>
      app.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(files.concat(apps));
  }
}

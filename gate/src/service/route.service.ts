import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}

  public activeRouter!: ActivatedRoute;

  initSearchData(): any {
    var index = location.hash.indexOf('?');
    var params = location.hash.substring(index + 1, location.hash.length);
    if (params != '') {
      params = params.replace(/&/g, '","').replace(/=/g, '":"');
      var obj = JSON.parse('{"' + params + '"}');
      obj = this.convertStringifyToJson(obj);
      params = obj;
    }
    return params;
  }
  changeUrl(search: any) {
    let newSearch = Object.assign({}, search);
    for (var name in newSearch) {
      if (Array.isArray(newSearch[name])) {
        newSearch[name] = JSON.stringify(newSearch[name]);
      }
    }
    this.router.navigate([], {
      relativeTo: this.activeRouter,
      queryParams: newSearch,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  convertStringifyToJson(obj: any): any {
    for (var name in obj) {
      if (obj[name] != '') {
        obj[name] = this.toUTF(obj[name]);
        this.activeRouter.queryParams.subscribe((params: Params) => {
          obj[name] = JSON.parse(params[name]);
        });
      }
    }
    return obj;
  }

  toUTF(str: string) {
    var str2 = decodeURI(str);
    return str2;
  }
}

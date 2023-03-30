import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // todo: dynamic truncation based on size of container
  transform(value: string, limit: number): string {
    if (!value) {
      return '';
    } else {
      if (!limit) throw new Error('limit must be specified');
    }

    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}

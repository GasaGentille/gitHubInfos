import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoCreatedAt'
})
export class RepoCreatedAtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

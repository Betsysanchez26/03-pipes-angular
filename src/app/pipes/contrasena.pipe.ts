import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    let password = '';

    if (activar) {
      for (let i = 0; i < value.length; i++) {
        password += '*';
      }
    } else {
      password = value;
    }
    return password;
  }

}

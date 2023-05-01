import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LanguagePipe implements PipeTransform {

  transform(lang:string){
    let language = new Intl.DisplayNames(['en'],{
      type:'language'
    })
    return language.of(lang)
    }

}

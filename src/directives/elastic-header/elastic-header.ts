import { Directive } from '@angular/core';

/**
 * Generated class for the ElasticHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[elastic-header]' // Attribute selector
})
export class ElasticHeaderDirective {

  constructor() {
    console.log('Hello ElasticHeaderDirective Directive');
  }

}

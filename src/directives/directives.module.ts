import { NgModule } from '@angular/core';
import { ElasticHeaderDirective } from './elastic-header/elastic-header';
import { BackgroundImageDirective } from './background-image/background-image';
@NgModule({
	declarations: [ElasticHeaderDirective,
    ElasticHeaderDirective,
    BackgroundImageDirective],
	imports: [],
	exports: [ElasticHeaderDirective,
    ElasticHeaderDirective,
    BackgroundImageDirective]
})
export class DirectivesModule {}

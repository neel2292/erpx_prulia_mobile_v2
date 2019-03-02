import { NgModule } from '@angular/core';
import { MobilePipe } from './mobile/mobile';
import { IcPipe } from './ic/ic';
@NgModule({
	declarations: [MobilePipe,
    IcPipe],
	imports: [],
	exports: [MobilePipe,
    IcPipe]
})
export class PipesModule {}

import { NgModule } from '@angular/core';

import { Jhipster6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Jhipster6SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Jhipster6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhipster6SharedCommonModule {}

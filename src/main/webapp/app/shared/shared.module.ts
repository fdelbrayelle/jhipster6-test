import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Jhipster6SharedLibsModule, Jhipster6SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Jhipster6SharedLibsModule, Jhipster6SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Jhipster6SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster6SharedModule {
  static forRoot() {
    return {
      ngModule: Jhipster6SharedModule
    };
  }
}

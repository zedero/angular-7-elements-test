import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@webcomponents/custom-elements';

import { AppComponent } from './app.component';
import { BimViewerComponent } from './bim-viewer/bim-viewer.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    BimViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [BimViewerComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(injector: Injector) {
    const acc = createCustomElement(BimViewerComponent, { injector });
    customElements.define('bim-viewer', acc);
  }
  ngDoBootstrap() {}
}

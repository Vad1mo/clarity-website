import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from "./news.component";
import {RELEASE_ROUTES} from "./release-page/release-pages";
import {BreakingChange} from './counters/breaking-change.directive';
import {BugFix} from "./counters/bug-fix.directive";
import {NewComponent} from "./counters/new-component.directive";

@NgModule({
  declarations: [
    NewsComponent,
    BreakingChange,
    BugFix,
    NewComponent,
    ...RELEASE_ROUTES.map(({component}) => component),
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: []
})
export class NewsModule { }

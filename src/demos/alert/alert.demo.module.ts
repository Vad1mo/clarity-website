/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {AlertStylesDemo} from "./static/alert-styles";
import {AlertContentAreaDemo} from "./static/alert-content-area";
import {AlertCardsDemo} from "./static/alert-cards";
import {AlertModalsDemo} from "./static/alert-modals";
import {AlertSizesDemo} from "./static/alert-sizes";
import {AlertAppLevelDemo} from "./static/alert-app-level";

import {AlertAngularAppLevelDemo} from "./angular/alert-angular-app-level";
import {AlertAngularNotClosableDemo} from "./angular/alert-angular-not-closable";
import {AlertAngularSuccessDemo} from "./angular/alert-angular-success";
import {AlertAngularSmallDemo} from "./angular/alert-angular-small";
import {AlertAngularCloseEventDemo} from "./angular/alert-angular-close-event";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        AlertStylesDemo,
        AlertContentAreaDemo,
        AlertCardsDemo,
        AlertModalsDemo,
        AlertSizesDemo,
        AlertAppLevelDemo,

        AlertAngularAppLevelDemo,
        AlertAngularNotClosableDemo,
        AlertAngularSuccessDemo,
        AlertAngularSmallDemo,
        AlertAngularCloseEventDemo
    ],
    exports: [
        AlertStylesDemo,
        AlertContentAreaDemo,
        AlertCardsDemo,
        AlertModalsDemo,
        AlertSizesDemo,
        AlertAppLevelDemo,

        AlertAngularAppLevelDemo,
        AlertAngularNotClosableDemo,
        AlertAngularSuccessDemo,
        AlertAngularSmallDemo,
        AlertAngularCloseEventDemo
    ]
})
export default class AlertDemoModule {
}

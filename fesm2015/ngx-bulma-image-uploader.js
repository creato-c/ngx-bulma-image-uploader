import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

class NgxBulmaImageUploaderService {
    constructor() { }
}
NgxBulmaImageUploaderService.ɵprov = ɵɵdefineInjectable({ factory: function NgxBulmaImageUploaderService_Factory() { return new NgxBulmaImageUploaderService(); }, token: NgxBulmaImageUploaderService, providedIn: "root" });
NgxBulmaImageUploaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxBulmaImageUploaderService.ctorParameters = () => [];

class NgxBulmaImageUploaderComponent {
    constructor(afStore) {
        this.afStore = afStore;
    }
    ngOnInit() { }
    addData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.afStore.doc('some/data').set({
                name: 'hoge',
            });
        });
    }
}
NgxBulmaImageUploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'biu-ngx-bulma-image-uploader',
                template: `
    <p>ngx-bulma-image-uploader works!</p>
    <button class="button is-primary" (click)="addData()">add</button>
  `
            },] }
];
NgxBulmaImageUploaderComponent.ctorParameters = () => [
    { type: AngularFirestore }
];

class NgxBulmaImageUploaderModule {
}
NgxBulmaImageUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxBulmaImageUploaderComponent],
                imports: [
                    AngularFireModule,
                    AngularFireAuthModule,
                    AngularFireStorageModule,
                    AngularFirestoreModule,
                    AngularFireMessagingModule,
                ],
                exports: [NgxBulmaImageUploaderComponent],
            },] }
];

/*
 * Public API Surface of ngx-bulma-image-uploader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxBulmaImageUploaderComponent, NgxBulmaImageUploaderModule, NgxBulmaImageUploaderService };
//# sourceMappingURL=ngx-bulma-image-uploader.js.map

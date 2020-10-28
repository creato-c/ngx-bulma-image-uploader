import { OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
export declare class NgxBulmaImageUploaderComponent implements OnInit {
    private afStore;
    constructor(afStore: AngularFirestore);
    ngOnInit(): void;
    addData(): Promise<void>;
}

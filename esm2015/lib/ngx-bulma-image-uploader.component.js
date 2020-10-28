import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
export class NgxBulmaImageUploaderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJ1bG1hLWltYWdlLXVwbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2xpYnRlc3QvcHJvamVjdHMvbmd4LWJ1bG1hLWltYWdlLXVwbG9hZGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnVsbWEtaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBVTNELE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBRyxDQUFDO0lBRWpELFFBQVEsS0FBVSxDQUFDO0lBRWIsT0FBTzs7WUFDWCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7R0FHVDthQUVGOzs7WUFUUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYml1LW5neC1idWxtYS1pbWFnZS11cGxvYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+bmd4LWJ1bG1hLWltYWdlLXVwbG9hZGVyIHdvcmtzITwvcD5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiAoY2xpY2spPVwiYWRkRGF0YSgpXCI+YWRkPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5neEJ1bG1hSW1hZ2VVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWZTdG9yZTogQW5ndWxhckZpcmVzdG9yZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgYXN5bmMgYWRkRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmFmU3RvcmUuZG9jKCdzb21lL2RhdGEnKS5zZXQoe1xuICAgICAgbmFtZTogJ2hvZ2UnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
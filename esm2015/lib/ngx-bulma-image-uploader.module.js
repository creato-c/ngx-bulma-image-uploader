import { NgModule } from '@angular/core';
import { NgxBulmaImageUploaderComponent } from './ngx-bulma-image-uploader.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirestoreModule } from '@angular/fire/firestore';
export class NgxBulmaImageUploaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJ1bG1hLWltYWdlLXVwbG9hZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2xpYnRlc3QvcHJvamVjdHMvbmd4LWJ1bG1hLWltYWdlLXVwbG9hZGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnVsbWEtaW1hZ2UtdXBsb2FkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBYWpFLE1BQU0sT0FBTywyQkFBMkI7OztZQVh2QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzlDLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4QnVsbWFJbWFnZVVwbG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtYnVsbWEtaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVNZXNzYWdpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ3hCdWxtYUltYWdlVXBsb2FkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhckZpcmVNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSxcbiAgICBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlTWVzc2FnaW5nTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTmd4QnVsbWFJbWFnZVVwbG9hZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4QnVsbWFJbWFnZVVwbG9hZGVyTW9kdWxlIHt9XG4iXX0=
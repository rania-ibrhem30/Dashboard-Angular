import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss']
})
export class RegsiterComponent {
  items: MenuItem[] | undefined;


     
  ngOnInit() {
    this.items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                  
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                   
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Angular',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]
        }
    ];
}




}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Title } from '../../models/models.title';
import {DataService} from '../../services/app.service.title';

@Component({
    selector: 'title-list',
    templateUrl: 'app/components/list/list.component.html',
    providers: [DataService]
})
export class ListComponent {
    titles: Observable<Array<any>>;
    selectedTitle: Title;
    currentPage: number = 1;
    totalItems: number = 64;

    private dataService: DataService;
    constructor(private service: DataService) {
        this.dataService = service;
    }

    ngOnInit() {
        this.titles = this.dataService.getAll();
    }

    onSelect(title: Title): void {
        this.selectedTitle = title;
    }

}

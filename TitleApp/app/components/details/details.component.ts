import { Component, Input } from '@angular/core';
import { Title } from '../../models/models.title';

@Component({
    selector: 'title-details',
    templateUrl: 'app/components/details/details.component.html'
})
export class DetailsComponent {
    @Input() title: Title;
}


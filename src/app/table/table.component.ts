import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  placeholder: any[] = [];

  constructor(private service: PlaceholderService) {}

  ngOnInit(): void {
      this.service.posts().subscribe(
        json => this.placeholder = json
      )
  }
}

import { Component } from '@angular/core';
import { SubjectComponent } from '../subject/subject.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SubjectComponent,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  subjects = ["Chemistry","Biology","Math","Physics","English","History","Geography","Economics"]

}

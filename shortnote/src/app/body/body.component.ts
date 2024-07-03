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
  subject = 'Chemistry'
  subject2 = 'Bio'
  subjects = ["chemo","bio","math","phy","eng"]
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NoteComponent,HeaderComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shortnote';
}

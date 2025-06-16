import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name= User.name;
  listaNombres=['Alice', 'Bob', 'Charlie', 'Diana'];
  trabajos = ['teacher', 'police', 'firefighter'];

  responseCode = Number ||null;
  responseUser = User ||null ;
  responseText = '';


  onSubmit(){
    if(!this.listaNombres.includes(this.name)){
      alert('Nombre no valido')
    }

  }

}

import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserModel } from '../modeles/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  $users: Observable<any[]>;
  courseRef: AngularFirestoreCollection<any>;
  courses$: Observable<any[]>;

   userCount = 0; 

  constructor(private db: AngularFirestore,
    private userService: UserService) {

    this.$users = db.collection('User').valueChanges();

    this.$users.subscribe((users: UserModel[]) => {
      this.userService.latestId = users.length;
      this.userCount = users.length;
        console.log(this.userService.latestId)
    }); 
  
    }

  ngOnInit() {
  }


}
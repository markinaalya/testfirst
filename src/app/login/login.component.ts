import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserModel } from '../modeles/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  user: UserModel;
  subscription: any;
  isShown: boolean = false;

  constructor(private db: AngularFirestore,
    private route: ActivatedRoute,
    private userService: UserService) {

   }

  ngOnInit() {
     const docId = this.route.snapshot.paramMap.get('id');
    if (docId !== null) {
      this.getSpecificUser(docId);
    } else {
      this.userService.addNewUser();
      this.user = { ...this.userService.user };
      this.isShown = true;
      }

  }

    getSpecificUser(docId: string) {
    const docRef = this.db.collection('User').doc(docId);
    this.subscription = docRef.valueChanges().subscribe((item: UserModel) => {
      this.user = { ...item };
      this.isShown = true;
    });
  }

  ngOnChanges() {
  }

  UserChange() {
     this.user =
          {
            ...this.user,
            id: ++this.userService.latestId
          };
      this.db.collection('User').doc(this.user.id.toString()).set(this.user)
    }

    ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
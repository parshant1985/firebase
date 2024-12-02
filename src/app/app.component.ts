import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { collection,getFirestore, collectionData, Firestore,addDoc , updateDoc, deleteField, doc, deleteDoc, initializeFirestore} from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { from, Observable } from 'rxjs';

interface Item {
  Name: string,
  price:number
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, AsyncPipe,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
delData(arg0: { "": any; }) {
throw new Error('Method not implemented.');
}
  title = 'angular-main';
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'marble_rj');
    this.item$ = collectionData<Item>(itemCollection);
    
  }

  addData() {
   // return this.firestore.collection(collection).add(data);
   return addDoc(collection(this.firestore, 'marble_rj'), {
    Name: "John",
    price: 34,
    id:Number
    
  });



  }
  delmData(obj:any) {
    
    return collection(this.firestore, `marble_rj/${obj.uid}`);
  }
   
}


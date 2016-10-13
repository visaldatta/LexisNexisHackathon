import { Component } from '@angular/core';
import {User} from './user.ts';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls:['./app/app.component.css']
})
export class AppComponent {
    showList: boolean;
    showChat: boolean;
    selectedGroup: string;
    users: User[];
    constructor(){
        this.showList = false;
        this.showChat=false;
        this.users = [{id: 1,name: "Steve Jobs",source: "https://robohash.org/joe"},{id: 2,name: "Bill Gates",source: "https://robohash.org/nah"},{id: 3,name: "Mark Zuckerberg",source: "https://robohash.org/ok" },{id: 4,name: "Denzel Washington",source: "https://robohash.org/hi"}];
    }
        ShowList(){
        this.showList= !this.showList;
    
    }
    ShowChat(username: string){
        console.log(username);
        this.showChat = true;
        this.selectedGroup = username;
    }
 }

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    info:any;
    comments=[];
   commentaire={date:new Date(),message:""};
  constructor(private contactService: ContactService) { 
    this.info=this.contactService.getInfo();
    this.comments=this.contactService.getAllCommentaire();
  }

  ngOnInit() {
  }
  addcommentaire(c){
    this.contactService.addcommentaire(c);
    this.commentaire.message ="";
    this.comments=this.contactService.getAllCommentaire(); 
  }

}

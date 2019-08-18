import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  info={
    nom:"gora",
    prenom:"mbaye",
    age:30
    
  };
  comments=[
    {date:new Date(), message:"bonsoire"},
    {date:new Date(),message:"Bonne nuit"}
  ];
  constructor() {
  }
  addcommentaire(c){
    c.date=new Date();
    this.comments.push(c);
  }
  getAllCommentaire(){
  return this.comments;
  }
  getInfo(){
    return this.info;
  }
}

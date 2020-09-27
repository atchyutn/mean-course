import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {
  public textArea: string = '';
  public postContent: string = 'No Content';

  constructor() { }

  ngOnInit(): void {
  }

  onPostSubmit(){
    this.postContent = this.textArea;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts = [
    {title: 'First post', content: 'this is the summary of the first post'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

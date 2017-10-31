import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/article.model';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [
    new Article('Article 1', 'text1'),
    new Article('Article 2', 'text2'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

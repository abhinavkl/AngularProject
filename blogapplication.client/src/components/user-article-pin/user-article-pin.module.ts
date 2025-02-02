import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { ArticleModule } from '../article/article.module';
import { SharedModule } from '../../shared/shared.module';
import { UserArticlePinRoutingModule } from './user-article-pin-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    UserIndexComponent
  ],
  imports: [
    CommonModule, ArticleModule, SharedModule, UserArticlePinRoutingModule, DragDropModule
  ]
})
export class UserarticlepinModule { }

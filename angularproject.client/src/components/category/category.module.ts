import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { IndexComponent } from './index/index.component';
import { ArticleModule } from '../article/article.module';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    ModelComponent, IndexComponent
  ],
  imports: [
    CommonModule, ArticleModule,CategoryRoutingModule
  ]
})
export class CategoryModule { }

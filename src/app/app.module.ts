import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { ChartModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BooksService } from './services/books.service';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    ContainerComponent, ListItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule, ChartModule,
    DataTableModule,
    SharedModule, TableModule,
    FlexLayoutModule,
    HttpClientModule,

  ],
  providers: [
    BooksService],

  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { DataTableModule, SharedModule, DropdownModule, TooltipModule, CheckboxModule, DataGridModule, AutoCompleteModule, GMapModule, DialogModule, CalendarModule, RadioButtonModule, AccordionModule, TabViewModule, ChipsModule } from 'primeng/primeng';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { OverlayPanelModule } from "primeng/components/overlaypanel/overlaypanel";
import { MultiSelectModule } from 'primeng/primeng';
import { SizePipe } from './utils/pipes/size.pipe';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from 'primeng/primeng';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import  {  TableModule  }  from  'primeng/table';
import { BooksService } from './services/books.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    ContainerComponent,ListItemComponent,
    SizePipe,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule, ChartModule,
    DataTableModule,
    SharedModule, TableModule,
    DropdownModule,
    TooltipModule,
    AutoCompleteModule,
    DialogModule,
    CalendarModule,
    MultiSelectModule,
    AccordionModule,
    TabViewModule,
    ChipsModule,
    OverlayPanelModule,
    FlexLayoutModule,
    CheckboxModule,
    DataGridModule, HttpClientModule,
    GMapModule,
    NgxChartsModule
  ],
  providers: [
    SlimLoadingBarService,
    BooksService],

  bootstrap: [AppComponent]
})
export class AppModule { }

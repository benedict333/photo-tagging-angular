import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { TagFormComponent } from './tag-form/tag-form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service'; // Import the DataService


@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    TagFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
    FormsModule, // Add FormsModule here
  ],
  providers:  [DataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

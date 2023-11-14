import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { NotfoudComponent } from './pages/notfoud/notfoud.component';
import { ListHomeComponent } from './components/list-home/list-home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductListComponent } from './pages/admin/product/product-list/product-list.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    HomeComponent,
    BaseLayoutComponent,
    LayoutAdminComponent,
    HeaderComponent,
    FotterComponent,
    NotfoudComponent,
    ListHomeComponent,
    SigninComponent,
    DetailComponent,
    SignupComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    DropdownModule,
    TagModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

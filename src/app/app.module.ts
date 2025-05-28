import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProdutosCadastroComponent } from './components/produtos-cadastro/produtos-cadastro.component';
import { ProdutosConsultaComponent } from './components/produtos-consulta/produtos-consulta.component';
import { ProdutosEdicaoComponent } from './components/produtos-edicao/produtos-edicao.component';
import { MovimentacoesCadastroComponent } from './components/movimentacoes-cadastro/movimentacoes-cadastro.component';
import { MovimentacoesConsultaComponent } from './components/movimentacoes-consulta/movimentacoes-consulta.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    ProdutosCadastroComponent,
    ProdutosConsultaComponent,
    ProdutosEdicaoComponent,
    MovimentacoesCadastroComponent,
    MovimentacoesConsultaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //registrando as rotas do projeto
    FormsModule, //registrando a biblioteca de formulários
    ReactiveFormsModule, //registrando a biblioteca de formulários
    HttpClientModule //registrando a biblioteca HttpClient
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProdutosCadastroComponent } from './components/produtos-cadastro/produtos-cadastro.component';
import { ProdutosConsultaComponent } from './components/produtos-consulta/produtos-consulta.component';
import { ProdutosEdicaoComponent } from './components/produtos-edicao/produtos-edicao.component';
import { MovimentacoesCadastroComponent } from './components/movimentacoes-cadastro/movimentacoes-cadastro.component';
import { MovimentacoesConsultaComponent } from './components/movimentacoes-consulta/movimentacoes-consulta.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';


//mapear rotas para cada componente criado no projeto
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, 
    //página inicial do projeto
  { path: 'login', component: LoginComponent },
  { path: 'produtos-cadastro', component: ProdutosCadastroComponent, 
           canActivate: [AuthGuard] },
  { path: 'produtos-consulta', component: ProdutosConsultaComponent, 
           canActivate: [AuthGuard] },
  { path: 'produtos-edicao/:id', component: ProdutosEdicaoComponent, 
           canActivate: [AuthGuard] },
  { path: 'movimentacoes-cadastro', component: 
           MovimentacoesCadastroComponent, canActivate: [AuthGuard] },
  { path: 'movimentacoes-consulta', component: 
           MovimentacoesConsultaComponent, canActivate: [AuthGuard] }
];


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
    RouterModule.forRoot(routes), //registrando as rotas do projeto
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



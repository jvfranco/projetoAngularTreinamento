import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario.model';

@Component({
  selector: 'listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  private funcionarios: Funcionario[] = [];
  private hasMore: boolean = false;

  constructor(
    private service: FuncionarioService
  ) { }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  private carregarFuncionarios() {
    this.service.listarFuncionario()
      .subscribe(response => {
        this.hasMore = response.hasNext;
        this.funcionarios = response.items;
      });
  }

  public cadastrarFuncionario() {

  }

}

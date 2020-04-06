import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  private funcionario: Funcionario = new Funcionario();
  private form: FormGroup;
  private erro: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(70)]],
      telefone: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required]
    });
  }

  public cadastrarFuncionario() {
    this.funcionario = this.form.getRawValue() as Funcionario;
    this.service.cadastrarFuncionario(this.funcionario)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}

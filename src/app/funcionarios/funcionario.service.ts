import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Resposta } from './resposta.model';
import { Funcionario } from './funcionario.model';

const PATH: string = 'http://localhost:8080/api/f1'

@Injectable({ providedIn: 'root' })
export class FuncionarioService {

    constructor(private http: HttpClient) { }

    public listarFuncionario() {
        return this.http.get<Resposta>(PATH);
    }

    public cadastrarFuncionario(funcionario: Funcionario) {
        return this.http.post(PATH, funcionario);
    }


}
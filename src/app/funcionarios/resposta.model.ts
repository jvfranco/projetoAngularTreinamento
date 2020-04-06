import { Funcionario } from './funcionario.model';

export interface Resposta {
    hasNext: boolean;
    items: Funcionario[];
}
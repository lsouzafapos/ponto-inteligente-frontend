import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from '@angular/material/table';
import { Lancamento, LancamentoService } from "src/app/shared";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  constructor(
    private lancamentoService: LancamentoService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.lancamentoService.listarTodosLancamentos().subscribe(
        data => {
          const lancamentos = data['data'] as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        },
        err => {
          const msg: string = "Erro obtendo lancamentos";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
    }
}
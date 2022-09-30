import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { Sort } from "@angular/material/sort";
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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private lancamentoService: LancamentoService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.lancamentoService.listarTodosLancamentos().subscribe(
        data => {
          const lancamentos = data['data'] as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        err => {
          const msg: string = "Erro obtendo lancamentos";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
    }
}
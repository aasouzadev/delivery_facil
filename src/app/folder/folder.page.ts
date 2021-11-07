import { Produto } from './../models/produto/produto';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public oferta;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    this.oferta = this.readOferta();

   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
readOferta(){
  this.apiService.readOferta().subscribe(data => {
    console.log(data);
    this.oferta = data;
  });
  
}
}

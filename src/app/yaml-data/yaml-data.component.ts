import { Component, OnInit } from '@angular/core';
import { YamlLoaderService } from '../services/yaml-loader.service'; // Assicurati di utilizzare il percorso corretto

@Component({
  selector: 'app-yaml-data', // Il selettore del componente
  templateUrl: './yaml-data.component.html', // Il percorso al modello HTML del componente
  styleUrls: ['./yaml-data.component.css'] // Gli stili del componente (se necessari)
})
export class YamlDataComponent implements OnInit {
  yamlData: any;

  constructor(private yamlLoader: YamlLoaderService) {} // Iniezione del servizio

  ngOnInit() {
    this.yamlLoader.loadYaml('assets/json-to-yaml.yaml').subscribe(
      data => {
        this.yamlData = data;
        console.log(this.yamlData);
        // Ora puoi utilizzare 'this.yamlData' come desideri nel tuo componente
      },
      error => {
        console.error('Si è verificato un errore durante il caricamento del file YAML', error);
      }
    );
  }
}

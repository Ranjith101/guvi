import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SampleService]
})
export class AppComponent implements OnInit {
  title = 'guvi';
  newServerName: string = '';
  newServerContent: string = '';
  // serverElements = [{ type: 'server', name: 'Ranjith', content: 'Content' }];
  serverElements:any;
  constructor(private sampleService:SampleService){}
  AddServer(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server',
    });
  }

  AddBlueprint(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'blueprint',
    });
  }

  ngOnInit(): void {
    this.serverElements = this.sampleService.getServerDetails()
    debugger;
  }
}

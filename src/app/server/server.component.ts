import { element } from 'protractor';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerComponent implements OnInit {
  serverId:number=10;
  serverName:string="Server 1";
  allowServer:boolean=false;
  servercreated: boolean = false;
  setlist:any[]=[1,2,3,4,5,6,7,8];
  serverStatus:string="offline";
  color:string = 'yellow';
  hcolor:string = 'yellow';
  value:any = "21"
  @Input() element:{type:string,name:string,content:string} //@input dec is used to fetch input from users

  constructor() {
    setTimeout(()=>{
      this.allowServer=true;
    },2000),
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
   }

  ngOnInit(): void {
  }

  getServerName(){
    // this.serverName="Btnserver"
 this.servercreated =  true
  }

  getStatus(){
  return  this.serverStatus === 'online' ? 'green' : 'red';
  }

  onUpdate(event:any){
    this.serverName=event.target.value;
  }
}

import { Component, ElementRef, EventEmitter, OnInit,Output, ViewChild } from '@angular/core'; // Import EventEmitter from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output()  blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>(); // Corrected the typo here
  newServerName: string;
  newServerContent: string;
  @ViewChild('serverContent') serverContent: ElementRef;
  @ViewChild('serverName') serverName:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  AddServer() {
    // console.log( )

    this.serverCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value, //viewChild method
    });
  }

  AddBlueprint() {
    // this.serverContent.nativeElement.value = "test"
    this.blueprintCreated.emit({ // Corrected the typo here
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value, //viewChild method
    });
  }
}

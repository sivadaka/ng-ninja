import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    showText = false;
    log: any = [];

    isDisplay() {
        this.showText = !this.showText;
        this.log.push(new Date());
    }
}
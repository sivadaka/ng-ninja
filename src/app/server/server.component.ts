import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {

    name = '';
    serverCreated = false;
    serverId = Math.round(Math.random() * 100);
    serverStatus = '';

    isServerCreated() {
        this.serverCreated = true;
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5? 'Online': 'Offline';
    }
    checkServerStatus() {
        return this.serverStatus;
    }

    setColor() {
        return this.serverStatus === 'Online'? 'green': 'red';
    }
}
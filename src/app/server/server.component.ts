import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId: string = '123';
    serverName: string = 'Eu_london';
    isTrue = true;

    getServerName() {
        return this.serverName;
    }

    constructor() {
        setTimeout(() => {
            this.isTrue = false;
        }, 2000);
    }
}
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    name = '';
    serverCreated = false;
    serverId = 2;

    isServerCreated() {
        this.serverCreated = true;
    }
}
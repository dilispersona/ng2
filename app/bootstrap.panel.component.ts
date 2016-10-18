import { Component } from 'angular2/core';  

@Component({
    selector: 'bs-panel',
    template: `
        <div class="panel panel-default">
  <div class="panel-heading">P</div>
  <div class="panel-body">
    <ng-content></ng-content>
  </div>
</div>
    `
})

export class BootstrapPanelComponent {

}
import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-child',
    template: `
        <div>子组件</div>
        <div>父组件传给子组件的值：{{birth}}</div>
        <button (click)="handleClick($event)">传值给父组件</button>
        <input type="text" (keydown.shift.alt)="handleKeydown()" />

        <div>
            单槽内容投影：
            <ng-content></ng-content>

            多槽内容投影：
            <ng-content select="[selector]"></ng-content>
        </div>
        <span>span内容</span>
    `,
    styles: []
})

export class ChildComponent {
    public childValue = 10;
    @Input() public birth;
    @Output() public sendChild = new EventEmitter()
    @Input() public size;
    @Output() public sizeChange = new EventEmitter()
    public handleClick(a) {
        console.log('11', a);
        this.sendChild.emit(this.childValue)
        this.sizeChange.emit('16px')
    }
    public handleKeydown() {
        console.log('鼠标事件shift');
    }
}
import { Component, Input } from '@angular/core'

// import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hello-world', // 定义组件名，在组建中使用时，以此名字为标准
    templateUrl: './hello-world.component.html', // template定义html模板  templateUrl引入外部html文件作为模板
    styles: ['h1 { color: red; }', '.textcolor { color: skyblue; }', '.weight { font-weight: 500; }'], // styles定义css样式   styleUrls引入外部定义的css样式文件
})

export class HelloWorldComponent { // 暴露出去的组件名，用于组件注册声明
    public hasTextStyle = true;
    public size = '12px';
    public myStyles = {
        'font-size': '20px',
        color: 'skyblue'
    }
    public myStyles1 = {
        'textcolor': true,
        'weight': 1
    }
    public birth = new Date(1998, 12, 16)
    public logInfo(e, num: number): void {
        console.log('打印信息');
        console.log(e, num);
    }
    public logInfo1() {
        console.log('打印信息1');
    }
    public cssName1 = 'textcolor'
    public arr = [2, 2, 2, 4, 6]
    public val = 10
    public val1 = 11
    public getVal(e) {
        console.log(e);
    }
    public currentClass = {}
    @Input() public title
    ngOnInit() {
        console.log('hello world  ngOnInit');
    }
    public getChild(params) {
        console.log('子组件的值:', params);
    }
}
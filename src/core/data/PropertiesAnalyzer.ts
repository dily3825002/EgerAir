/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

module RES {

    // 读取本地数据，重度或重度游戏使用
    // 使用方式如下
    // resource.json填写
    // {"name":"ui_text","type":"prop","url":"assets/text/ui.properties"}

    // ui.properties填写

    // ok=确认
    // cancel=取消

    // main.ts填写
    // egret.Injector.mapClass(RES.AnalyzerBase,RES.PropertiesAnalyzer,RES.PropertiesAnalyzer.TYPE);
    // okButton.label = RES.getRes("ui_text.ok");
    export class PropertiesAnalyzer extends BinAnalyzer{
        public static TYPE:string = "prop";

        public constructor(){
            super();
            this._dataFormat = egret.URLLoaderDataFormat.TEXT;
        }

        /**
         * @inheritDoc
         */
        public getRes(name:string):any{
            var tail:string = RES.AnalyzerBase.getStringTail(name);
            return this.fileDic[tail];
        }
        /**
         * 解析并缓存加载成功的数据
         */
        public analyzeData(resItem:ResourceItem,data:any):void{
            if(!data){
                return;
            }

            var str:string = <string>data;
            var arr:string[] = str.split(new RegExp("\r\n", "gi"));

            var len:number = arr.length;
            for( var i:number=0; i<len; i++) {
                var flag:number = arr[i].indexOf("=");
                if( flag>1 ) {
                    this.fileDic[arr[i].substring(0,flag)] = arr[i].substring(flag+1);
                }
            }
        }
    }
}

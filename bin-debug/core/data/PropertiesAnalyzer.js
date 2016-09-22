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
var RES;
(function (RES) {
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
    var PropertiesAnalyzer = (function (_super) {
        __extends(PropertiesAnalyzer, _super);
        function PropertiesAnalyzer() {
            _super.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT;
        }
        var d = __define,c=PropertiesAnalyzer,p=c.prototype;
        /**
         * @inheritDoc
         */
        p.getRes = function (name) {
            var tail = RES.AnalyzerBase.getStringTail(name);
            return this.fileDic[tail];
        };
        /**
         * 解析并缓存加载成功的数据
         */
        p.analyzeData = function (resItem, data) {
            if (!data) {
                return;
            }
            var str = data;
            var arr = str.split(new RegExp("\r\n", "gi"));
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var flag = arr[i].indexOf("=");
                if (flag > 1) {
                    this.fileDic[arr[i].substring(0, flag)] = arr[i].substring(flag + 1);
                }
            }
        };
        PropertiesAnalyzer.TYPE = "prop";
        return PropertiesAnalyzer;
    }(RES.BinAnalyzer));
    RES.PropertiesAnalyzer = PropertiesAnalyzer;
    egret.registerClass(PropertiesAnalyzer,'RES.PropertiesAnalyzer');
})(RES || (RES = {}));
//# sourceMappingURL=PropertiesAnalyzer.js.map
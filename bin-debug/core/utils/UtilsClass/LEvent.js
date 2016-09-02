/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LEvent
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 自定义事件类
     */
    var LEvent = (function (_super) {
        __extends(LEvent, _super);
        function LEvent(type, obj, bubbles, cancelable) {
            if (obj === void 0) { obj = null; }
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type, bubbles, cancelable);
            this.CLASS_NAME = "LEvent";
            if (obj) {
                this._obj = obj;
            }
        }
        var d = __define,c=LEvent,p=c.prototype;
        p.clone = function (obj) {
            return new LEvent(this.type, obj ? obj : this._obj, this.bubbles, this.cancelable);
        };
        p.toString = function () {
            console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        };
        d(p, "param"
            /**
             * 传参获取
             * @returns {Object}
             */
            ,function () {
                return this._obj;
            }
        );
        return LEvent;
    }(egret.Event));
    lcp.LEvent = LEvent;
    egret.registerClass(LEvent,'lcp.LEvent');
})(lcp || (lcp = {}));
//# sourceMappingURL=LEvent.js.map
/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LListener
 * @constructor
 */
// 使用方法
//  sp.touchEnabled=true;//开启触点事件
// //单击
// sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
//     console.log("我单击了圆",e.stageX,e.stageY);
//     //全局侦听发送消息和自定义事件,这里的自定义事件,也可以自己封装成强类型即可,比如LEvent.MYCIRCLE
//     lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent("mycircle",.1,false));
//     //元件自身发送消息和自定义事件,同上
//     sp.dispatchEvent(new lcp.LEvent("mycircle1",.5));
// },this);
// //当前元件侦听自定义事件获取数据
// sp.addEventListener("mycircle1",(e)=>{
//    console.log(e.param);//自定义事件参数param,可以传入任意对象,然后自行解析即可.
//    sp.y=1000*parseFloat(e.param);
// },this);
// //全局侦听自定义事件获取数据
// lcp.LListener.getInstance().addEventListener("mycircle",(e)=>{
//     console.log(e.param);//同上
//     sp.alpha=parseFloat(e.param);
// },this);
var lcp;
(function (lcp) {
    /**
     * 全局侦听类及消息处理
     */
    var LListener = (function () {
        function LListener() {
            this.CLASS_NAME = "LListener";
            this.isInit = false;
            if (this.isInit) {
            }
            if (this._dispatcher == null) {
                this._dispatcher = new egret.EventDispatcher();
                this.isInit = true;
            }
        }
        var d = __define,c=LListener,p=c.prototype;
        LListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new LListener();
            return this._instance;
        };
        p.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        p.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
        };
        p.hasEventListener = function (type) {
            return this._dispatcher.hasEventListener(type);
        };
        p.willTrigger = function (type) {
            return this._dispatcher.willTrigger(type);
        };
        p.dispatchEvent = function (event) {
            return this._dispatcher.dispatchEvent(event);
        };
        p.toString = function () {
            return this._dispatcher.toString();
        };
        return LListener;
    }());
    lcp.LListener = LListener;
    egret.registerClass(LListener,'lcp.LListener');
})(lcp || (lcp = {}));
//# sourceMappingURL=LListener.js.map
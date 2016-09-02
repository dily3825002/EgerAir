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

module lcp{
    /**
     * 全局侦听类及消息处理
     */
    export class LListener{
        public CLASS_NAME:string = "LListener";
        private static _instance:LListener;
        private _dispatcher:egret.EventDispatcher;
        private isInit:boolean = false;
        public constructor(){
            if(this.isInit){
//                egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,请实例Lcp."+this.CLASS_NAME+".getInstance()开始");
            }
            if(this._dispatcher == null){
                this._dispatcher = new egret.EventDispatcher();
                this.isInit = true;
            }
        }

        public static getInstance():LListener{
            if(this._instance==null)
                this._instance = new LListener();
            return this._instance;
        }

        public addEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false,priority:number=0):void{
            this._dispatcher.addEventListener(type,listener,thisObject,useCapture,priority);
        }

        public removeEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false):void{
            this._dispatcher.removeEventListener(type,listener,thisObject,useCapture);
        }

        public hasEventListener(type:string):boolean
		{
			return this._dispatcher.hasEventListener(type);
		}

        public willTrigger(type:string):boolean
		{
			return this._dispatcher.willTrigger(type);
		}

        public dispatchEvent(event:LEvent):boolean {
			return this._dispatcher.dispatchEvent(event);
		}

        public toString():string
		{
			return this._dispatcher.toString();
		}
    }
}
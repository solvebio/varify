define(["underscore","backbone","./config","./channels","./utils","plugins/js","plugins/jquery-ajax-queue",void 0===JSON?"json2":null],function(t,e,i,n,s){var o={version:"2.2.24",minSerranoVersion:"2.0.16",maxSerranoVersion:"2.3.4",getSerranoVersion:function(){return this.session?this.utils.cleanVersionString(this.session.version):void 0},isSupported:function(t){var e=this.minSerranoVersion,i=this.maxSerranoVersion,n=this.getSerranoVersion();return s.versionIsLt(n,i)&&(i=n),s.versionInRange(t,e,i)},config:new i.Config(this.cilantro),utils:s};return t.extend(o,e.Events,n),o});
//@ sourceMappingURL=core.js.map
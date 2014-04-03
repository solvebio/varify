define(["underscore","backbone","marionette"],function(t,e,n){var i=e.Model.extend({defaults:{level:"info",timeout:4e3,dismissable:!0,header:null,message:""}}),o=n.ItemView.extend({className:"alert",template:"notification",ui:{dismiss:"[data-dismiss]",header:"h4",message:"div"},events:{"click [data-dismiss]":"dismiss",mouseover:"hold",mouseout:"release"},dismiss:function(){clearTimeout(this._dismissTimer)},hold:function(){this._startTime&&(clearTimeout(this._dismissTimer),this.$el.stop().show())},release:function(){if(this._startTime){var t=this._startTime+this.model.get("timeout"),e=Math.max(t-(new Date).getTime(),1e3),n=this;this._dismissTimer=setTimeout(function(){n.$el.fadeOut()},e)}},onRender:function(){this.$el.addClass("alert-"+this.model.get("level")),this.ui.header.toggle(!!this.model.get("header")),this.ui.dismiss.toggle(this.model.get("dismissable"));var t=this.model.get("timeout");t&&(this._startTime=(new Date).getTime(),this.release())}}),r=n.CollectionView.extend({className:"notifications",itemView:o,constructor:function(i){i=i||{},i.collection||(i.collection=new e.Collection),n.CollectionView.prototype.constructor.call(this,i),t.bindAll(this,"notify")},notify:function(t){"string"==typeof t&&(t={message:t});var e=new i(t);return this.collection.add(e),this.children.findByModel(e)}});return{Notifications:r,Notification:o}});
//@ sourceMappingURL=notify.js.map
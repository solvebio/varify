define(["jquery","underscore","marionette"],function(t,e,n){var i=n.ItemView.extend({align:"center",constructor:function(t){if(n.ItemView.prototype.constructor.call(this,t),!this.template)if(this.options.template)this.template=this.options.template;else{var i=[],s=e.result(this.options,"icon")||e.result(this,"icon"),o=e.result(this.options,"message")||e.result(this,"message");s&&i.push(s),o&&i.push(o),this.template=function(){return i.join(" ")}}this.align&&this.$el.css("text-align",this.align)}}),s=i.extend({className:"empty-view",icon:'<i class="icon-info"></i>',message:"No data available"}),o=s.extend({className:"empty-search-view",icon:'<i class="icon-search icon-2x"></i>',message:"We could not find anything related to your search"}),r=i.extend({className:"error-view",icon:'<i class="icon-exclamation"></i>',message:"Something went awry.."}),a=r.extend({className:"error-overlay-view",template:"base/error-overlay",onRender:function(){t(this.options.target).css("position","relative").append(this.$el)}}),u=i.extend({className:"load-view",icon:'<i class="icon-spinner icon-spin"></i>',message:"Loading..."});return{EmptyView:s,EmptySearchView:o,ErrorView:r,ErrorOverlayView:a,LoadView:u}});
//@ sourceMappingURL=base.js.map
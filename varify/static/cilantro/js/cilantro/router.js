define(["backbone","underscore","loglevel"],function(t,e,n){var i=t.Router.extend({options:{main:"body",root:null},initialize:function(t){this.options=e.extend({},e.result(this,"options"),t),this._loaded=[],this._routes={},this._handlers={},this._registered={},e.bindAll(this,"_unloadAll","_loadAll","_unload","_load","_render")},_unloadAll:function(){var t=[].slice.call(arguments);e.each(this._loaded.slice(),function(e){this._unload.apply(this,[this._registered[e],!1].concat(t))},this)},_loadAll:function(t){var n=this._routes[t];if(n){var i=[].slice.call(arguments,1);e.each(n,function(t){this._load.apply(this,[this._registered[t]].concat(i))},this)}},_unload:function(e,n){void 0===n&&(n=!0);var i=this._loaded.indexOf(e.id);if((e.route||n&&i>=0)&&(this._loaded.splice(i,1),e._view)){e._view.$el.hide();var s=[].slice.call(arguments,2);e._view.trigger.apply(e._view,["router:unload",this,t.history.fragment].concat(s))}},_load:function(t){var i=[].slice.call(arguments,1);if(!t._view){if(e.isString(t.view)){var s=this;return require([t.view],function(e){t._view=new e(t.options),s._render.apply(s,[t].concat(i)),s._loaded.push(t.id)},function(t){n.error(t)}),void 0}t._view=t.view}this._render.apply(this,[t].concat(i)),this._loaded.push(t.id)},_render:function(e){var n=[].slice.call(arguments,1),i=e._view;if(!i._rendered&&(i._rendered=!0,e.el!==!1)){var s;s=e.el?t.$(e.el,this.options.main):t.$(this.options.main),s.append(i.el),i.render()}i.$el.show(),i.trigger.apply(i,["router:load",this,t.history.fragment].concat(n))},_register:function(t){if(this._registered[t.id])throw new Error('Route "'+t.id+'" already registered');if(t=e.clone(t),t.route){if(!this._handlers[t.route]){this._routes[t.route]=[];var n=e.bind(function(){var e=[].slice.call(arguments);this._unloadAll.apply(this,e),this._loadAll.apply(this,[t.route].concat(e))},this);this._handlers[t.route]=n,this.route(t.route,t.id,n)}}else this._load(t);t.route&&this._routes[t.route].push(t.id),this._registered[t.id]=t},get:function(t){return this._registered[t]},isNavigable:function(t){var e=this.get(t);return e&&e.navigable!==!1},isCurrent:function(n){if(n===t.history.fragment)return!0;var i=this._routes[t.history.fragment]||[];return e.any(i,function(t){return n===t})},hasRoute:function(t){return this._routes.hasOwnProperty(t)},navigate:function(e,n){return this.isNavigable(e)&&(e=this.get(e).route),t.Router.prototype.navigate.call(this,e,n)},register:function(t){t&&(e.isArray(t)||(t=[t]),e.each(t,function(t){t.view&&this._register(t)},this))},unregister:function(t){if(void 0===t)return e.each(this._registered,function(t,e){this.unregister(e)},this),void 0;var n=this._registered[t];if(!n)throw new Error('No route registered by id "'+t+'"');this._unload(n),delete this._registered[t];var i=this._routes[n.route];i&&i.indexOf(t)>=0&&this._routes[n.route].splice(i.indexOf(t),1)},start:function(n){if(!t.History.started){var i=this.options.root||"/";return"/"!==i.charAt(i.length-1)&&(i+="/"),n=e.extend({root:i,pushState:!0},n),t.history.start(n)}}});return{Router:i}});
//@ sourceMappingURL=router.js.map
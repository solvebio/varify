define(["jquery","underscore","marionette","../core","../paginator","../numbers","../tables"],function(t,e,n,i,o,r,s){var a=n.ItemView.extend({tagName:"span",className:"result-count",template:"count",ui:{count:".count",label:".count-label"},modelEvents:{"change:objectcount":"renderCount"},onRender:function(){void 0!==this.model.objectCount?this.renderCount(this.model,this.model.objectCount):this.renderCount(this.model,"")},renderCount:function(t,e){r.renderCount(this.ui.count,e),this.ui.label.text("records")}}),l=n.Layout.extend({className:"results-workflow",template:"workflows/results",ui:{toggleFiltersButton:"[data-toggle=context-panel]",toggleFiltersIcon:"[data-toggle=context-panel] i",toggleFiltersText:"[data-toggle=context-panel] span",navbar:".results-workflow-navbar",resultsContainer:".results-container",navbarButtons:".results-workflow-navbar button",loadingOverlay:".loading-overlay"},events:{"click [data-toggle=columns-dialog]":"showColumnsDialog","click [data-toggle=exporter-dialog]":"showExporterDialog","click [data-toggle=query-dialog]":"showQueryDialog","click [data-toggle=context-panel]":"toggleContextPanel"},regions:{count:".count-region",table:".table-region",paginator:".paginator-region"},initialize:function(){if(e.bindAll(this,"onPageScroll"),this.data={},!(this.data.view=this.options.view))throw new Error("view model required");if(!(this.data.results=this.options.results))throw new Error("results collection required");this.listenTo(this.data.results,"request",this.showLoadingOverlay),this.listenTo(this.data.results,"sync",this.hideLoadingOverlay),this.on("router:load",this.onRouterLoad),this.on("router:unload",this.onRouterUnload)},onRouterLoad:function(){this.data.results.trigger("workspace:load"),this.hideContextPanel()},onRouterUnload:function(){this.data.results.trigger("workspace:unload")},showLoadingOverlay:function(){this.isClosed!==!0&&this.ui.loadingOverlay.show()},hideLoadingOverlay:function(){this.isClosed!==!0&&this.ui.loadingOverlay.hide()},toggleContextPanel:function(){i.panels.context.isPanelClosed()?this.showContextPanel():this.hideContextPanel()},showContextPanel:function(){i.panels.context.openPanel(),this.$el.addClass("panel-open"),this.ui.toggleFiltersButton.tooltip("hide").attr("data-original-title","Hide Filter Panel").tooltip("fixTitle"),this.ui.toggleFiltersIcon.removeClass("icon-collapse-alt"),this.ui.toggleFiltersIcon.addClass("icon-expand-alt"),this.ui.toggleFiltersText.html("Hide Filters")},hideContextPanel:function(){i.panels.context.closePanel({full:!0}),this.$el.removeClass("panel-open"),this.ui.toggleFiltersButton.tooltip("hide").attr("data-original-title","Show Filter Panel").tooltip("fixTitle"),this.ui.toggleFiltersIcon.addClass("icon-collapse-alt"),this.ui.toggleFiltersIcon.removeClass("icon-expand-alt"),this.ui.toggleFiltersText.html("Show Filters")},onPageScroll:function(){var e=t(document).scrollTop();if(void 0===this.navbarVerticalOffset&&(this.navbarVerticalOffset=this.ui.navbar.offset().top),void 0===this.topNavbarHeight){var n=t(".navbar-fixed-top");this.topNavbarHeight=n.length>0?n.height():0}this.ui.navbar.hasClass("navbar-fixed-top")?e<this.navbarVerticalOffset-this.topNavbarHeight&&this.ui.navbar.removeClass("navbar-fixed-top"):e>=this.navbarVerticalOffset-this.topNavbarHeight&&(this.ui.navbar.css("top",this.topNavbarHeight),this.ui.navbar.addClass("navbar-fixed-top"))},onRender:function(){t(document).on("scroll",this.onPageScroll),i.isSupported("2.1.0")||(this.ui.saveQueryToggle.remove(),this.ui.saveQuery.remove()),this.paginator.show(new o.Paginator({model:this.data.results})),this.count.show(new a({model:this.data.results})),this.table.show(new s.Table({view:this.data.view,collection:this.data.results})),this.ui.navbarButtons.tooltip({animation:!1,placement:"bottom"})},onClose:function(){t(document).off("scroll",this.onPageScroll)},showExporterDialog:function(){i.dialogs.exporter.open()},showColumnsDialog:function(){i.dialogs.columns.open()},showQueryDialog:function(){i.dialogs.query.open()}});return{ResultCount:a,ResultsWorkflow:l}});
//@ sourceMappingURL=results.js.map
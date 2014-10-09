define(["jquery","underscore","marionette","../base","../core","../context/filters"],function(e,t,i,s,o,n){var a=s.LoadView.extend({align:"left"}),r=i.ItemView.extend({className:"query-item",template:"query/item",options:{editable:!1},ui:{owner:".owner",nonOwner:".non-owner",shareCount:".share-count",publicIcon:".public-icon",details:"[data-target=details]",toggleDetails:"[data-target=toggle-details]",actions:".owner button"},events:{"click [data-toggle=delete-query-modal]":"showDeleteQueryModal","click [data-toggle=edit-query-modal]":"showEditQueryModal","click [data-target=query]":"loadQuery","click @ui.toggleDetails":"toggleDetails",mouseover:"showActions",mouseout:"hideActions"},modelEvents:{sync:"render"},initialize:function(){if(this.data={},!(this.data.context=this.options.context))throw new Error("context model required");if(!(this.data.view=this.options.view))throw new Error("view model required")},serializeData:function(){var e=this.model.toJSON();return e.shared_users||(e.shared_users=[]),e.user||(e.user={}),e},showActions:function(){this.ui.actions.show()},hideActions:function(){this.ui.actions.hide()},loadQuery:function(t){t.preventDefault(),t.stopPropagation(),e.when(this.data.view.save("json",this.model.get("view_json")),this.data.context.save("json",this.model.get("context_json"),{reset:!0})).done(function(){o.router.navigate("results",{trigger:!0})}).fail(function(){o.notify({timeout:null,dismissable:!0,level:"error",header:"Error Opening Query",message:"An error occurred when opening the query. Click on the link again to try to open the query again."})})},showEditQueryModal:function(){this.trigger("showEditQueryModal",this.model)},showDeleteQueryModal:function(){this.trigger("showDeleteQueryModal",this.model)},toggleDetails:function(e){e.preventDefault(),this.ui.details.is(":visible")?(this.ui.toggleDetails.text("Show details"),this.ui.details.hide()):(this.ui.toggleDetails.text("Hide details"),this.ui.details.show())},renderDetails:function(){var e=[];this.model.get("description")&&e.push("<span class=muted>"+this.model.get("description")+"</span>"),e.push("<div class=row-fluid><div class=span6><h6>Filters</h6>");var i=this.model.context.get("json");!i||t.isEmpty(i)?e.push("<p class=muted>No filters were specified for this query.</p>"):n.flattenLanguage(i,e),e.push("</div><div class=span6>"),o.config.get("session.defaults.data.preview")||(e.push("<h6>Columns</h6>"),this.model.view.facets.length?(e.push("<ul>"),this.model.view.facets.each(function(t){var i=o.data.concepts.get(t.get("concept"));if(void 0!==i){var s=i.get("name"),n=t.get("sort");e.push("<li>"+s),"asc"===n?e.push(' <i class=icon-caret-up title="Ascending Order"></i>'):"desc"===n&&e.push(' <i class=icon-caret-down title="Descending Order"></i>'),e.push("</li>")}}),e.push("</ul>")):e.push("<p class=muted>No columns were selected this query.</p>")),e.push("</div></div>"),this.ui.details.html(e.join(""))},onRender:function(){if(o.data.concepts.length?this.renderDetails():this.listenTo(o.data.concepts,"sync",function(){this.renderDetails()}),!this.options.editable)return this.ui.publicIcon.hide(),this.ui.nonOwner.hide(),void this.ui.owner.hide();if(this.model.get("public")&&this.ui.publicIcon.removeClass("muted").attr("title","Public query"),this.ui.publicIcon.tooltip({html:!0,animation:!1,placement:"right",container:"body"}),this.model.get("is_owner")){this.ui.nonOwner.hide();var e=t.pluck(this.model.get("shared_users"),"email");e.length&&this.ui.shareCount.removeClass("muted").attr("title",e.join(", ")),this.ui.shareCount.tooltip({html:!0,animation:!1,placement:"right",container:"body"})}else this.ui.owner.hide()}});return{LoadingQueryItem:a,QueryItem:r}});
//# sourceMappingURL=item.js.map
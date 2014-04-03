define(["underscore","backbone","../structs","../constants"],function(t,e,n,i){var s=e.Model.extend({idAttribute:"label",defaults:{valid:null,pending:!1},fetch:function(){},toJSON:function(t){return t&&t.flat?this.pluck("value"):this.pick("value","label")},destroy:function(t){this.trigger("destroy",this,this.collection,t)}}),r=e.Collection.extend({model:s,comparator:"label",options:{check:!0},initialize:function(e,n){n=t.extend({},this.options,n||{}),n.check&&this.on("add",t.debounce(this.check,i.INPUT_DELAY))},fetch:function(){},create:function(t,e){this.add(t,e)},check:function(){var n=this.where({valid:null,pending:!1});if(n.length){t.each(n,function(t){t.set("pending",!0)});var i=this;e.ajax({url:this.url(),type:"POST",data:JSON.stringify(n),contentType:"application/json",success:function(t){i.set(t,{add:!1,remove:!1})},complete:function(){t.each(n,function(t){t.set("pending",!1)})}})}}});return{Value:s,Values:r}});
//@ sourceMappingURL=value.js.map
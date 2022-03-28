"use strict";(self["webpackChunkbooking_client"]=self["webpackChunkbooking_client"]||[]).push([[172],{91172:function(t,e,o){o.r(e),o.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Manage Slots - "+t._s(t.warehouse.name))]),o("b-alert",{attrs:{variant:"success",show:""}},[t._v(" Create and modify slots ")]),o("b-row",[o("b-col",{staticClass:"text-right"},[o("b-button",{attrs:{variant:"success"},on:{click:t.add}},[o("b-icon",{attrs:{icon:"plus",scale:"1.5"}}),t._v(" Add ")],1)],1)],1),o("b-table",{staticClass:"mt-3",attrs:{fields:t.fields,items:t.list,busy:t.loading,outlined:"",responsive:""},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[o("p",[t._v(t._s((t.searchForm.page-1)*t.searchForm.perPage+e.index+1))])]}},{key:"cell(fromDate)",fn:function(e){return[o("p",[t._v(t._s(t.moment(e.value).format("DD.MM.YYYY")))])]}},{key:"cell(toDate)",fn:function(e){return[o("p",[t._v(t._s(t.moment(e.value).format("DD.MM.YYYY")))])]}},{key:"cell(fromTime)",fn:function(e){return[t._v(" "+t._s(t._f("hourMinute")(e.item.fromTime.hour))+" : "+t._s(t._f("hourMinute")(e.item.fromTime.minute))+" ")]}},{key:"cell(toTime)",fn:function(e){return[t._v(" "+t._s(t._f("hourMinute")(e.item.toTime.hour))+" : "+t._s(t._f("hourMinute")(e.item.toTime.minute))+" ")]}},{key:"cell(loadUnit)",fn:function(e){return[o("p",[t._v(t._s(e.value))])]}},{key:"cell(capacity)",fn:function(e){return[o("p",[t._v(t._s(e.value))])]}},{key:"cell(edit)",fn:function(e){return[o("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(o){return t.edit(e.index)}}},[o("b-icon",{attrs:{icon:"pencil"}}),t._v(" Edit ")],1),o("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(o){return t.deleteById(e.index)}}},[o("b-icon",{attrs:{icon:"trash"}}),t._v(" Delete ")],1)]}}])}),o("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.searchForm.perPage,align:"right"},model:{value:t.searchForm.page,callback:function(e){t.$set(t.searchForm,"page",e)},expression:"searchForm.page"}}),o("b-modal",{attrs:{title:"Add Slot","hide-header-close":""},on:{ok:t.doAdd},model:{value:t.addModalShow,callback:function(e){t.addModalShow=e},expression:"addModalShow"}},[o("b-row",[o("b-col",{attrs:{md:"3"}},[t._v("From Date")]),o("b-col",{attrs:{md:"9"}},[o("b-input-group",{staticClass:"mb-3"},[o("b-form-input",{attrs:{type:"text",placeholder:"YYYY-MM-DD",size:"sm",autocomplete:"off",state:!!t.$v.slot.fromDate.required&&null},model:{value:t.slot.fromDate,callback:function(e){t.$set(t.slot,"fromDate",e)},expression:"slot.fromDate"}}),o("b-input-group-append",[o("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US",size:"sm"},model:{value:t.slot.fromDate,callback:function(e){t.$set(t.slot,"fromDate",e)},expression:"slot.fromDate"}})],1)],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("To Date")]),o("b-col",{attrs:{md:"9"}},[o("b-input-group",{staticClass:"mb-3"},[o("b-form-input",{attrs:{type:"text",placeholder:"YYYY-MM-DD",size:"sm",autocomplete:"off",state:!!t.$v.slot.toDate.required&&null},model:{value:t.slot.toDate,callback:function(e){t.$set(t.slot,"toDate",e)},expression:"slot.toDate"}}),o("b-input-group-append",[o("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US",size:"sm"},model:{value:t.slot.toDate,callback:function(e){t.$set(t.slot,"toDate",e)},expression:"slot.toDate"}})],1)],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("From Time")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Hour",size:"sm"},model:{value:t.slot.fromTime.hour,callback:function(e){t.$set(t.slot.fromTime,"hour",e)},expression:"slot.fromTime.hour"}})],1),o("b-col",{attrs:{md:"1"}},[t._v(":")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Minute",size:"sm"},model:{value:t.slot.fromTime.minute,callback:function(e){t.$set(t.slot.fromTime,"minute",e)},expression:"slot.fromTime.minute"}})],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("To Time")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Hour",size:"sm"},model:{value:t.slot.toTime.hour,callback:function(e){t.$set(t.slot.toTime,"hour",e)},expression:"slot.toTime.hour"}})],1),o("b-col",{attrs:{md:"1"}},[t._v(":")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Minute",size:"sm"},model:{value:t.slot.toTime.minute,callback:function(e){t.$set(t.slot.toTime,"minute",e)},expression:"slot.toTime.minute"}})],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("Load Unit")]),o("b-col",{attrs:{md:"9"}},[o("b-form-select",{attrs:{size:"sm"},model:{value:t.slot.loadUnit,callback:function(e){t.$set(t.slot,"loadUnit",e)},expression:"slot.loadUnit"}},[o("b-form-select-option",{attrs:{value:"pallet"}},[t._v("Pallet")]),o("b-form-select-option",{attrs:{value:"container"}},[t._v("Container")])],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("Capacity")]),o("b-col",{attrs:{md:"9"}},[o("b-form-input",{attrs:{type:"number",size:"sm"},model:{value:t.slot.capacity,callback:function(e){t.$set(t.slot,"capacity",e)},expression:"slot.capacity"}})],1)],1)],1),o("b-modal",{attrs:{title:"Edit Slot","hide-header-close":""},on:{ok:t.doEdit},model:{value:t.editModalShow,callback:function(e){t.editModalShow=e},expression:"editModalShow"}},[o("b-row",[o("b-col",{attrs:{md:"3"}},[t._v("From Date")]),o("b-col",{attrs:{md:"9"}},[o("b-input-group",{staticClass:"mb-3"},[o("b-form-input",{attrs:{type:"text",placeholder:"YYYY-MM-DD",size:"sm",autocomplete:"off",state:!!t.$v.slot.fromDate.required&&null},model:{value:t.slot.fromDate,callback:function(e){t.$set(t.slot,"fromDate",e)},expression:"slot.fromDate"}}),o("b-input-group-append",[o("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US",size:"sm"},model:{value:t.slot.fromDate,callback:function(e){t.$set(t.slot,"fromDate",e)},expression:"slot.fromDate"}})],1)],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("To Date")]),o("b-col",{attrs:{md:"9"}},[o("b-input-group",{staticClass:"mb-3"},[o("b-form-input",{attrs:{type:"text",placeholder:"YYYY-MM-DD",size:"sm",autocomplete:"off",state:!!t.$v.slot.toDate.required&&null},model:{value:t.slot.toDate,callback:function(e){t.$set(t.slot,"toDate",e)},expression:"slot.toDate"}}),o("b-input-group-append",[o("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US",size:"sm"},model:{value:t.slot.toDate,callback:function(e){t.$set(t.slot,"toDate",e)},expression:"slot.toDate"}})],1)],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("From Time")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Hour",size:"sm"},model:{value:t.slot.fromTime.hour,callback:function(e){t.$set(t.slot.fromTime,"hour",e)},expression:"slot.fromTime.hour"}})],1),o("b-col",{attrs:{md:"1"}},[t._v(":")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Minute",size:"sm"},model:{value:t.slot.fromTime.minute,callback:function(e){t.$set(t.slot.fromTime,"minute",e)},expression:"slot.fromTime.minute"}})],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("To Time")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Hour",size:"sm"},model:{value:t.slot.toTime.hour,callback:function(e){t.$set(t.slot.toTime,"hour",e)},expression:"slot.toTime.hour"}})],1),o("b-col",{attrs:{md:"1"}},[t._v(":")]),o("b-col",{attrs:{md:"4"}},[o("b-form-input",{attrs:{type:"number",placeholder:"Minute",size:"sm"},model:{value:t.slot.toTime.minute,callback:function(e){t.$set(t.slot.toTime,"minute",e)},expression:"slot.toTime.minute"}})],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("Load Unit")]),o("b-col",{attrs:{md:"9"}},[o("b-form-select",{attrs:{size:"sm"},model:{value:t.slot.loadUnit,callback:function(e){t.$set(t.slot,"loadUnit",e)},expression:"slot.loadUnit"}},[o("b-form-select-option",{attrs:{value:"pallet"}},[t._v("Pallet")]),o("b-form-select-option",{attrs:{value:"container"}},[t._v("Container")])],1)],1)],1),o("b-row",{staticClass:"mt-2"},[o("b-col",{attrs:{md:"3"}},[t._v("Capacity")]),o("b-col",{attrs:{md:"9"}},[o("b-form-input",{attrs:{type:"number",size:"sm"},model:{value:t.slot.capacity,callback:function(e){t.$set(t.slot,"capacity",e)},expression:"slot.capacity"}})],1)],1)],1),o("b-modal",{attrs:{title:"Delete Country","hide-header-close":""},on:{ok:t.doDelete},model:{value:t.deleteModalShow,callback:function(e){t.deleteModalShow=e},expression:"deleteModalShow"}},[t._v(" Are you sure you want to delete? ")])],1)},a=[],l=o(93019),i=o(34665),r=o(17133),n=o.n(r),c=o(6409),m={name:"SlotView",mounted:function(){this.fetch()},data:function(){return{fields:[{key:"index",label:"No"},{key:"fromDate",label:"From Date"},{key:"toDate",label:"To Date"},{key:"fromTime",label:"From Time"},{key:"toTime",label:"To Time"},{key:"loadUnit",label:"Load Unit"},{key:"capacity",label:"Capacity"},{key:"edit",label:"-"}],loading:!1,searchForm:{page:1,perPage:10,name:"",warehouse:this.$route.params.warehouseId},addModalShow:!1,editModalShow:!1,deleteModalShow:!1,slot:{_id:"",warehouse:"",fromDate:"",toDate:"",fromTime:{hour:0,minute:0},toTime:{hour:0,minute:0},loadUnit:"pallet",capacity:0}}},validations:{slot:{fromDate:{required:c.C1},toDate:{required:c.C1}}},computed:(0,l.Z)({},(0,i.rn)({list:function(t){return t.slot.list},total:function(t){return t.slot.total},warehouse:function(t){return t.slot.warehouse}})),methods:{moment:n(),fetch:function(){var t=this;this.loading=!0,this.$store.dispatch("slot/fetch",this.searchForm).then((function(){t.loading=!1}))},add:function(){this.slot={_id:"",warehouse:this.warehouse,fromDate:"",toDate:"",fromTime:{hour:0,minute:0},toTime:{hour:0,minute:0},loadUnit:"pallet",capacity:0},this.addModalShow=!0},doAdd:function(t){var e=this;t.preventDefault(),this.$v.slot.$touch(),this.$v.slot.$error||(this.addModalShow=!1,this.$store.dispatch("slot/add",this.slot).then((function(){e.$toasted.success("Add Success"),e.fetch()})))},edit:function(t){this.slot={_id:this.list[t]._id,warehouse:this.list[t].warehouse,fromDate:this.list[t].fromDate.substring(0,10),toDate:this.list[t].toDate.substring(0,10),fromTime:this.list[t].fromTime,toTime:this.list[t].toTime,loadUnit:this.list[t].loadUnit,capacity:this.list[t].capacity},this.editModalShow=!0},doEdit:function(t){var e=this;t.preventDefault(),this.$v.slot.$touch(),this.$v.slot.$error||(this.editModalShow=!1,this.$store.dispatch("slot/edit",this.slot).then((function(){e.$toasted.success("Edit Success"),e.fetch()})))},deleteById:function(t){this.slot._id=this.list[t]._id,this.deleteModalShow=!0},doDelete:function(){var t=this;this.$store.dispatch("slot/deleteById",this.slot._id).then((function(){t.$toasted.success("Delete Success"),t.fetch()}))}},watch:{"searchForm.page":function(){this.fetch()}}},u=m,d=o(1001),f=(0,d.Z)(u,s,a,!1,null,null,null),p=f.exports}}]);
//# sourceMappingURL=172-legacy.e4b07b94.js.map
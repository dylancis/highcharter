!function(a){"object"==typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"==typeof define&&define.amd?define("highcharts/modules/streamgraph",["highcharts"],function(b){return a(b),a.Highcharts=b,a}):a("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(a){function b(a,d,b,e){a.hasOwnProperty(d)||(a[d]=e.apply(null,b))}a=a?a._modules:{},b(a,"Series/Streamgraph/StreamgraphSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){var d=this&&this.__extends||function(){var a=function(b,c){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])})(b,c)};return function(b,c){function g(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(g.prototype=c.prototype,new g)}}(),e=a.seriesTypes.areaspline,h=b.merge;b=b.extend;var f=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.points=void 0,b.options=void 0,b}return d(b,a),b.prototype.streamStacker=function(a,b,d){a[0]-=b.total/2,a[1]-=b.total/2,this.stackedYData[d]=a},b.defaultOptions=h(e.defaultOptions,{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}),b}(e);return b(f.prototype,{negStacks:!1}),a.registerSeriesType("streamgraph",f),f}),b(a,"masters/modules/streamgraph.src.js",[],function(){})});

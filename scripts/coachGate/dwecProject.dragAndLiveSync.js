/**
 * Created by Lorenzo on 13/03/2016.
 */
(function ($) {
  if (!$.dwecProject) {
    $.dwecProject = {};
  }

  $.dwecProject.dragAndLiveSync = function (draggableChart, liveTable, options) {

    var base = {};
    base.lastObject = {};

    base.init = function () {
      base.options = $.extend(true, {}, $.dwecProject.dragAndLiveSync.defaultOptions, options);
      base.$chart = $(draggableChart);
      base.$table = $(liveTable);


      base.$chart.on(base.options.draggableChart.trigger, function (event) {

        console.log("intenta entrar");

        if (event.col === base.lastObject.col && event.value === base.lastObject.value && base.options.draggableChart.eventItemValue(event) === base.lastObject.itemValue)
          return;

        console.log("entra");

        base.lastObject.col = event.col;
        base.lastObject.value = event.value;
        base.lastObject.itemValue = base.options.draggableChart.eventItemValue(event);

        base.$table.find('td['+base.options.liveTable.contentItemValue+'="'+base.lastObject.itemValue+'"][data-col="'+base.lastObject.col+'"] input').val(base.lastObject.value);

      });

      base.$table.on(base.options.liveTable.trigger, function (event) {

        console.log("intenta entrar");
        if (event.col === base.lastObject.col && event.value === base.lastObject.value && base.options.liveTable.eventItemValue(event) === base.lastObject.itemValue)
          return;
        console.log("entra");
        base.lastObject.col = event.col;
        base.lastObject.value = event.value;
        base.lastObject.itemValue = base.options.liveTable.eventItemValue(event);

        var chart = base.$chart.getDwecProject_draggableChart();
        var newData = chart.dataRendered();
        newData[base.lastObject.col][base.lastObject.itemValue] = base.lastObject.value;
        chart.dataRendered(newData);
      });
    };


    base.init();
  };

  $.dwecProject.dragAndLiveSync.defaultOptions = {
    draggableChart: {
      trigger: "DraggableChartRefresh",
      eventItemValue: function(event){
        return event.valueField;
      }
    },
    liveTable: {
      trigger: "LiveTableRefresh",
      eventItemValue: function(event){
        return event.object.itemValue;

      },
      contentItemValue: "data-itemvalue"
    }
  };
})(window.jQuery);

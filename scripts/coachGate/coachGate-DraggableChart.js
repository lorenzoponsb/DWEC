/**
 * Created by Lorenzo on 23/02/2016.
 *
 * Description:
 *
 *    This plugin extends for amCharts.js and implements draggable options on bullets.
 *
 * Triggers:
 *
 *    DraggableChartRefresh:
 *
 *        Description: It's launched when the rounded values are changed and is different of the last value
 *                     or then mouse up if the element has been dragged.
 *        Contains:
 *            {
 *               chart: is the amChart object,
 *               object: the actual content of dataProvider,
 *               index: index of dataProvider array,
 *               valueField: the object changed,
 *               value: the new value
 *            }
 *
 * Requires:
 *
 *    jquery.js                     // http://code.jquery.com/jquery-2.2.1.min.js
 *    DWEC-globalFunctions.js       // DWEC-globalFunctions.js
 *    amcharts.js                   // https://www.amcharts.com/lib/3/amcharts.js
 *    serial.js                     // https://www.amcharts.com/lib/3/serial.js
 *
 */
/*jshint strict: true */
(function ($) {
  'use strict';
  if (!$.DWEC) {
    $.DWEC = {};
  }

  /**
   * Initialize plugin
   * @param el: jQuery object.
   * @param amChart: data of amChart.
   * @param options: options to override.
     */
  $.DWEC.draggableChart = function (el, amChart, options) {

    var base = this;  // Reference to currrent object
    base.$el = $(el); // Reference to jquery DOM object
    base.el = el;     // Selector
    base.$el.data('DWEC.DraggableChart', base); // Add a reverse reference to the DOM object

    /**
     * Start the project
     * @returns {{amChart: *, data: $.DWEC.draggableChart.api.data, graphs: $.DWEC.draggableChart.api.graphs, options: *}}
     */
    base.init = function () {
      try {
        base.options = $.extend(true, {}, $.DWEC.draggableChart.defaultOptions, options);
        base.amChartOptions = $.extend(true, {}, $.DWEC.draggableChart.amChart, amChart);
        if(!base.$el.attr('id')){
          base.$el.attr('id', getRandomName());
        }
        base.amChart = window.AmCharts.makeChart(base.$el.attr('id'), base.amChartOptions);
        initCustomAfterAmChart();
        initListeners();

      } catch (e) {
        showMessage(0, 'ERROR base.init()', e);
      }
    };


    /**
     * Create all plugin listeners
     */
    function initListeners () {

      base.actualGraph = false;         // Contains data of the current graph
      base.amChart.mouseIsDown = false; // Set default value of event


      // TODO Set the variable mouseIsDown to true and disable the efects on charts
      base.$el.mousedown(function () {
        try {
          base.amChart.mouseIsDown = true;
          if (base.actualGraph) {
            hideOrShowOnDragable(false);   // Disable vibrating effect
          }
        } catch (e) {
          showMessage(0, 'ERROR initListeners()  base.$el.mousedown()', e);
        }
      });

      // TODO Listener mouse up con document and reset actual graph
      $(document).mouseup(function () {
        try {
          base.amChart.mouseIsDown = false;
          if (base.actualGraph) {
            // Reposition the value of chart without 4,1230001239092834082093123
            base.amChart.dataProvider[base.actualGraph.index][base.actualGraph.valueField] = Math.round(base.amChart.dataProvider[base.actualGraph.index][base.actualGraph.valueField]);
            hideOrShowOnDragable(true);
            base.amChart.validateData();
            base.actualGraph = false;
          }
        } catch (e) {
          showMessage(0, 'ERROR initListeners() $(document).mouseup()', e);
        }
      });

      // TODO Listener if the mouse is move and drag the element
      $(document).mousemove(function () {

        try {

          if (!base.amChart.mouseIsDown) {
            return;
          }

          if (base.amChart.mouseTimeout) {
            clearTimeout(base.amChart.mouseTimeout);
          }

          base.amChart.mouseTimeout = setTimeout(function () {
            updatePositionAmChart();   //Call to drag element
          }, 1);

        } catch (e) {
          showMessage(0, 'ERROR initListeners() $(document).mousemove()', e);
        }
      });

      // TODO Get graph when the mouse is over graph
      base.amChart.addListener('rollOverGraph', function (event) {

        try {
          if (!base.amChart.mouseIsDown && !base.actualGraph) {
            base.actualGraph = {};
            base.actualGraph.valueField = event.graph.valueField;
            base.actualGraph.index = event.chart.chartCursor.index;
          }
        } catch (e) {
          showMessage(0, 'ERROR initListeners() base.amChart.addListener(\'rollOverGraph\')', e);
        }
      });

      // TODO Catch event when the mouse is out the graph
      base.amChart.addListener('rollOutGraph', function () {

        try {
          // If mouse isn't down clear actualGraph
          if (!base.amChart.mouseIsDown) {
            base.actualGraph = false;
          }
        } catch (e) {
          showMessage(0, 'ERROR initListeners() base.amChart.addListener(\'rollOutGraph\')', e);
        }
      });


    }

    /**
     * Render amChart options after init base.amChart
     * Show 20% more on the max and min values of chart
     */
    function initCustomAfterAmChart () {

      try {
        if (base.options.setAutoOffsets) {
          var percent = base.options.maxValue * (base.options.valueOffsets/100);

          if (typeof (base.amChart.valueAxes) === 'object' && base.amChart.valueAxes.length === 0) {
            base.amChart.valueAxes = [
              {
                maximum: base.options.maxValue + percent,
                minimum: base.options.minValue - percent
              }
            ];
          } else {
            $.each(base.amChart.valueAxes, function (index, object) {
              object.maximum = base.options.maxValue + percent;
              object.minimum = base.options.minValue - percent;
            });
          }
        }
      } catch (e) {
        showMessage(0, 'ERROR initCustomAfterAmChart()', e);
      }
    }

    /**
     * Sets true or false if in draggable mode show or not vibrating effect
     * @param boolean
     */
    function hideOrShowOnDragable (boolean) {

      try {

        if (!base.options.draggable) {
          return;
        }
        base.amChart.chartCursor.categoryBalloonEnabled = boolean;
        base.amChart.chartCursor.valueLineBalloonEnabled = boolean;
        $.each(base.amChart.graphs, function (index, obj) {
          obj.showBalloon = boolean;
        });

        base.amChart.legend.valueFunction = function (obj1, obj2) {
          if (!boolean) {
            return '';
          }
          return obj2;
        };

        base.amChart.validateData();

      } catch (e) {
        showMessage(0, 'ERROR hideOrShowOnDragable()', e);
      }
    }

    /**
     * Update point dragged on amChart
     */
    function updatePositionAmChart () {

      try {
        if (!base.actualGraph || !base.options.draggable) {
          return;
        }

        // TODO Save the new data changed
        var index = base.actualGraph.index;
        var valueField = base.actualGraph.valueField;
        var value = base.amChart.chartCursor.valueLineAxis.coordinateToValue(base.amChart.chartCursor.vLine.y);
        var valueRounded = Math.round(value);

        // Check if the value exceeds the limit or max value
        if (value > base.options.maxValue || value < base.options.minValue) {
          return;
        }

        // update data
        base.amChart.dataProvider[index][valueField] = value;
        base.amChart.validateData();


        if (!base.actualGraph.value) {
          base.actualGraph.value = valueRounded;
        }


        if (base.options.triggers && base.actualGraph.value && base.actualGraph.value !== valueRounded) {

          // If you not clone the new value, when you change data the actual graph is changed
          var object = $.extend({}, base.amChart.dataProvider[index]);
          object[valueField] = valueRounded;

          // set trigger
          base.$el.trigger({
            type: 'DraggableChartRefresh',
            chart: base.amChart,
            object: object,
            index: index,
            valueField: valueField,
            value: valueRounded
          });
          base.actualGraph.value = valueRounded;
        }

      } catch (e) {
        base.showMessage(0, 'ERROR updatePositionAmChart()', e);
      }
    }


    /**
     * If debug mode is on, show messages on console.
     * @param level
       */
    function showMessage (level) {

      try {
        if (typeof (level) === 'number' && !base.options.debugMode || level > base.options.maxLevelMessageShow || (base.options.showOneLevel && level !== base.options.maxLevelMessageShow)) {
          return;
        }

      } catch (e) {
        console.log('%cERROR base.options.debugMode()', 'background: #fff; color: #000', e);
      }

      $.DWEC.gFunctions.showMessage('draggableChart', arguments);
    }

    /**
     * Get a random name
     * @returns {*}
     */
    function getRandomName () {
      return "DWEC-Draggable" + Math.floor(Math.random() * 500000);
    }

    /**
     * Change or return the dataProvider of the amChart object
     * @param newData
     * @returns {*}
       */
    base.data = function (newData) {

      if (arguments.length === 0) {
        return base.amChart.dataProvider;
      }

      base.amChart.dataProvider = newData;
      base.amChart.validateData();
    };

    base.init();
  };

  $.DWEC.draggableChart.amChart = {
    'type': 'serial',
    'theme': 'light',
    'legend': {
      'useGraphSettings': true
    },
    'valueAxes': [
      {
        'align': 'center'
      }
    ],
    'chartCursor': {
      'pan': false,
      'zoomable': false,
      'valueLineEnabled': true,
      'valueLineBalloonEnabled': true,
      'cursorAlpha': 0.2,
      'valueLineAlpha': 0.2,
      'cursorColor': '#333'
    },
    'addClassNames': true,
    'categoryField': 'date'
  };

  /**
   * Contains all default options
   * @type {{maxValue: number, minValue: number, debugMode: boolean, show: boolean, amChart: {type: string, theme: string, legend: {useGraphSettings: boolean}, chartCursor: {pan: boolean, zoomable: boolean, valueLineEnabled: boolean, valueLineBalloonEnabled: boolean, cursorAlpha: number, valueLineAlpha: number}, addClassNames: boolean, dataProvider: Array, graphs: Array, categoryField: string}}}
   */
  $.DWEC.draggableChart.defaultOptions = {
    'debugMode': true,
    'maxLevelMessageShow': 3,
    'showOneLevel': false,
    'maxValue': 10,
    'minValue': 0,
    'setAutoOffsets': true,
    'valueOffsets': 20,
    'draggable': true,
    'height': '500px',
    'triggers': true
  };

  /**
   * Create all objects on $('.nameClass').DWECDraggableChart(AmChartOptions,{});
   * @param amChart
   * @param options
   * @returns {*}
     */
  $.fn.DWECDraggableChart = function (amChart, options) {
    return this.each(function () {
       $.DWEC.draggableChart(this, amChart, options);
    });
  };

  /**
   * Return if exist chart of the jQuery object: $('.nameClass').getDWECDraggableChart();
   * @returns {*}
   */
  $.fn.getDWECDraggableChart = function () {
    return this.data('DWEC.DraggableChart');
  };

})(window.jQuery);

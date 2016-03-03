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
 *    coachGate-globalFunctions.js  // coachGate/coachGate-globalFunctions.js
 *    amcharts.js                   // https://www.amcharts.com/lib/3/amcharts.js
 *    serial.js                     // https://www.amcharts.com/lib/3/serial.js
 *
 */
/*jshint strict: true */
(function (coachGate) {
  'use strict';
  if (!coachGate) {
    return;
  }
  $.coachGate.draggableChart = function (el, amChart, options) {

    var base = this;  // Reference to currrent object
    base.$el = $(el); // Reference to jquery DOM object
    base.el = $(el).selector;                        // String of the selector
    base.$el.data('coachGate.DraggableChart', base); // Add a reverse reference to the DOM object
    base.id = {};     // Contains all id references of the plugin
    base.$id = {};    // Contains all jquery objects

    /**
     * Start the project
     * @returns {{amChart: *, data: $.coachGate.DraggableChart.api.data, graphs: $.coachGate.DraggableChart.api.graphs, options: *}}
     */
    base.init = function () {
      try {
        base.options = $.extend(true, {}, $.coachGate.DraggableChart.defaultOptions, options);
        base.amChartOptions = $.extend(true, {}, $.coachGate.DraggableChart.amChart, amChart);
        base.showMessage(3, 'Start base.init()');
        base.id.amChart = base.getRandomName();
        base.$el.html('<div id="' + base.id.amChart + '" style="height:' + base.options.height + ';"></div>');
        base.initCustomsBeforeAmChart();
        base.amChart = window.AmCharts.makeChart(base.id.amChart, base.amChartOptions);
        base.initCustomAfterAmChart();
        base.initListeners();
      } catch (e) {
        base.showMessage(0, 'ERROR base.init()', e);
      }
      return base.returnObject();
    };


    /**
     * Create all plugin listeners
     */
    base.initListeners = function () {

      base.actualGraph = false;         // Contains data of the current graph
      base.amChart.mouseIsDown = false; // Set default value of event


      // Listener to mouse down on chart
      base.$el.mousedown(function () {
        try {
          base.showMessage(3, 'Enter on mousedown');
          base.amChart.mouseIsDown = true;
          if (base.actualGraph) {
            base.hideOrShowOnDragable(false);   // Disable vibrating effect
            base.showMessage(3, 'Hide on draggable');
          }
        } catch (e) {
          base.showMessage(0, 'ERROR base.initListeners()  base.$el.mousedown()', e);
        }
      });

      // Listener mouse up con document and reset actual graph
      $(document).mouseup(function () {
        try {
          base.showMessage(3, 'Enter on mouse up');
          base.amChart.mouseIsDown = false;
          if (base.actualGraph) {
            // Reposition the chart without 4,1230001239092834082093123
            base.amChart.dataProvider[base.actualGraph.index][base.actualGraph.valueField] = Math.round(base.amChart.dataProvider[base.actualGraph.index][base.actualGraph.valueField]);
            base.hideOrShowOnDragable(true);
            base.amChart.validateData();
            base.actualGraph = false;
            base.showMessage(3, 'Delete all actualgraph');
          }
        } catch (e) {
          base.showMessage(0, 'ERROR base.initListeners() $(document).mouseup()', e);
        }
      });

      // Listener if the mouse is move and drag the element
      $(document).mousemove(function () {

        try {
          base.showMessage(3, 'Enter on mouse move');

          if (!base.amChart.mouseIsDown) {
            return;
          }

          if (base.amChart.mouseTimeout) {
            clearTimeout(base.amChart.mouseTimeout);
          }

          base.amChart.mouseTimeout = setTimeout(function () {
            base.showMessage(3, 'Call updatePosition');
            base.updatePositionAmChart();   //Call to drag element
          }, 1);
        } catch (e) {
          base.showMessage(0, 'ERROR base.initListeners() $(document).mousemove()', e);
        }
      });

      // Get graph when the mouse is over graph
      base.amChart.addListener('rollOverGraph', function (event) {

        try {
          base.showMessage(3, 'Mouse over graph');
          if (!base.amChart.mouseIsDown && !base.actualGraph) {
            base.actualGraph = {};
            base.actualGraph.valueField = event.graph.valueField;
            base.actualGraph.index = event.chart.chartCursor.index;
            base.showMessage(3, 'Insert data on actualgraph');
          }
        } catch (e) {
          base.showMessage(0, 'ERROR base.initListeners() base.amChart.addListener(\'rollOverGraph\')', e);
        }
      });

      // Catch event when the mouse is out the graph
      base.amChart.addListener('rollOutGraph', function () {

        try {
          base.showMessage(3, 'Mouse out graph');
          // If mouse isn't down clear actualGraph
          if (!base.amChart.mouseIsDown) {
            base.actualGraph = false;
            base.showMessage(3, 'Delete actualgraph');
          }
        } catch (e) {
          base.showMessage(0, 'ERROR base.initListeners() base.amChart.addListener(\'rollOutGraph\')', e);
        }
      });


    };

    /**
     * Render amChart options before init base.amChart
     */
    base.initCustomsBeforeAmChart = function () {
      try {
        base.showMessage(3, 'In initCustomsBefore()');
        if (base.options.customGraphBalloom) {
          $.each(base.amChartOptions.graphs, function (index, object) {
            object.balloonFunction = function (obj1, obj2) {
              return '<b>' + obj2.title + '</b><br>' + obj1.values.value;
            };
          });

          base.showMessage(2, 'Canged customs graphs balloms');
        }
      } catch (e) {
        base.showMessage(0, 'ERROR base.initCustomsBeforeAmChart()', e);
      }
    };

    /**
     * Render amChart options after init base.amChart
     */
    base.initCustomAfterAmChart = function () {

      try {
        base.showMessage(3, 'In initCustomAfterAmChart()');
        if (base.options.setAutoOffsets) {
          var percent = base.options.maxValue * 0.2;

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
          base.showMessage(2, 'Sets auto offsets');
        }
      } catch (e) {
        base.showMessage(0, 'ERROR base.initCustomAfterAmChart()', e);
      }
    };

    /**
     * Sets true or false if in draggable mode show or not vibrating effect
     * @param boolean
     */
    base.hideOrShowOnDragable = function (boolean) {

      try {
        base.showMessage(3, 'In hideOrShowOnDragable()');

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
        base.showMessage(2, 'Efects on draggable:', boolean);
      } catch (e) {
        base.showMessage(0, 'ERROR base.hideOrShowOnDragable()', e);
      }
    };

    /**
     * Update point dragged on amChart
     */
    base.updatePositionAmChart = function () {

      try {
        if (!base.actualGraph || !base.options.draggable) {
          return;
        }

        base.showMessage(3, 'In updatePositon()');

        // Save data changed
        var index = base.actualGraph.index;
        var valueField = base.actualGraph.valueField;
        var value = base.amChart.chartCursor.valueLineAxis.coordinateToValue(base.amChart.chartCursor.vLine.y);
        var valueRounded = Math.round(value);

        // Check if the value exceeds the limit or max value
        if (value > base.options.maxValue || value < base.options.minValue) {
          return;
        }

        base.showMessage(3, 'Update dataProvider');

        // update data
        base.amChart.dataProvider[index][valueField] = value;
        base.amChart.validateData();


        if (!base.actualGraph.value) {
          base.actualGraph.value = valueRounded;
        }


        if (base.options.triggers && base.actualGraph.value && base.actualGraph.value !== valueRounded) {

          base.showMessage(2, 'Send trigger: chartRefresh');
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

        if (base.options.debugMode) {
          base.$el.on('DraggableChartRefresh', function (event) {
            base.showMessage(2, 'Trigger catched', 1, 'Event: ', event);
          });
        }
      } catch (e) {
        base.showMessage(0, 'ERROR base.updatePositionAmChart()', e);
      }
    };


    /**
     * If debug mode is on, show messages on console.log()
     * @param level
       */
    base.showMessage = function (level) {

      try {
        if (typeof (level) === 'number' && base.options.debugMode || level > base.options.maxLevelMessageShow || (base.options.showOneLevel && level !== base.options.maxLevelMessageShow)) {
          return;
        }

      } catch (e) {
        console.log('%cERROR base.options.debugMode()', 'background: #fff; color: #000', e);
      }

      $.coachGate.gFunctions.showMessage('DraggableChart', arguments);
    };

    /**
     * Get a random name
     * @returns {*}
     */
    base.getRandomName = function () {
      base.showMessage(3, 'In getRandomName()');
      return $.coachGate.gFunctions.getRandomName('DraggableChart');
    };


    /**
     * Object to return
     * @returns {{amChart: *, data: $.coachGate.DraggableChart.api.data, graphs: $.coachGate.DraggableChart.api.graphs, options: *}}
     */
    base.returnObject = function () {

      base.api = {

        // Contains amChart object
        amChart: base.amChart,

        // Change or return the dataProvider of the amChart object
        data: function (newData) {

          if (arguments.length === 0) {
            return base.amChart.dataProvider;
          }

          base.amChart.dataProvider = newData;
          base.amChart.validateData();
        },

        // Change or returns the graphs of the amChart object
        graphs: function (newGraphs) {
          if (arguments.length === 0) {
            return base.amChart.graphs;
          }

          base.amChart.graphs = newGraphs;
          base.amChart.validateData();
        },

        // Contains the initial options of amChart
        amChartOptions: base.amChartOptions,

        // Contains all options of plugin (default options and options extended)
        options: base.options
      };
      return base.api;
    };

    return base.init();
  };

  $.coachGate.draggableChart.amChart = {
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
  $.coachGate.draggableChart.defaultOptions = {
    'debugMode': true,
    'maxLevelMessageShow': 0,
    'showOneLevel': false,
    'maxValue': 10,
    'minValue': 0,
    'setAutoOffsets': true,
    'draggable': true,
    'customGraphBalloom': true,
    'height': '500px',
    'triggers': true,
    'numberDecimals': 0
  };

  /**
   * Create all objects on $('.nameClass').coachGateDraggableChart(AmChartOptions,{});
   * @param amChart
   * @param options
   * @returns {*}
     */
  $.fn.coachGateDraggableChart = function (amChart, options) {
    return this.each(function () {
       $.coachGate.draggableChart(this, amChart, options);
    });
  };

  /**
   * Return if exist chart of the jQuery object: $('.nameClass').getCoachGateDraggableChart();
   * @returns {*}
   */
  $.fn.getCoachGateDraggableChart = function () {
    return this.data('coachGate.DraggableChart');
  };

})(window.coachGate);

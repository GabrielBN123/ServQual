//-----------------metas-------------------------
var meta = 20;


function definir_meta(){
    meta = 100;
}
$(function() {
    setTime();
    function setTime() {
       var date = new Date().getTime();
       var string = document.getElementById('percepcao').value;
       setTimeout(setTime, 3000);
    $('#percepcao').html(string);
    }
  });
//-----------------fim metas-------------------------

//---------------graficos----------------------------
FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'percepcao',
    width: '790',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Gráfico de percepção",
            "subCaption": "Meta mensal coletado pelas as avaliações",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Ruim",
            "value": "290"
        }, {
            "label": "Regular",
            "value": "260"
        }, {
            "label": "Bom",
            "value": "180"
        }, {
            "label": "Muito Bom",
            "value": "140"
        }, {
            "label": "Excelente",
            "value": "115"
        }],
        
        "trendlines": [
        {
            "line": [
                {
                    "startvalue": meta,
                    "valueOnRight": "1",
                    "displayvalue": "Sua meta deste mês"
                }
            ]
        }
    ]
}
});
    fusioncharts.render();
    });

//---------------------------------fim do primeiro gráfico-------------------

//--------------------------------Inicio do segundo grafico-----------------------
FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'expectativa',
    width: '790',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Gráfico de Expectativa",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Ruim",
            "value": "290"
        }, {
            "label": "Regular",
            "value": "260"
        }, {
            "label": "Bom",
            "value": "180"
        }, {
            "label": "Muito Bom",
            "value": "140"
        }, {
            "label": "Excelente",
            "value": "115"
        }],

        "trendlines": [
        {
            "line": [
                {
                    "startvalue": meta,
                    "valueOnRight": "1",
                    "displayvalue": "mês"
                }
            ]
        }
    ]
}
});
    fusioncharts.render();
    });

// ---------------------------------terceiro grafico de união-----------------------

    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'uniao-graf',
    width: '100%',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Gráfico de Expectativa",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "",
            "theme": "fusion",
        },
        "data": [{
            "label": "Ruim percepção",
            "value": "290"
        },{
            "label": "Ruim expectativa",
            "value": "290"
        }, {
            "label": "Regular percepção",
            "value": "260"
        }, {
            "label": "Regular expectativa",
            "value": "260"
        }, {
            "label": "Bom percepção",
            "value": "180"
        }, {
            "label": "Bom expectativa",
            "value": "180"
        }, {
            "label": "Muito Bom percepção",
            "value": "140"
        }, {
            "label": "Muito Bom expectativa",
            "value": "140"
        }, {
            "label": "Excelente percepção",
            "value": "115"
        }, {
            "label": "Excelente expectativa",
            "value": "115"
        }],

        "trendlines": [
        {
            "line": [
                {
                    "startvalue": '100',
                    "valueOnRight": "2",
                    "displayvalue": "mês"
                }
            ]
        }
    ]
}
});
    fusioncharts.render();
    });



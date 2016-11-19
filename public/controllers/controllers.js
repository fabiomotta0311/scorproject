(function () {
app.controller('loginCtrl', function($scope) 
{
	$scope.titulo = "Faça o login";  

});﻿

app.controller('homeCtrl', function($scope) 
{
	$scope.mensagem = "SCOR PROJECT";  

});﻿

app.controller('detail_kpiCtrl', function($scope,$http) 
{
	$scope.titulo = "ATUALIZAÇÃO DE INDICADOR";

/* DADOS PARA TESTE		
	$scope.kpilist = {"name" : "Indicador TESTE",
	 				  "owner" : "Responsavel TESTE",
	 				  "code" : "KPITESTE",
	 				  _id: "5817b20d79caab2724ae5d07", 
	 				
	 				  "g1_titulo": "titulo_TESTE", 
      				  "g1_subtitulo":"subtitulo_TESTE", 
      				  "g1_rotulo_x":"RotuloX_TESTE",
      				  "g1_rotulo_y":"RotuloY_TESTE",
	 				  
	 				  "itens" :[
				    			{
							        "periodo" : "Jan",
							        "categoria" : "A",
							        "valor" : "18",
							        "meta" : "15"
							    },
							    {
							        "periodo" : "Fev",
							        "categoria" : "B",
							        "valor" : "22",
							        "meta" : "15"
							    }
							  ]
					  };

	$scope.kpi = $scope.kpilist; */

	var refresh1 = function(id) {
	  console.log(id);
	  $http.get('/kpilist/' + id).success(function(response) {
	    $scope.kpi = response;
	  });
	}; 
	
	var idxx = '581a81fb0dfec157b7123330';
	
	refresh1(idxx);

	function logx (attr) {
		for (var a = 0; a < attr.length; a++) {
        	console.log(attr[a]);
        }
	}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
	$scope.addSerie = function() {
	  console.log($scope.kpi);
	  $http.post('/kpilist/additem', $scope.kpi).success(function(response) {
	    console.log(response);
	    refresh1(idxx);
	  });
	};

	$scope.removeSerie = function(id) {
	  console.log(id);
	  $http.delete('/kpilist/' + id).success(function(response) {
	    refresh1(idxx);
	  });
	};

	$scope.editSerie = function(id) {
	  console.log(id);
	  $http.get('/kpilist/' + id).success(function(response) {
	    $scope.kpi = response;
	  });
	};  

	$scope.updateSerie = function() {
	  console.log($scope.kpi._id);
	  logx($scope.kpi.itens);
	  $http.put('/kpilist/' + $scope.kpi._id, $scope.kpi.itens).success(function(response) {
	    refresh(idxx);
	  })
	};


	$scope.deselect = function() {
	  $scope.kpi = "";
	}
 ////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////
		// Gráfico Diário em Linha
		Highcharts.chart('container1', {
	        title: { text: 'title', // TÍTULO
	        	x: -20 //center 
	    	},
	        subtitle: {
	            text: 'Numero',
	            x: -20
	        },
	        xAxis: {
	            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19','20']
	            //categories: [g1_cat]
	        },
	        yAxis: {
	            title: {
	                text: 'Reais (R$)'
	                //text: vg1_rotulo_y
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: 'Tokyo',
	            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,9.7, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,9.7]
	        }, {
	            name: 'Meta',
	            data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,15, 15, 15, 15, 15, 15, 15,15]
	        }]
	    });	

	// Gráfico Mensal em barra

	Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Custo Anual de Transporte'
        },
        subtitle: {
            text: 'Comparativo entre meses - 2016'
        },
        xAxis: {
            categories: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Meta',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]

        }]
    });

    // Gráfico Pareto
    var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container3',
        defaultSeriesType: 'column',
        borderWidth:1,
        borderColor:'#ccc',
        marginLeft:110,
        marginRight:50,
        //backgroundColor:'#eee',
        plotBackgroundColor:'#fff',
        alignTicks:false,
    },
    title:{
        text:'Pareto de Causas Raizes'
    },
    legend:{
                                     
    },
    tooltip:{
        formatter:function(){
                if(this.series.name == '% Acumulado'){
                    return this.y + '%';
                }
                return this.y;
            }
    },
    plotOptions: {
        series: {
            shadow:false,
        }
    },
    xAxis:{
        categories:['A','B','C','D','E','F','G','H'],
        lineColor:'#999',
        lineWidth:1,
        tickColor:'#666',
        tickLength:3,
        title:{
            text:'X Axis Title',
            style:{
                color:'#000'
            }
        }
    },
    yAxis:[{
        endOnTick:false,
        lineColor:'#999',
        lineWidth:1,
        tickColor:'#666',
        tickWidth:1,
        tickLength:3,
        gridLineColor:'#ddd',
        title:{
            text:'Reais (R$)',
            rotation:270,
            margin:15,
            style:{
                color:'#000'
            }
        }
    },{
        title:{text:''},
        gridLineWidth:0,
        lineColor:'#999',
        lineWidth:1,
        tickColor:'#666',
        tickWidth:1,
        tickLength:3,
        endOnTick:false,
        opposite:true,
        min:0,
        labels:{
            formatter:function(){
                return this.value + '%';
            }
        }
    }],
    series: [{
        name:'Total por Causa Raiz',
        yAxis:0,
        data: [515,475,360,255,245,230,120,115],
    },{
        type:'line',
        name:'% Acumulado',
        yAxis:1,
        data: [28,46,60,73,84,91,96,100],
    }]
});

});﻿

app.controller('kpiCtrl', function($scope,$http,$location) 
{
	$scope.mensagem = "CADASTRO DE INDICADORES";  

	var refresh = function() {
	  $http.get('/kpilist').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.kpilist = response;
	    $scope.kpi = "";
	  });
	};

	refresh();

	$scope.addKpi = function() {
	  console.log($scope.kpi);
	  $http.post('/kpilist', $scope.kpi).success(function(response) {
	    console.log(response);
	    refresh();
	  });
	};

	$scope.remove = function(id) {
	  console.log(id);
	  $http.delete('/kpilist/' + id).success(function(response) {
	    refresh();
	  });
	};

	$scope.edit = function(id) {
	  console.log(id);
	  $http.get('/kpilist/' + id).success(function(response) {
	    $scope.kpi = response;
	  });
	};  

	$scope.update = function() {
	  console.log($scope.kpi._id);
	  $http.put('/kpilist/' + $scope.kpi._id, $scope.kpi).success(function(response) {
	    refresh();
	  })
	};
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////
	// tentativa de criar uma rota a partir do kpi para o detail_kpi
	$scope.detail = function(id) {
	  console.log(id);
	  // Abrir a tela de detalhes do indicador
      //$state.go("/detail_kpi/" + $scope.kpi._id); 
      $location.path('/detail_kpi/' + id);
	};

	$scope.deselect = function() {
	  $scope.kpi = "";
	}

});﻿

app.controller('actionCtrl', function($scope,$http) 
{
	$scope.mensagem = "PLANO DE AÇÃO";

	var refresh = function() {
	  $http.get('/actionlist').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.actionlist = response;
	    $scope.action = "";
	  });
	};

	refresh();

	$scope.addAction = function() {
	  console.log($scope.action);
	  $http.post('/actionlist', $scope.action).success(function(response) {
	    console.log(response);
	    refresh();
	  });
	};

	$scope.remove = function(id) {
	  console.log(id);
	  $http.delete('/actionlist/' + id).success(function(response) {
	    refresh();
	  });
	};

	$scope.edit = function(id) {
	  console.log(id);
	  $http.get('/actionlist/' + id).success(function(response) {
	    $scope.action = response;
	  });
	};  

	$scope.update = function() {
	  console.log($scope.action._id);
	  $http.put('/actionlist/' + $scope.action._id, $scope.action).success(function(response) {
	    refresh();
	  })
	};

	$scope.deselect = function() {
	  $scope.action = "";
	}

});﻿

app.controller('dashCtrl', function($scope) 
{
	$scope.mensagem = "DASHBOARD";

	Highcharts.chart('container', {

				    xAxis: {
				        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
				    },

				    series: [{
				        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 100.4]
				    }]
				});
});﻿


app.controller('outroCtrl', ['$scope', '$http', function($scope, $http) 
{
	var refresh = function() {
	  $http.get('/contactlist').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.contactlist = response;
	    $scope.contact = "";
	  });
	};

	refresh();

	$scope.addContact = function() {
	  console.log($scope.contact);
	  $http.post('/contactlist', $scope.contact).success(function(response) {
	    console.log(response);
	    refresh();
	  });
	};

	$scope.remove = function(id) {
	  console.log(id);
	  $http.delete('/contactlist/' + id).success(function(response) {
	    refresh();
	  });
	};

	$scope.edit = function(id) {
	  console.log(id);
	  $http.get('/contactlist/' + id).success(function(response) {
	    $scope.contact = response;
	  });
	};  

	$scope.update = function() {
	  console.log($scope.contact._id);
	  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
	    refresh();
	  })
	};

	$scope.deselect = function() {
	  $scope.contact = "";
	}

}]);﻿

app.directive('ngAddrow', function () 
{
    return function (scope, element, attrs) 
    {
        element.on("keydown", function (event)
        {
            if (event.which === 9) 
            {
                scope.$apply(function () 
                {
                    if (scope.$last) 
                    {
                        scope.$eval(attrs.ngAddrow);
                    }
                });
            }
        });
    };
});


})();
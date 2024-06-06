Highcharts.chart('container1', {
    chart: {
        type: 'pie',
        backgroundColor: '#E8EDDF',
    },
    title: {
        text: 'Tipos de productos'
    },
    series: [{
        name: 'Productos',
        data: []
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'pie',
        backgroundColor: '#E8EDDF',
    },
    title: {
        text: 'Cantidad de pedidos por comuna'
    },
    series: [{
        name: 'Pedidos',
        data: []
    }]
});


fetch('/get-stats-data')
    .then((response) => response.json())
    .then((data) => { 
        let prodsFrutVer = data.prodsFrutVer.map((prod) => {
            return [prod.frutVer, prod.cantidad];
        });
        let pedidosCom = data.pedidosCom.map((ped) => {
            return [ped.comuna, ped.cantidad];
        });

        console.log(prodsFrutVer);
        console.log(data.pedidosCom);

        const chart1 = Highcharts.charts.find((chart) => chart && chart.renderTo.id === 'container1');
        const chart2 = Highcharts.charts.find((chart) => chart && chart.renderTo.id === 'container2');

        chart1.update({
            series: [{
                data: prodsFrutVer
            }]
        });
        chart2.update({
            series: [{
                data: pedidosCom
            }]
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

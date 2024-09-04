var compras = JSON.parse(localStorage.getItem('compras')) || [];
var ventas = JSON.parse(localStorage.getItem('ventas')) || [];
cargarTotales();

function cargarTotales(){
    var comprasMes = 0;
    var totalCompras = 0;
    var ventasMes = 0;
    var totalVentas = 0;

    var fechaActual = new Date();
    // PARA COMPRAS
    for(let i = 0; i < compras.length ; i++ ){
        var laFecha = compras[i].fecha;
        var laFecha = new Date(laFecha);
        
        if(laFecha.getFullYear() == fechaActual.getFullYear()){
            totalCompras += parseFloat(compras[i].total);

            if(laFecha.getMonth() == fechaActual.getMonth()){
                comprasMes += parseFloat(compras[i].total);
            }
        }
    }

    document.getElementById('comprasMes').innerText = comprasMes;
    document.getElementById('totalCompras').innerText = totalCompras;

    // PARA VENTAS
    for(let i = 0; i < ventas.length ; i++ ){
        var laFecha = ventas[i].fecha;
        var laFecha = new Date(laFecha);

        if(laFecha.getFullYear() == fechaActual.getFullYear()){
            totalVentas += parseFloat(ventas[i].total) - parseFloat(ventas[i].descuento);

            if(laFecha.getMonth() == fechaActual.getMonth()){
                ventasMes += parseFloat(ventas[i].total) - parseFloat(ventas[i].descuento);
            }
        }
    }

    document.getElementById('ventasMes').innerText = ventasMes;
    document.getElementById('totalVentas').innerText = totalVentas;
}

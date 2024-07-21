function ConsumoCarro() {
    let veiculo = parseFloat(document.getElementById("veiculo").value);
    let kmMes = parseFloat(document.getElementById("km").value);
    let resultadoMes = veiculo * kmMes;
    let resultadoAno = resultadoMes * 12;
    
    document.getElementById("resultKmMes").innerText = resultadoMes.toFixed(2);
    document.getElementById("resultKmAno").innerText = resultadoAno.toFixed(2);
    
    return resultadoMes;
}

function ConsumoEnergia() {
    let energiaMes = parseFloat(document.getElementById("energia").value);
    let resultadoMes = energiaMes * 0.000051;
    let resultadoAno = resultadoMes * 12;
    
    document.getElementById("resultEnergiaMes").innerText = resultadoMes.toFixed(2);
    document.getElementById("resultEnergiaAno").innerText = resultadoAno.toFixed(2);
    
    return resultadoMes;
}

function ConsumoGas() {
    let gasMes = parseFloat(document.getElementById("gas").value);
    let resultadoMes = gasMes * 0.04;
    let resultadoAno = resultadoMes * 12;
    
    document.getElementById("resultGasMes").innerText = resultadoMes.toFixed(2);
    document.getElementById("resultGasAno").innerText = resultadoAno.toFixed(2);
    
    return resultadoMes;
}

function Total() {
    let totalMes = ConsumoCarro() + ConsumoEnergia() + ConsumoGas();
    let totalAno = totalMes * 12;
    
    document.getElementById("resultTotalMes").innerText = totalMes.toFixed(2);
    document.getElementById("resultTotalAno").innerText = totalAno.toFixed(2);
    
    return {
        totalMes: totalMes.toFixed(2),
        totalAno: totalAno.toFixed(2)
    };
}

document.getElementById('formulario').addEventListener("submit", (e) => {
    e.preventDefault();
    const resultados = Total();
    
    localStorage.setItem('resultTotalMes', resultados.totalMes);
    localStorage.setItem('resultTotalAno', resultados.totalAno);
    
    window.location.href = "/pages/aguardandoResultados.html";
});

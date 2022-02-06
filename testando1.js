function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText = `A soma entre ${n1} e ${n2} é igual a ${s}.`
}

function minhaFuncao() {
    var cid = window.document.querySelector('#cidade').value
    var ress = window.document.querySelector('div#ress')
    
    var cid1 = String(texto.value)
    
    if( cid != "Capital" ){
    ress.innerHTML = `<p>Você nasceu em ${cid1} uma cidade na ${cid}, logo você é <strong>Paulista</strong></p>`
    } else {
    ress.innerHTML = `<p>Você nasceu em ${cid1} uma cidade na ${cid}, logo você é <strong>Paulistano</strong></p>`
    }
}
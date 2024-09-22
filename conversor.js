document.getElementById('conversorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // obtengo la forma de usar los valores del formulario y habilito el evento
  
    const tipoConversion = document.getElementById('tipoConversion').value;
    const moneda = document.getElementById('moneda').value.toUpperCase();
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    let resultado = 0;
    let tasaCambio = 0;

    //valida si cantidad es válida para convertir
    if (isNaN(cantidad) || cantidad <= 0) {
      document.getElementById('resultado').innerText = 'Por favor, ingrese una cantidad válida.';
      return;
    }
   // Setea el valor de tasa de cambio según la conversión a realizar
    switch (moneda) {
      case 'EUR':
        tasaCambio = 1.1; // Tasa ejemplo de EUR a USD
        break;
      case 'ARS':
        tasaCambio = 0.003; // Tasa ejemplo de ARS a USD
        break;
      case 'UYU':
        tasaCambio = 0.025; // Tasa ejemplo de UYU a USD
        break;
      case 'R$':
        tasaCambio = 0.18; // Tasa ejemplo de R$ a USD
        break;
      default:
        document.getElementById('resultado').innerText = 'Moneda no soportada.';
        return;
    }
    //Dependiento de la conversion se ejecuta otra moneda a Dolar o de Dolar a otra moneda 
    if (tipoConversion === '1') {
      // Convertir otra moneda a dólar
      resultado = cantidad * tasaCambio;
      document.getElementById('resultado').innerText = `El resultado es ${resultado.toFixed(2)} USD.`;
    } else if (tipoConversion === '2') {
      // Convertir dólar a otra moneda
      resultado = cantidad / tasaCambio;
      document.getElementById('resultado').innerText = `El resultado es ${resultado.toFixed(2)} ${moneda}.`;
    } else {
      document.getElementById('resultado').innerText = 'Tipo de conversión no válido.';
    }
  });
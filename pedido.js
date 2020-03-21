import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Cliente from './cliente.js';
import ElementoPedido from './elemento-pedido.js';
import Precio from './precio.js';

export default class Pedido {
  /**
   *
   * @param {Fecha} fecha La fecha del día.
   * @param {Tiempo} hora Hora del día.
   * @param {Cliente} cliente Cliente al que se le está vendiendo.
   */
  constructor(fecha, hora, cliente) {
    this.fecha = fecha;
    this.hora = hora;
    this.cliente = cliente;
    this.elementosPedidos = new Array();
  }

  getResumen() {
    return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total: ${new Precio(
      this.getCostoTotal()
    ).getPrecio()} `;
  }

  getNumeroElementos() {
    return this.elementosPedidos.length;
  }

  getNumeroProductos() {
    let totalProductos = 0;

    this.elementosPedidos.forEach(elemento => {
      totalProductos = totalProductos + elemento.cantidad;
    });

    return totalProductos;
  }

  getCostoTotal() {
    let costoTotal = 0;

    this.elementosPedidos.forEach(elemento => {
      costoTotal =
        costoTotal + elemento.cantidad * elemento.producto.precio.valor;
    });

    return costoTotal;
  }

  agregarElemento(elemento) {
    this.elementosPedidos.push(elemento);
  }

  listarElementos() {
    this.elementosPedidos.forEach(elemento => {
      console.log(elemento.getDescripcion());
    });
  }
}

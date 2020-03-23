import Pedido from './pedido.js';
import Producto from './producto.js';
import Direccion from './direccion.js';

export default class Restaurante {
  /**
   * @param {string} nombre
   * @param {number} telefono
   * @param {Direccion} dirección
   */
  constructor({ nombre, telefono, dirección }) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._dirección = dirección;
    this._productos = new Array();
    this._pedidos = new Array();
  }
  registrarPedido(pedido) {
    if (this.buscarPedido(pedido) === -1) {
      this._pedidos.push(pedido);
      return true;
    }

    return false;
  }
  eliminarPedido(pedido) {
    let indice = this.buscarPedido(pedido);

    if (indice < 0) return false;


    this._pedidos.splice(indice, 1);

    return true;
  }
  actualizarPedido(pedido, nuevoPedido) {
    let indice = this.buscarPedido(pedido);

    if (indice < 0) return false;


    this._pedidos.splice(indice, 1, nuevoPedido);

    return true;
  }
  buscarPedido(pedido) {
    let resultado = this._pedidos.findIndex(e => e.esIgualA(pedido));

    return resultado;
  }
  registrarProductos(producto) {
    this._productos.push(producto);
  }

  listarProductos() {
    this._productos.forEach(producto => {
      console.log(`${producto.getDescripcion()}`);
    });
  }

  listarPedido() {
    this._pedidos.forEach(pedido => {
      pedido.getDescripcion();
    });
    console.log('entra')
  }
}

import Producto from './producto.js';
import Precio from './precio.js';

export default class ElementoPedido {
  /**
   *
   * @param {Producto} producto Producto que se va a comprar
   * @param {number} cantidad Cantidad del producto que se va a comprar
   */
  constructor(cantidad, producto) {
    this._cantidad = cantidad;
    this._producto = producto;
  }
  getPrecioEP(){
    return this._producto.getPrecioP()
  }
  getDescripcion() {
    let costoTotal = new Precio(this._cantidad * this._producto.getPrecioP());
    return `${this._cantidad} x ${
      this._producto.getNombreProducto()
    } ${costoTotal.getPrecio()}`;
  }
}

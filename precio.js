export default class Precio {
  /**
   *
   * @param {number} valor El valor del producto
   */
  constructor(valor) {
    this.valor = valor;
  }

  getPrecio() {
    return this.valor.toLocaleString('en-US', {
      style: 'currency',
      currency: 'MXN'
    });
  }
}

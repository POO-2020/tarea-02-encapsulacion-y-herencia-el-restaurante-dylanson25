export default class Tiempo {
  /**
   *
   * @param {number} hora
   * @param {number} minuto
   * @param {string} periodo
   */
  constructor({ hora, minuto, periodo }) {
    this.hora = hora;
    this.minuto = minuto;
    this.periodo = periodo.toUpperCase();
  }

  getFormato12() {
    return `${this.hora}:${this.minuto} ${this.periodo}`;
  }

  getFormato24() {
    if (this.periodo === 'AM') {
      return `${this.hora}:${this.minuto}`;
    } else {
      return `${this.hora + 12}:${this.minuto}`;
    }
  }
}

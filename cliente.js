export default class Cliente {
  /**k
   *
   * @param {string} nombre Nombre completo del cliente
   * @param {Direccion} direccion La dirección del cliente
   * @param {number} telefono Número de teléfonodel cliente
   */
  constructor(nombre, direccion, telefono) {
    this.direccion = direccion;
    this.nombre = nombre;
    this.telefono = telefono;
  }

  getPerfil() {
    let perfil = `${this.nombre}, ${
      this.telefono
    }, ${this.direccion.getFormatoCorto()}`;

    return perfil;
  }
}

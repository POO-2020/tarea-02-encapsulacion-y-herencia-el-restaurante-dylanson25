export default class Direccion {
  /**
   *
   * @param {string} calle Calle del domicilio del cliente
   * @param {number} numeroExterior Número exterior de la residencia del cliente
   * @param {number} numeroInterior Número interior de la residencia del cliente
   * @param {string} colonia Colonia donde vive el cliente
   * @param {number} codigoPostal Código postal de la comunidad del cliente
   * @param {string} ciudad Ciudad donde vive el cliente
   * @param {string} municipio Municipio donde vive el cliente
   */
  constructor(
    calle,
    numeroExterior,
    numeroInterior,
    colonia,
    codigoPostal,
    ciudad,
    municipio
  ) {
    this.calle = calle;
    this.numeroExterior = numeroExterior;
    this.numeroInterior = numeroInterior;
    this.colonia = colonia;
    this.codigoPostal = codigoPostal;
    this.ciudad = ciudad;
    this.municipio = municipio;
  }

  getFormatoCorto() {
    let direccion = `${this.calle} ${this.numeroExterior}`;

    return direccion;
  }

  getFormatoExtendido() {
    return ` ${this.calle} ${this.numeroExterior},${this.numeroInterior} ${this.colonia} CP.${this.codigoPostal} ${this.ciudad}, ${this.municipio}`;
  }
}

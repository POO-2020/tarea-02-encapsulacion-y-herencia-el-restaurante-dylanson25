import Cliente from "./cliente.js";

export default class Frecuente extends Cliente{
    constructor({numeroCliente, fechaRegistro, nombre, direccion, telefono}){
        super(nombre, direccion, telefono)
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
    }
    getPerfil(){
        return `${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this.getNombre()}, ${this._direccion.getFormatoCorto()}, ${this.getTelefono()}`
    }

}
import Restaurante from './resturante.js';
import Producto from './producto.js';
import Precio from './precio.js';
import ElementoPedido from './elemento-pedido.js';
import Pedido from './pedido.js';
import Fecha from './fecha.js';
import Tiempo from './tiempo.js';
import Cliente from './cliente.js';
import Direccion from './direccion.js';

class Main {
  constructor() {
    this.fecha = new Fecha(15, 6, 2005);

    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.direccion = new Direccion(
      'Av. Universidad',
      333,
      0,
      'Las Víboras',
      28040,
      'Colima',
      'Colima'
    );

    this.precio = new Precio(2500.5);

    this.producto = new Producto('Pizza Hawaiana', this.precio);
    this.elemento = new ElementoPedido(2, this.producto);
    this.elemento2 = new ElementoPedido(1, this.producto);
    this.elemento3 = new ElementoPedido(3, this.producto);

    this.cliente = new Cliente('Juan Pérez Díaz', this.direccion, 3124563256);
    this.cliente2 = new Cliente('Juana Arco Díaz', this.direccion, 445566);
    this.cliente3 = new Cliente('Juan Ramillo Guzman', this.direccion, 998845098);

    let ped_1 = {
      fecha: this.fecha,
      hora: this.tiempo1,
      cliente: this.cliente,
      numeroPedido: 1
    }
    let ped_2 = {
      fecha: this.fecha,
      hora: this.tiempo1,
      cliente: this.cliente2,
      numeroPedido: 2
    }
    let ped_3 = {
      fecha: this.fecha,
      hora: this.tiempo1,
      cliente: this.cliente3,
      numeroPedido: 3
    }
    this.pedido1 = new Pedido(ped_1)
    this.pedido2 = new Pedido(ped_2)
    this.pedido3 = new Pedido(ped_3)
    //this.pedido = new Pedido(this.fecha, this.tiempo1, this.cliente);
    this.pedido1.agregarElemento(this.elemento);
    this.pedido2.agregarElemento(this.elemento2);
    this.pedido3.agregarElemento(this.elemento3);
    this.pedido3.agregarElemento(this.elemento);
    
  }



  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
    console.log(this.tiempo2.getFormato12());
    console.log(this.tiempo1.getFormato24());
    console.log(this.tiempo2.getFormato24());
  }

  probarDireccion() {
    console.log(this.direccion.getFormatoCorto());
    console.log(this.direccion.getFormatoExtendido());
  }

  probarPrecio() {
    console.log(this.precio.getPrecio());
  }

  probarProducto() {
    console.log(this.producto.getDescripcion());
  }

  probarCliente() {
    console.log(this.cliente.getPerfil());
  }

  probarElementoPedido() {
    console.log(this.elemento.getDescripcion());
  }

  probarPedido() {
    console.log(this.pedido1.getResumen());
    console.log(this.pedido2.getNumeroElementos());
    console.log(this.pedido3.getNumeroProductos());
    console.log(this.pedido1.getCostoTotal());
    this.pedido2.listarElementos();
  }
  probarRestaurante() {
    let res_1 = {
      nombre: 'Pizza Benis',
      telefono: 3121319198,
      direccion: 'av.siempre viva'
    }
    this.restaurante = new Restaurante(res_1)
   
    console.log(this.restaurante.registrarPedido(this.pedido1))
    console.log(this.restaurante.registrarPedido(this.pedido2))
    console.log(this.restaurante.registrarPedido(this.pedido3))
    this.restaurante.listarPedido()
    console.log(this.restaurante.eliminarPedido(this.pedido3))
    this.restaurante.listarPedido()
    console.log(this.restaurante.actualizarPedido(this.pedido2, this.pedido3))
    this.restaurante.listarPedido()
  }
}

let app = new Main();
app.probarRestaurante()

app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarCliente();
app.probarPedido();

import { useState, useEffect } from 'react';
import { getClientes, crearCliente, actualizarCliente, eliminarCliente } from './api';
import './style.css';


function App() {
  const [clientes, setClientes] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState({
    codcli: '',
    nombre: '',
    direccion: '',
    codpostal: '',
    codpue: ''
  });
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const fetchClientes = async () => {
      setCargando(true);
      const data = await getClientes();
      setClientes(data);
      setCargando(false);
    };
    fetchClientes();
  }, []);

  const agregarCliente = async (cliente) => {
    setCargando(true);
    const data = await crearCliente(cliente);
    setClientes([...clientes, data]);
    setCargando(false);
  };

  const actualizarClienteExistente = async (id, clienteActualizado) => {
    setCargando(true);
    const data = await actualizarCliente(id, clienteActualizado);
    setClientes(clientes.map((cliente) => (cliente.codcli === id ? data : cliente)));
    setCargando(false);
  };

  const eliminarClienteExistente = async (id) => {
    setCargando(true);
    await eliminarCliente(id);
    setClientes(clientes.filter((cliente) => cliente.codcli !== id));
    setCargando(false);
  };

  const seleccionarCliente = (cliente) => {
    setClienteSeleccionado(cliente);
    setModoEdicion(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClienteSeleccionado({ ...clienteSeleccionado, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!modoEdicion) {
      agregarCliente(clienteSeleccionado);
    } else {
      actualizarClienteExistente(clienteSeleccionado.codcli, clienteSeleccionado);
      setModoEdicion(false);
    }
    setClienteSeleccionado({
      codcli: '',
      nombre: '',
      direccion: '',
      codpostal: '',
      codpue: ''
    });
  };

  const handleCancelarEdicion = () => {
    setClienteSeleccionado({
      codcli: '',
      nombre: '',
      direccion: '',
      codpostal: '',
      codpue: ''
    });
    setModoEdicion(false);
  };

  return (
    <div>
      <h1>Clientes</h1>
      {cargando && <p>Cargando clientes...</p>}
      {!cargando && clientes.length === 0 && <p>No hay clientes disponibles.</p>}
      {!cargando && clientes.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Código Postal</th>
              <th>Pueblo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.codcli}>
                <td>{cliente.codcli}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.codpostal}</td>
                <td>{cliente.codpue}</td>
                <td>
                  <button class="editar" onClick={() => seleccionarCliente(cliente)}>Editar</button>
                  <button class="eliminar" onClick={() => eliminarClienteExistente(cliente.codcli)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>{modoEdicion ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Código:
          <input type="text" name="codcli" value={clienteSeleccionado.codcli} onChange={handleInputChange} />
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" value={clienteSeleccionado.nombre} onChange={handleInputChange} />
        </label>
        <label>
          Dirección:
          <input type="text" name="direccion" value={clienteSeleccionado.direccion} onChange={handleInputChange} />
        </label>
        <label>
          Código Postal:
          <input type="text" name="codpostal" value={clienteSeleccionado.codpostal} onChange={handleInputChange} />
        </label>
        <label>
          Pueblo:
          <input type="text" name="codpue" value={clienteSeleccionado.codpue} onChange={handleInputChange} />
        </label>
        <div>
          <button type="submit">{modoEdicion ? 'Guardar cambios' : 'Agregar'}</button>
          {modoEdicion && <button type="button" onClick={handleCancelarEdicion}>Cancelar</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
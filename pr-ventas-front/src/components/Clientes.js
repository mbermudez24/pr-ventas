import { useState, useEffect } from 'react';
import axios from 'axios';

function Clientes() {
    const [clientes, setClientes] = useState([]);

    // Obtiene la lista de clientes desde la API al cargar el componente
    useEffect(() => {
        async function fetchClientes() {
            const response = await axios.get('http://localhost:3000/clientes');
            setClientes(response.data);
        }
        fetchClientes();
    }, []);



    // Elimina un cliente de la base de datos y actualiza la lista de clientes
    async function handleEliminarCliente(id) {
        try {
            await axios.delete(`http://localhost:3000/clientes/${id}`);
            setClientes(clientes.filter(cliente => cliente.codcli !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Código Postal</th>
                        <th>Código Pueblo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.codcli}>
                            <td>{cliente.codcli}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.codpostal}</td>
                            <td>{cliente.codpue}</td>
                            <td>
                                <button onClick={() => handleEliminarCliente(cliente.codcli)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clientes;

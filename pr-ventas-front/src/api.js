import axios from 'axios';

const baseUrl = 'http://localhost:3000'; // Cambie esta URL si es diferente

export const getClientes = async () => {
    const response = await axios.get(`${baseUrl}/clientes`);
    return response.data;
};

export const crearCliente = async (nuevoCliente) => {
    const response = await axios.post(`${baseUrl}/clientes`, nuevoCliente);
    return response.data;
};

export const actualizarCliente = async (id, clienteActualizado) => {
    const response = await axios.put(`${baseUrl}/clientes/${id}`, clienteActualizado);
    return response.data;
};

export const eliminarCliente = async (id) => {
    const response = await axios.delete(`${baseUrl}/clientes/${id}`);
    return response.data;
};

// en src/components/NuevoCliente.js
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function NuevoCliente() {
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: '',
        codpostal: '',
        codpue: '',
    });
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:3000/clientes', cliente).then(() => {
            navigate('/');
            // navigate('/clientes');
        });
    };

    const handleChange = event => {
        setCliente({
            ...cliente,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={cliente.direccion}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="codpostal">Código Postal</label>
                <input
                    type="text"
                    id="codpostal"
                    name="codpostal"
                    value={cliente.codpostal}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="codpue">Código Pueblo</label>
                <input
                    type="text"
                    id="codpue"
                    name="codpue"
                    value={cliente.codpue}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}

export default NuevoCliente;

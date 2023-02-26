import { useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';

function EditarCliente() {
    const [cliente, setCliente] = useState({
        codcli: '',
        nombre: '',
        direccion: '',
        codpostal: '',
        codpue: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCliente({
            ...cliente,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/clientes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
        })
            .then(() => navigate('/'))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="codcli">Código Cliente</label>
                <input
                    type="number"
                    id="codcli"
                    name="codcli"
                    value={cliente.codcli}
                    onChange={handleChange}
                />
            </div>
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

export default EditarCliente;
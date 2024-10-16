import React, { useState } from 'react';

interface ModalContactProps {
    onClose: () => void; // Función para cerrar el modal
}

const ModalContact: React.FC<ModalContactProps> = ({ onClose }) => {
    // Estados para los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Función para envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`);
        // Limpiar los campos del formulario después del envío
        setName('');
        setEmail('');
        setMessage('');
        onClose(); // Cerrar el modal después del envío
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contacto</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContact;
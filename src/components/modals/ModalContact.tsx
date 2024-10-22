import React, { useState } from 'react';

interface ModalContactProps {
    onClose: () => void; // Para cerrar el modal
}

const ModalContact: React.FC<ModalContactProps> = ({ onClose }) => {
    // Estados para los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Función para envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // const response = await fetch('http://localhost:5000/api/contact', {
            const response = await fetch('https://viajes-node-83abe465dfd4.herokuapp.com/api/contact', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el correo');
            }

            alert('Mensaje enviado con éxito');
            setName('');
            setEmail('');
            setMessage('');
            onClose();
        } catch (error) {
            const err = error as Error;
            alert(err.message);
        }
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
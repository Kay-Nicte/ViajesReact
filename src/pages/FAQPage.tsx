import React from 'react';

const FAQPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className='mb-5'>Preguntas Frecuentes (FAQ)</h1>
            <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ¿Cómo puedo reservar un viaje?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Para reservar un viaje, simplemente elige un destino, selecciona las fechas y sigue el proceso de pago.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Puedo cancelar mi reserva?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Sí, puedes cancelar tu reserva hasta 48 horas antes de la salida. Consulta nuestras políticas de cancelación para más detalles.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
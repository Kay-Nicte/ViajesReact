const ModalFavorites = ({ favorites, show, handleClose }) => {
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Destinos Favoritos</h5>
                        <button type="button" className="close" onClick={handleClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            {favorites.length === 0 ? (
                                <li className="list-group-item">No tienes destinos favoritos.</li>
                            ) : (
                                favorites.map((favorite, index) => (
                                    <li key={index} className="list-group-item">
                                        {favorite}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
import React from 'react';

const Estudiantes = () => {
    return (
        <div>
              <form>
                <h1>Estudiantes</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Documento</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="documento" 
                        id="documento"
                        value=""
                        onChange="" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombres</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombres" 
                        id="nombres"
                        value=""
                        onChange="" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="apellidos" 
                        id="apellidos" 
                        value=""
                        onChange="" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="telefono">Teléfono</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="telefono" 
                        id="telefono"
                        value=""
                        onChange="" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="celular">Celular</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="celular" 
                        id="celular"
                        value=""
                        onChange="" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion">Dirección</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="direccion" 
                        id="direccion" 
                        value=""
                        onChange="" />
                    </div>


                    <div className="form-group col-md-4">
                        <label htmlFor="celular">Correo</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="correo" 
                        id="correo" 
                        value=""
                        onChange="" />
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange=""
                        />

                        <button className="btn btn-success"
                            type="button">Imagen</button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>

                    <div>
                        <button className="btn btn-primary" type="button"
                            >Logout</button>
                    </div>

                </div>
            </form>
            
        </div>
    );
};

export default Estudiantes;


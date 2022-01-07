import React, { Component } from 'react';
import { Modal, Button, Col, Row, FormGroup, Form } from 'react-bootstrap';

export default class ModalPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nit: '',
            phone: '',
            email: '',
            city: '',
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let name = e.target.id;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="modal-popup">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    classNmae="modal-popup"
                >

                    <Modal.Header closeButton>

                        <Modal.Title id="contained-modal-title-vcenter">
                            NUEVO CLIENTE
                        </Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                        <div className="container">
                            <form className='form-horizontal'>
                                <div className="form-group">
                                    <Form>
                                        <FormGroup>
                                            <label className="control-label col-sm-2">Nombre:</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onChange} /></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="control-label col-sm-2">NIT:</label>
                                            <div className="col-sm-10"><input type="number" className="form-control" id="nit" value={this.state.nit} onChange={this.onChange} /></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="control-label col-sm-2">Celular:</label>
                                            <div className="col-sm-10"><input type="number" className="form-control" id="phone" value={this.state.phone} onChange={this.onChange} /></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="control-label col-sm-2">Email:</label>
                                            <div className="col-sm-10"><input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onChange} /></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="control-label col-sm-2">Ciudad:</label>
                                            <div className="col-sm-10">
                                                <select className="form-control col-sm-10" id="city" value={this.state.city} onChange={this.onChange}>
                                                    <option value="Santa Cruz">Santa Cruz</option>
                                                    <option value="La Paz">La Paz</option>
                                                    <option value="Cochabamba">Cochabamba</option>
                                                    <option value="Chuquisaca">Chuquisaca</option>
                                                    <option value="Tarija">Tarija</option>
                                                    <option value="Oruro">Oruro</option>
                                                    <option value="Potosi">Potosi</option>
                                                    <option value="Pando">Pando</option>
                                                    <option value="Beni">Beni</option>
                                                </select>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button variant="success" style={
                                                {
                                                    marginTop: '30px',
                                                    marginLeft: '12px',
                                                    color: 'white'
                                                }
                                            }
                                                type="submit"
                                            >
                                                Guardar
                                            </Button>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </form>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Cerrar</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

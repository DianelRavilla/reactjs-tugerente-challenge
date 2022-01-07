import React, { Component } from 'react';
import Select from 'react-select';
import ModalPopup from './ModalPopup';

var options = [];
var response = [];
var data = [];
var CTRL = 0;
var SKIP = 20;
var TAKE = 20;
var ENUM = 0;

class DropDown extends Component {

    state = {
        selectedOption: null,
        loading: true,
        data: null,
        options: null,
        response: "Datos extraidos Correctamente",
        showModal: false,
    };

    async componentDidMount() {
        await this.fetchData();
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    getValue = () => {
        const { selectedOption } = this.state;
        return selectedOption;
    }

    staticOption = () => {
        options.push({ "value": "new", "label": "NUEVO CLIENTE" });
    }

    // METODO FETCH
    fetchData = async () => {
        this.setState({ loading: true });

        var myHeaders = new Headers();
        const { api_url, api_key } = this.props;
        myHeaders.append("apikey", api_key);
        myHeaders.append("Content-Type", "*/*");
        myHeaders.append("Accept", "*/*");
        if (data.results == 0) {
            this.setState({ loading: false });
            this.setState({ response: "No se encontraron mas resultados" });
            return;
        }
        else if (CTRL == 0) {
            this.staticOption();
            myHeaders.append("Data-Operations", '{"skip": "0", "take":' + TAKE + '}');
            CTRL = -1;
        } else {
            myHeaders.append("Data-Operations", '{"skip": ' + SKIP + ', "take":' + TAKE + '}');
            SKIP = SKIP + TAKE;
        }
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        response = await fetch(api_url, requestOptions);
        data = await response.json();
        this.setState({ data: data, loading: false });

        console.log(data);

        for (var i = 0; i < TAKE; i++) {
            var name = data.results[i].name;
            var nit = data.results[i].nit;
            var email = data.results[i].business_email;
            var number = data.results[i].contact_phone;
            var city = data.results[i].city;
            ENUM = ENUM + 1;
            var opt = (ENUM) + " | " + name + " | NIT: " + nit + " | CEL: " + number + " | " + email + " | " + city;
            options.push({ value: data.results[i], label: opt });
        }
    };

    render() {
        const { selectedOption } = this.state;
        let addModalClose = () => this.setState({ showModal: false });

        if (this.getValue() != null && this.getValue().value == "new") {
            this.setState({ showModal: true });
            this.setState({ selectedOption: null });
        }
        
        return (
            <div className="search-bar">
                <span className="search-label">
                    <h5>BUSQUEDA PERSONALIZADA:</h5>
                </span>
                <span className="search-dropdown">
                    <Select className="search-dropdown-element"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="Seleccione una opción o escriba una palabra clave"
                        maxMenuHeight={750}
                        onMenuScrollToBottom={this.fetchData}
                        // CAMBIA EL ESTILO DE LA PRIMERA OPCIÓN
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                                borderBottom: '1px dotted pink',
                                padding: 20,
                            }),
                            control: (provided, state) => ({
                                ...provided,
                                width: '100%', 
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxShadow: 'none',
                                '&:hover': {
                                    border: '1px solid #ccc',
                                    boxShadow: 'none',
                                },
                            }),
                            singleValue: (provided, state) => {
                                const opacity = state.isDisabled ? 0.5 : 1;
                                const transition = 'opacity 300ms';
                                return { ...provided, opacity, transition };
                            }
                        }}
                    />
                </span>
                <span className="loading-status">
                    {this.state.loading ? <p>Cargando...</p> : <p>{this.state.response}</p>}
                </span>
                <ModalPopup
                show={this.state.showModal}
                onHide={addModalClose}>
                </ModalPopup>
            </div>
        );
    }
}
export default DropDown;

import React, {Component} from 'react'
import './Register.css'
import axios from 'axios'
import $ from 'jquery';


const baseUrl = 'http://localhost:3003/users'
const initialState = {
    user: 
    { 
        name: '', 
        birth: '', 
        cpf : '',
        cep : '',
        bairro : '',
        logradouro : '',
        numero : '',
        complemento : '',
        localidade : '',
        uf : '' 
    },
    list: []
}


export default class Register extends Component {

    state = { ...initialState}

    componentWillMount() {  /* function that will be called when the component appears on the screen */
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    componentDidMount () {
        const cep = document.querySelector("#cep")

        const showData = (result) => {
            for(const campo in result) {
                if(document.querySelector("#"+campo)) {
                    document.querySelector("#"+campo).value = result[campo]
                }
            }
        }
        cep.addEventListener("blur", (e) => {
            let search = cep.value.replace("-", "")
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }

            fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then( response => { response.json()
                .then( data => showData(data))})
            .catch( e => console.log('Erro: ' + e.message))
        })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list =  this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user) /* unshift set a determinated element of array in the 1º position */
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    home() {
        window.open(window.location.hostname, "_self")
    }

    render() {
        return (
            <div className="register--background">
                <div className="register">
                    <div className="register--title">
                        <h3>REGISTER</h3>
                    </div>
                    <div className="form--register">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" id="name" required="required" value={this.state.user.name} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="birth" className="form-label">Date of birth</label>
                                <input type="date" className="form-control" required="required" name="birth" id="birth" maxLength="9" value={this.state.user.birth} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="cpf" className="form-label">CPF</label>
                                <input type="text" className="form-control" required="required" name="cpf" id="cpf" maxLength="11" value={this.state.user.cpf} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="cep" className="form-label">Zip</label>
                                <div className="form-inline">
                                    <input type="text" className="form-control" required="required" name="cep" id="cep" value={this.state.user.cep} onChange={e => this.updateField(e)} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="bairro" className="form-label">Neighborhood</label>
                                <input type="text" className="form-control" required="required" name="bairro" id="bairro" value={this.state.user.bairro} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="logradouro" className="form-label">Address</label>
                                <input type="text" className="form-control" required="required" name="logradouro" id="logradouro" value={this.state.user.logradouro} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="numero" className="form-label">Number</label>
                                <input type="text" className="form-control" name="numero" id="numero" value={this.state.user.numero} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="complemento" className="form-label">Complement</label>
                                <input type="text" className="form-control" name="complemento" id="complemento" value={this.state.user.complemento} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="localidade" className="form-label">City</label>
                                <input type="text" className="form-control" required="required" name="localidade" id="localidade" value={this.state.user.localidade} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="uf" className="form-label">State</label>
                                <input type="text" className="form-control" required="required" name="uf" id="uf" value={this.state.user.uf} onChange={e => this.updateField(e)} />
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className="button--register btn btn-primary" data-dismiss="alert" onClick={e => this.save(e)} >Register</button>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className="btn btn-danger" onClick={this.home}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
    
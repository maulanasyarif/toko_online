import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

function Register() {

const navigate = useNavigate();
const [msg, setMsg] = useState('');
const [province, setProvince] = useState([]);
const [city, setCity] = useState([]);
const [prov_id, setProv_id] = useState();
const [input, setInput] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        province_id: '',
        city_id: '',
});

useEffect(() => {
    axios.get('http://localhost:8000/api/auth/get-province').then(res => {
        if(res.status === 200){
            setProvince(res.data.province);
        }
    });
    
    axios.get('http://localhost:8000/api/auth/get-cities').then(res => {
        if(res.status === 200){
            setCity(res.data.city);
        }
        });
}, []);

const get_id = {
    setProv_id()
}
console.log(get_id);

    const handleInput = (e) => {
        e.persist();
        setInput({...input, [e.target.name]: e.target.value});
    }

    const processRegis = async (e) => {
        e.preventDefault();

        const data = {
            name: input.name,
            email: input.email,
            address: input.address,
            phone: input.phone,
            password: input.password,
            province_id: input.province_id,
            city_id: input.city_id,
        }
console.log(data);
        // try {
        //     await axios.post('http://localhost:8000/api/auth/register', data);
        //     navigate("/login");
        // } catch (error) {
        //     if(error.response)
        //     {
        //     setMsg(error.response.data.message);
        //     navigate("/register");
        //     }
        // }
    }

return (
    <div>
        <Header />
        <div className="container mt-5">
            <div className="columnsmt-3">
                <div className="column is-mobile is-centered">
                    <div className="box">
                        <form onSubmit={processRegis}>
                        <p className="has-text-centered is-size-4">{msg}</p>
                            <div className="columns">

                                <div className="column">
                                    <div className="column">
                                        <label className="label has-text-left">Name </label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" onChange={handleInput}  value={input.name} 
                                                name="name" type="text" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label has-text-left">Email </label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" onChange={handleInput} value={input.email}
                                                name="email" type="email" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label has-text-left">Password</label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" onChange={handleInput} value={input.password}
                                                name="password" type="password" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label has-text-left">Phone Number </label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" onChange={handleInput} value={input.phone}
                                                name="phone" type="text" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="column">
                                        <label className="label has-text-left">Province </label>
                                        <div className="control">
                                            <div className="select is-normal">
                                                <select name="province_id" onChange={handleInput} value={input.province_id} required>
                                                <option value="">-- Choose Province</option>
                                                    {province.map((prov, index) => (
                                                    <option key={index} value={prov.id}>{prov.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label has-text-left">City </label>
                                        <div className="control">
                                            <div className="select is-normal">
                                                <select name="city_id" onChange={handleInput} value={input.city_id} required>
                                                <option value="">-- Choose City</option>
                                                    {city.map((cit, index) => (
                                                    <option key={index} value={cit.id}>{cit.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <label className="label has-text-left">Address</label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" onChange={handleInput} value={input.address}
                                                name="address" type="text" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="buttons">
                                <Link className="button is-primary" to={`/login`}>
                                Sign In
                                </Link>
                                <button className="button is-link">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Register;
import React from 'react'
import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'http://localhost:8000',
    timout: 10000,
    headers: {
        'content-Type':'apllication/json',
    },
});
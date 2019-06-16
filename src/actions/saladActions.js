import axios from "axios";
import { mockResponse } from "../mockResponse";

mockResponse();

const startRequest = () => {
    return {
        type: "REQUEST_SALAD"
    }
}

const updateSaladIdAndName = (id, name) => {
    return {
        type: "UPDATE_ID_AND_NAME",
        id,
        name
    }
}

const updateSaladVegetablesAndMeat = (vegetables, meat) => {
    return {
        type: "UPDATE_VEGETABLES_AND_MEAT",
        vegetables,
        meat
    }
}

const updateSaladImg = url => {
    return {
        type: "UPDATE_URL",
        url
    }
}

const endRequest = () => {
    return {
        type: "RECEIVE_SALAD"
    }
}

export const fetchSalad = salad => dispatch => {
    dispatch(startRequest());
    return axios.get(`/${salad}`)
    .then(resp => {
        dispatch(updateSaladIdAndName(resp.data.id, resp.data.name));
        return Promise.all([
            axios.get(`/vegetables/${resp.data.id}`),
            axios.get(`/meat/${resp.data.id}`)
        ])
    })
    .then(resp => {
        dispatch(updateSaladVegetablesAndMeat(resp[0].data, resp[1].data));
        const vegetables = resp[0].data.reduce((result, item) => result += "+" + item);
        const meat = resp[1].data.reduce((result, item) => result += "+" + item);
        return axios.get(`/saladImageGenerator/ingredients?vegetables=${vegetables}&meat=${meat}`);
    })
    .then(resp => {
        dispatch(updateSaladImg(resp.data.url));
        dispatch(endRequest());
    })
}


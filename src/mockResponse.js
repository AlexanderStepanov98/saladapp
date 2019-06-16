import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const mockResponse = () => {
    const mock = new MockAdapter(axios, { delayResponse: 500 });

    mock.onGet('/saladOfTheDay').reply(200, {
        id: 1, 
        name: 'salad 1'
    });
    
    mock.onGet('/vegetables/1').reply(200, [
        "tomatoes", "cabbage", "cucumber"
    ]);
    
    mock.onGet('/meat/1').reply(200, [
        "chicken"
    ]);
    
    mock.onGet('/saladImageGenerator/ingredients?vegetables=tomatoes+cabbage+cucumber&meat=chicken').reply(200, {
        url: "https://img.pngio.com/free-png-salad-png-images-transparent-salad-png-850_395.png"
    });
}


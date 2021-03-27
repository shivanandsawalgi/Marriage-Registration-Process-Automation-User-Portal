import axios from 'axios';

function genericAjax(AjaxConfig) {

    const method = AjaxConfig.method || "GET";

    const data = AjaxConfig.data || { default: "Default Data" };
    const url = AjaxConfig.url;
    switch (method) {

        case "GET":
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(responce => {
                    console.log(responce);
                });
            break;

        case "POST":
            // post method takes two arguments 1. Url  2. data to post
            axios.post(url, data)
                .then(responce => {
                    console.log(responce);
                });
            break;

        case "DELETE":
            //Delete Request
            axios.delete("https://jsonplaceholder.typicode.com/posts/1")
                .then(responce => {
                    console.log(responce)
                })
            break;
    }


}

export default genericAjax;
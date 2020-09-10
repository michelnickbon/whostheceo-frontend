const endpoint = process.env.VUE_APP_BASEURL;

export async function GetData() {
    try {
        let response = await fetch(endpoint);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

// import * as Base from "../assets/Base"
const baseUrl = process.env.VUE_APP_BASEURL;

export async function GetData(endpoint) {
    try {
        let response = await fetch(baseUrl + endpoint);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}
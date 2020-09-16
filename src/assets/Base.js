const baseUrl = process.env.VUE_APP_BASEURL;

export async function GetData(endpoint) {
  try {
    const response = await fetch(baseUrl + endpoint);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function PostData(endpoint, body) {
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(body)
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

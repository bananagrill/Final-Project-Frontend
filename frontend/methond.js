
const getDatafromShadow = async () => {
    const options = {
        method: "GET",
        headers: { 'Authorization': 'Device 4513aa93-b88c-4e9b-92d3-11ba2920a2ee:Z7XT8mdToAGAYFU8898Xym7sgyBiC64K' },
        credentials: "include",
    };
    await fetch(`https://localhost:3000/v2/device/shadow/data`, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data)
        })
        .catch((error) => console.error(error));
};
getDatafromShadow()
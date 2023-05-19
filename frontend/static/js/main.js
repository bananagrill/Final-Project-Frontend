const backendIPAddress = '127.0.0.1:3000';

const fetchDeviceStatusShadow = async () => {
  const updateUIWithData = (dust, temp, humidity, wind) => {
    document.getElementById('dust-value').innerHTML = dust + ' AQI';
    document.getElementById('temp-value').innerHTML = temp + ' °C';
    document.getElementById('humidity-value').innerHTML = humidity + '%';
    document.getElementById('wind-value').innerHTML =  wind + ' km/h';

    /* Will do letter
    const statusImageElement = document.getElementById('status-image');
    if (data.data.value <= 50) {
        statusImageElement.src = 'static/images/status/icon-normal.png';
    } else if (data.data.value <= 100) {
        statusImageElement.src = 'static/images/status/icon-moderate.png';
    } else if (data.data.value <= 150) {
        statusImageElement.src = 'static/images/status/icon-unhealthy.png';
    } else {
        statusImageElement.src = 'static/images/status/icon-hazardous.png';
    }
    */
  };

  try {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Device 4513aa93-b88c-4e9b-92d3-11ba2920a2ee:Z7XT8mdToAGAYFU8898Xym7sgyBiC64K',
      },
      credentials: 'include',
    };
    const response = await fetch(`http://${backendIPAddress}/api/device/shadow/data`, options);
    const data = await response.json();
    console.log(data);
    const dataTable = data.data;
    updateUIWithData(dataTable.dust, dataTable.temp, dataTable.humidity, dataTable.wind);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchDeviceStatusShadow();

setInterval(fetchDeviceStatusShadow, 2000);
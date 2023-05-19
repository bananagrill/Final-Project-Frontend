const backendIPAddress = '127.0.0.1:3000';

const fetchDeviceStatusShadow = async () => {
  const updateUIWithData = (dust, temp, humidity, wind) => {
    document.getElementById('dust-value').innerHTML = dust + ' AQI';
    document.getElementById('temp-value').innerHTML = temp + ' °C';
    document.getElementById('humidity-value').innerHTML = humidity + '%';
    document.getElementById('wind-value').innerHTML = wind + ' km/h';

    const statusImage = document.getElementById('status-image');
    const dustDescription = document.getElementById('dust-description');
    const tempImge = doucment.getElementByClassName("temp-image");
    if (dust >= 301) {
      statusImage.src = 'static/images/status/icon-maroon.png';
      dustDescription.innerHTML = 'Hazardous';
    } else if (dust >= 201) {
      statusImage.src = 'static/images/status/icon-purple.png';
      dustDescription.innerHTML = 'Very Unhealthy';
    } else if (dust >= 151) {
      statusImage.src = 'static/images/status/icon-red.png';
      dustDescription.innerHTML = 'Unhealthy';
    } else if (dust >= 101) {
      statusImage.src = 'static/images/status/icon-orange.png';
      dustDescription.innerHTML = 'Unhealthy for Sensitive Groups';
    } else if (dust >= 51) {
      statusImage.src = 'static/images/status/icon-yellow.png';
      dustDescription.innerHTML = 'Moderate';
    } else {
      statusImage.src = 'static/images/status/icon-green.png';
      dustDescription.innerHTML = 'Good';
    }
    if (temp >= 40) {
      tempImge.src = 'static/images/status/hot.png'
    }
    else if (temp >= 25) {
      tempImge.src = 'static/images/status/warm.png'
    }
    else {
      tempImge.src = 'static/images/status/cool.png'
    }
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
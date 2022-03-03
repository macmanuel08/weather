const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        const needTowns = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');
        // console.table(needTowns);

        const event = document.querySelector('#events');
 
        needTowns.forEach(town => {

          if (town.name == cityName) {
            for (let i = 0; i < town.events.length; i++) {
              let p = document.createElement('p');

              p.textContent = town.events[i];
              event.appendChild(p);
            }
          }

          
        });
    });
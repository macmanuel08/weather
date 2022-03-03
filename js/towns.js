const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);

        const towns = jsonObject['towns'];

        const needTowns = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');
        //console.table(needTowns);
        
        needTowns.forEach(town => {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = `${town.name}`;
            motto.textContent = `${town.motto}`;
            yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
            currentPopulation.textContent = `Population: ${town.currentPopulation}`;
            rainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

            motto.setAttribute('class', 'motto');

            image.setAttribute('src', `images/${town.photo}`);
            image.setAttribute('alt', `Photo of ${town.name}`);
            image.setAttribute('loading', 'lazy');

            div.appendChild(h2);
            div.appendChild(motto);
            div.appendChild(yearFounded);
            div.appendChild(currentPopulation);
            div.appendChild(rainfall);
            card.appendChild(div);
            card.appendChild(image);

            document.querySelector('.towns-info').appendChild(card); 
        });
    });
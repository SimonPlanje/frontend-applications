# frontend-applications

**functional-programming en frontend data 20/21**  
**Auteur:** _Simon Planje_  
[🔴 live gh-pages](https://simonplanje.github.io/frontend-applications/)

# Concept
![Resultaat foto](public/images/conceptimage.png)  

Met heel Nederland lopen we 441 miljoen wandelingen per jaar. Dit lijkt heel veel maar als we dit per persoon per maand uitrekenen, is dit maar 2 keer per maand per persoon. Door de coronacrisis van dit moment krijgen mensen steeds meer behoefte om tussen het werken door lekker naar buiten te gaan. Er zijn veel mooie wandelingen bereikbaar met de auto. En wandelen is een van de beste manieren om tijdens de lockdown elkaar alsnog te kunnen ontmoeten in de buitenlucht.   

## Onderzoeksvragen

> **Waar in Nederland kan het best worden geparkeerd om direct bij een wandel- of fietsroute uit te komen?**
### Subvragen

- Waar lopen de wandelroutes door Nederland?
- Welke parkeerplaatsen liggen dichtbij wandelroutes?
- Bij welke parkeerplaatsen kunnen er invaliden mee met de wandeling?
- Bij welke parkeerplaatsen kan de elektrische auto worden opgeladen?
- ~~Bij welke parkeerplaatsen moet je betalen tijdens het wandelen?~~
- ~~Bij welke wandelroutes is de lucht het schoonst?~~

## Het concept

Om Nederland een zetje in de goede richting te geven met dit goede gedrag heb ik een interactieve datastory gemaakt aan de hand van de [RDW-data](https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1) en de [route-databank](https://kaarten.routedatabank.nl/index.php?@RaadplegenWandelroutes) data.   
Het is een interactief verhaal waar je als gebruiker doorheen wordt geleid en eindigd bij een visualisatie van alle parkeerplaatsen en wandelroutes door heel Nederland. De gebruiker komt er door de visualisatie achter hoeveel wandelingen er wel niet in Nederland zijn en dat veel van die wandelingen een parkeerplaats in de buurt hebben staan. 

## Features

1. Vergelijk jezelf met "de algemene Nederlander" als het gaat om hoevaak iemand er op uit gaat voor een mooie wandeling.  
De gebruiker kan invullen hoe vaak hij naar buiten gaat om te wandelen, vervolgens wordt dit vergeleken met hoe de gemiddelde Nederlander dat op dit moment doet volgens [deze bron](https://www.wandelnet.nl/kwaliteitsmonitor-wandelen-provincies).
![input gedeelte](public/images/introPart.PNG)

2. Daarna komt de visualisatie in beeld en kan de gebruiker echt zien waar de parkeerplaatsen en wandelroutes door Nederland lopen. Ook kan de gebruiker filteren op of er een invalide plek of een oplaadpaal moet zijn.   
![Kaart gedeelte](public/images/mapplot.PNG)


## Datasets
1. [Route databank](https://kaarten.routedatabank.nl/index.php?@RaadplegenWandelroutes)  
    - Longitude
    - Latitude
    - Afstand - hoelang is de wandeling
    - Plaats - in welke plaats/ gebied ligt de wandeling

2. [RDW-Data](https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1)
    - Longitude
    - Latitude
    - Chargingpoint - Heeft de parkeerplaats een oplaadpunt voor elktrische auto's
    - DisabledAccess - Heeft de parkeerplaats plaatsen voor invaliden

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

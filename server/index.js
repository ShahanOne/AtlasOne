require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const axios = require('axios').default;
const CircularJSON = require('circular-json');

// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', function (_, res) {
//   res.sendFile(
//     path.join(__dirname, './client/build/index.html'),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/api', (req, res) => {
  const hero = [{ haha: 'hoho' }, { hey: 'lmo' }];
  const url = 'https://restcountries.com/v2/all';

  axios
    .get(url)
    .then(function (response) {
      let json = CircularJSON.stringify(response.data);
      res.send(json);
      // handle success
      //   res.json(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

let port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log('Server started on port 3001');
});

// https.get(url , function (response) {

//     response.on("data" , function (data) {

//       const countryData = data.toString();

//       // const simpleCountry = JSON.string(countryData);

//       res.json({"countryArray": countryData });

//     })
//   })

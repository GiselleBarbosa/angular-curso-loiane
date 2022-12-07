const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const multipartyMiddleware = multiparty({ uploadDir: './uploads' });

app.post('/upload', multipartyMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.get('/downloadExcel', (req, res) => {
  res.download('./uploads/report.xlsx');

});

app.get('/downloadPDF', (req, res) => {
  res.download('./uploads/report.pdf');
});


app.use((err, req, res, next) => res.json({
  error: err.message
}));

app.listen(8000, () => {
  console.log('Servidor porta 8000 esta sendo executado');
});
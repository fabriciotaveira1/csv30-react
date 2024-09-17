const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, '../build')));

// Envia o index.html para qualquer outra rota
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

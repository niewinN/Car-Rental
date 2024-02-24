const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint do aktualizacji użytkowników
app.post('/update-users', (req, res) => {
  const usersFilePath = path.join(__dirname, '../src/Assets/Files/users.json'); // dostosuj ścieżkę do twojego pliku JSON
  const users = require(usersFilePath);
  users.push(req.body);
  fs.writeFileSync(usersFilePath, JSON.stringify(users));
  res.send({ success: true });
});

// Uruchamianie serwera
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

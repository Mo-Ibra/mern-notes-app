const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/notes', noteRoutes);

// Sync Database and Start Server
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();
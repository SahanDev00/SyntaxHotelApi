const express = require('express');
const app = express();

const hotelRoutes = require('./routes/hotelRoutes');

app.use(express.json()); // For JSON requests
app.use('/api/hotel', hotelRoutes); // Base route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

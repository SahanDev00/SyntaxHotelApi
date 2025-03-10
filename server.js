const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const hotelRoutes = require('./routes/hotelRoutes');
const customerRoutes = require('./routes/customerRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const staffRoutes = require('./routes/staffRoutes');
const housekeepingRoutes = require('./routes/housekeepingRoutes');
const administrationRoutes = require('./routes/administrationRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const chartsRoutes = require('./routes/chartsRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const notesRoutes = require('./routes/notesRoutes');

app.use(express.json()); // For JSON requests
app.use('/api/hotel', hotelRoutes); // Base route
app.use('/api/customers', customerRoutes); // Base route
app.use('/api/services', servicesRoutes); // Base route
app.use('/api/staff', staffRoutes); // Base route
app.use('/api/housekeeping', housekeepingRoutes); // Base route
app.use('/api/administration', administrationRoutes); // Base route
app.use('/api/booking', bookingRoutes); // Base route
app.use('/api/charts', chartsRoutes); // Base route
app.use('/api/payments', paymentsRoutes); // Base route
app.use('/api/notes', notesRoutes); // Base route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

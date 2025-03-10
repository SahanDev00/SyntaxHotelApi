const paymentsService = require('../services/paymentsService');

const getPayments = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey'],
            PaymentID: req.body.PaymentID || null,
            BookingID: req.body.BookingID || null,
            MinAmount: req.body.MinAmount || null,
            MaxAmount: req.body.MaxAmount || null,
            PaymentMethod: req.body.PaymentMethod || null,
            Status: req.body.Status || null,
            PaymentDate: req.body.PaymentDate || null
        };

        const payments = await paymentsService.getPayments(data);

        if (payments.error) {
            return res.status(500).json({ success: false, message: payments.error });
        }

        res.status(200).json( payments );
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
    }
};

module.exports = { getPayments };
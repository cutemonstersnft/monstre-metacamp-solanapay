import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        shipping_address_collection: {allowed_countries: ['US', 'CA', 'AU', 'AT', 'BS', 'BE', 'BR', 'BN', 'FI', 'FR', 'DE',  'HK', 'HU', 'IS', 'IN', 'ID', 'IE', 'IL', 'IT', 'JP',  'KR', 'KW', 'LU', 'MY', 'MX', 'MC', 'MM', 'NL', 'NZ', 'NO', 'PH', 'QA', 'SA', 'SG', 'ZA', 'ES', 'CH', 'TW', 'TH', 'TR', 'AE', 'GB', 'VN']},
        payment_method_types: ['card'],
        line_items: req?.body?.items ?? [],
        allow_promotion_codes: true,
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

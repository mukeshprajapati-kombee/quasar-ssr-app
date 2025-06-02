// api/ssr.js
import { render } from '../dist/ssr/server/server-entry.js';

module.exports = async (req, res) => {
  // You may need to adapt this to match Quasar's expected API
  const html = await render({
    url: req.url,
    // ...other context as needed
  });
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
};

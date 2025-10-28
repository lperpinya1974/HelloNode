const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

// Servim fitxers estàtics
app.use(express.static('public'));

// Proxy per crides al backend
app.use('/api', createProxyMiddleware({
  target: 'http://backend:5000',
  changeOrigin: true,
  pathRewrite: { '^/api': '/' } // '/api' → '/'
}));

app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend amb proxy actiu a http://0.0.0.0:${port}`);
});

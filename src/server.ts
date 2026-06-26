import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🎮 LoL Champions API rodando na porta ${PORT}`);
  console.log(`👉 http://localhost:${PORT}/health`);
});
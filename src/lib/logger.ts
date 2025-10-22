const logToServer = async (type: string, payload: any) => {
  try {
    await fetch('http://localhost:3000/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, payload }),
    });
  } catch (err) {
    console.error('❌ Gagal kirim log ke server:', err);
  }
};

export default logToServer;

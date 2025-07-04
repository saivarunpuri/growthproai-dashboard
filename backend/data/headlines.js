app.get('/regenerate-headline', (req, res) => {
    const { name, location } = req.query;
    if (!name || !location) {
      return res.status(400).json({ error: 'Missing query params' });
    }
  
    const template = headlines[Math.floor(Math.random() * headlines.length)];
    const headline = template.replace('{name}', name).replace('{location}', location);
  
    res.json({ headline });
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
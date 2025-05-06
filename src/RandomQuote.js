import React, { useEffect, useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://express-random-quotes-api.onrender.com/random-quote');
    const data = await response.json();
    setQuote(data.quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>⚡ Dev Quote</h1>
        <p style={styles.quote}>“{quote}”</p>
        <button style={styles.button} onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

const neonColor = '#000080';  // Navy Blue

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0d0d0d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Orbitron", sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#1a1a1a',
    border: `2px solid ${neonColor}`,
    borderRadius: '16px',
    padding: '40px',
    boxShadow: `0 0 20px ${neonColor}, 0 0 60px ${neonColor}`,
    textAlign: 'center',
    maxWidth: '700px',
    color: neonColor,
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textShadow: `0 0 8px ${neonColor}`,
  },
  quote: {
    fontSize: '1.3rem',
    fontStyle: 'italic',
    marginBottom: '30px',
    textShadow: `0 0 6px ${neonColor}`,
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    color: '#000',
    backgroundColor: neonColor,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}`,
    transition: 'transform 0.2s',
  },
};

export default RandomQuote;

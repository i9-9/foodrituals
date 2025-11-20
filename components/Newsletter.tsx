'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Integración con MailChimp
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form className="validate" onSubmit={handleSubmit}>
      <span className="mc-field-group">
        <label htmlFor="mce-EMAIL"></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="required email"
          id="mce-EMAIL"
          placeholder="Enter your email"
          disabled={status === 'loading'}
        />
      </span>

      <span id="mce-responses" className="clear">
        <div className="response" id="mce-error-response" style={{ display: status === 'error' ? 'block' : 'none' }}>
          Error al suscribirse
        </div>
        <div className="response" id="mce-success-response" style={{ display: status === 'success' ? 'block' : 'none' }}>
          ¡Gracias por suscribirte!
        </div>
      </span>

      <span style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_9336042c2cf52ca313cb8e6ec_efc3179aaf" tabIndex={-1} value="" readOnly />
      </span>

      <span style={{ position: 'flex-inline' }} className="clear">
        <button type="submit" disabled={status === 'loading'} className="button">
          <img
            style={{ paddingBottom: '2px', paddingRight: '4px', fontWeight: 100 }}
            src="/images/arrow-right2.svg"
            alt=""
          />
          {status === 'loading' ? 'ENVIANDO...' : 'SEND'}
        </button>
      </span>
    </form>
  );
}


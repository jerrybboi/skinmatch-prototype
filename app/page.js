'use client';

import { useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);
  return (
    <main>
      <header><strong>Skin<span>Match</span></strong><small>V1 Prototype</small></header>
      <section className="hero">
        <p className="eyebrow">PERSONALIZED SKINCARE</p>
        <h1>Stop copying someone else&apos;s skincare.</h1>
        <p>Understand your skin, then discover skincare products selected for your skin profile and region.</p>
        {!started ? <button onClick={() => setStarted(true)}>Start assessment</button> : (
          <div className="card"><h2>Assessment starts here</h2><p>Next steps will collect your region, guided skin scan and questionnaire answers.</p><button onClick={() => setStarted(false)}>Back</button></div>
        )}
        <small className="note">This prototype provides general skincare guidance, not a medical diagnosis.</small>
      </section>
    </main>
  );
}

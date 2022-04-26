import React from 'react';
import Footer from '../Footer';
import myResume from '../../../src/assets/myResume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={myResume} download="Felix Petzsche Resume" target="_blank">
        Click to download my Resume!</a>
      <ul>
        <li>
          HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          React
        </li>
        <li>
          MySQL
        </li>

      </ul>
      <Footer />
    </div>
  );
}

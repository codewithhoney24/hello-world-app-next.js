// app/component/welcome.tsx
import React from 'react';
import styles from './Welcome.module.css'; // Import the CSS module

function Welcome() {
  return (
    
    <div className={styles.container}> 
      <h1 className={styles.title}>Hello World!</h1>
      <h2 className={styles.subtitle}>Welcome to My Next.js App!</h2> 
    </div>

    
  );
}

export default Welcome;

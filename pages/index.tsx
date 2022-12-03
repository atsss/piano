import Head from 'next/head';
import { useState, useEffect, useRef, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import * as Tone from 'tone';
import styles from '../styles/Home.module.css';

export default function Home() {
  const sampler = useRef<any>(null);
  const [key, setKey] = useState<string>('Press keyboard');

  useEffect(() => {
    sampler.current = new Tone.Sampler({
      urls: {
        A0: 'A0.mp3',
        C1: 'C1.mp3',
        'D#1': 'Ds1.mp3',
        'F#1': 'Fs1.mp3',
        A1: 'A1.mp3',
        C2: 'C2.mp3',
        'D#2': 'Ds2.mp3',
        'F#2': 'Fs2.mp3',
        A2: 'A2.mp3',
        C3: 'C3.mp3',
        'D#3': 'Ds3.mp3',
        'F#3': 'Fs3.mp3',
        A3: 'A3.mp3',
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
        C5: 'C5.mp3',
        'D#5': 'Ds5.mp3',
        'F#5': 'Fs5.mp3',
        A5: 'A5.mp3',
        C6: 'C6.mp3',
        'D#6': 'Ds6.mp3',
        'F#6': 'Fs6.mp3',
        A6: 'A6.mp3',
        C7: 'C7.mp3',
        'D#7': 'Ds7.mp3',
        'F#7': 'Fs7.mp3',
        A7: 'A7.mp3',
        C8: 'C8.mp3',
      },
      release: 1,
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination();
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    setKey(event.key);

    switch (event.key) {
      case 'q':
        sampler.current.triggerAttackRelease(['A0'], 0.5);
        break;
      case 'w':
        sampler.current.triggerAttackRelease(['C1'], 0.5);
        break;
      case 'e':
        sampler.current.triggerAttackRelease(['D#1'], 0.5);
        break;
      case 'r':
        sampler.current.triggerAttackRelease(['F#1'], 0.5);
        break;
      case 't':
        sampler.current.triggerAttackRelease(['D#2'], 0.5);
        break;
      case 'y':
        sampler.current.triggerAttackRelease(['F#2'], 0.5);
        break;
      case 'u':
        sampler.current.triggerAttackRelease(['A2'], 0.5);
        break;
      case 'i':
        sampler.current.triggerAttackRelease(['C3'], 0.5);
        break;
      case 'o':
        sampler.current.triggerAttackRelease(['D#3'], 0.5);
        break;
      case 'p':
        sampler.current.triggerAttackRelease(['F#3'], 0.5);
        break;
      case 'a':
        sampler.current.triggerAttackRelease(['A3'], 0.5);
        break;
      case 's':
        sampler.current.triggerAttackRelease(['C4'], 0.5);
        break;
      case 'd':
        sampler.current.triggerAttackRelease(['D#4'], 0.5);
        break;
      case 'f':
        sampler.current.triggerAttackRelease(['F#4'], 0.5);
        break;
      case 'g':
        sampler.current.triggerAttackRelease(['A4'], 0.5);
        break;
      case 'h':
        sampler.current.triggerAttackRelease(['C5'], 0.5);
        break;
      case 'j':
        sampler.current.triggerAttackRelease(['D#5'], 0.5);
        break;
      case 'k':
        sampler.current.triggerAttackRelease(['F#5'], 0.5);
        break;
      case 'l':
        sampler.current.triggerAttackRelease(['A5'], 0.5);
        break;
      case 'z':
        sampler.current.triggerAttackRelease(['C6'], 0.5);
        break;
      case 'x':
        sampler.current.triggerAttackRelease(['D#6'], 0.5);
        break;
      case 'c':
        sampler.current.triggerAttackRelease(['F#6'], 0.5);
        break;
      case 'v':
        sampler.current.triggerAttackRelease(['A6'], 0.5);
        break;
      case 'b':
        sampler.current.triggerAttackRelease(['C7'], 0.5);
        break;
      case 'n':
        sampler.current.triggerAttackRelease(['D#7'], 0.5);
        break;
      case 'm':
        sampler.current.triggerAttackRelease(['F#7'], 0.5);
        break;
      case ',':
        sampler.current.triggerAttackRelease(['A7'], 0.5);
        break;
      case '.':
        sampler.current.triggerAttackRelease(['C8'], 0.5);
        break;
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Piano by Ats</title>
        <meta name="description" content="Piano created by Ats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} tabIndex={0} onKeyDown={handleKeyDown}>
        <h1 className={styles.title}>Piano by Ats</h1>
        <p className={styles.description}>{key}</p>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import styles from "./styles.module.css";

const ActiveAges = () => {

  const [currentAge, setCurrentAge] = useState(null);
  const [notActiveAge, setNotActiveAge] = useState(null);
  const [finalAge, setFinalAge] = useState(null);
  const [error,setError] = useState(null);
  const [results, setResults] = useState([]);

  const onResultClick = () => {
    if(!currentAge || !finalAge || !notActiveAge) {
      return setError('Заполните все поля!')
    }
    if(+finalAge < +currentAge) {
      return setError('Ваш текущий возраст меньше финального')
    }
    const x = Array.from(Array(+finalAge),(item,index) => {

      if(index <= +currentAge) {
        return { color: 'orange' }
      }

      if(index > +notActiveAge && index > +currentAge ) {
        return { color: 'red' }
      }

      return { color: 'white' }

    })
    setError(null)
    setResults(x)
  }

  return (
    <div className={styles.activeAges}>
      <div className="wrapper">
        <h2>Расчитайте оставшиеся количество активных лет вашей жизни</h2>
        <div className={styles.activeAgesInner}>

          <div className={styles.activeAgesRow}>
            <label htmlFor="currentAge" className={styles.activeAgesLabel} >
              * Ведите ваш возраст:
            </label>
            <input onChange={(event) => setCurrentAge(event.target.value)} id="currentAge" type="number" className={styles.activeAgesInput} />
          </div>

          <div className={styles.activeAgesRow}>
            <label htmlFor="currentAge" className={styles.activeAgesLabel}>
              * Ведите возраст который вы считаете уже не активный ( например 50 лет ):
            </label>
            <input min={1} onChange={(event) => setNotActiveAge(event.target.value)} id="currentAge" className={styles.activeAgesInput} type="number" />
          </div>

          <div className={styles.activeAgesRow}>
            <label htmlFor="currentAge" className={styles.activeAgesLabel}>
              * Ведите возраст до которого вы хотели бы дожить:
            </label>
            <input onChange={(event) => setFinalAge(event.target.value)} id="currentAge" className={styles.activeAgesInput} type="number" />
          </div>

          <button onClick={() => onResultClick()} className={styles.activeAgesButton}>Расчитать</button>

        </div>

        {error && <p className={styles.activeAgesError}>{error}</p>}

        {results.length > 0 && (
          <>
            <h3 style={{marginBottom: '15px'}}>Результат:</h3>
            <ul className={styles.activeAgesList}>
              {
                results.map((item,index) => <li style={{backgroundColor: item.color}} key={index} className={`${styles.activeAgesItem}`}></li>)
              }
            </ul>
            <h4>Обозначения: </h4>
            <div className={styles.activeAgesBox}>
              <div className={styles.activeAgesDescription}>
                <span style={{backgroundColor: 'orange'}} />
                - Количество лет которое вы уже прожили
              </div >
              <div className={styles.activeAgesDescription}>
                <span style={{backgroundColor: 'white'}} />
                - Оставшийся активный период жизни человека, за которое можно что-то изменить
              </div>
              <div className={styles.activeAgesDescription}>
                <span style={{backgroundColor: 'red'}} />
                - Не активний период жизни
              </div>
            </div>
          </>
        )}



      </div>
    </div>
  );
};

export default ActiveAges;
import styles  from './DoubleStatComponent.module.css'

function DoubleStatComponent({ header, subHeader, secondaryHeader, secondarySubHeader }) {
    return (
        <div className={styles.statsContainer}>
            <h1 className={styles.statsHeader}>{header}</h1>
            <h2 className={styles.statsSubHeader}>{subHeader}</h2>
            <h1 className={styles.statsHeader}>{secondaryHeader}</h1>
            <p className={styles.statsSecondarySubHeader}>{secondarySubHeader}</p>
        </div>
    );
  }
  
export default DoubleStatComponent;
  
import styles  from './SingleStatComponent.module.css'

function SingleStatComponent({ header, subHeader, secondaryText }) {
    return (
        <div className={styles.statsContainer}>
            <h1 className={styles.statsHeader}>{header}</h1>
            <h2 className={styles.statsSubHeader}>{subHeader}</h2>
            <p className={styles.statsCaption}>{secondaryText}</p>
        </div>
    );
  }
  
export default SingleStatComponent;
  
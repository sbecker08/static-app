import styles  from './RegionalWidget.module.css'

function RegionalWidget() {
    return (
        <div className={styles.regionalWidgetContainer}>            
            <div className={styles.regionalWidgetInnerContainer}>
                <div className={styles.linkContainerContainer}>
                    <span>Pacific Northwest: </span>
                    <ul>
                        <li><a href="#">Our Impact</a></li>
                        <li><a href="#">Current Listings</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">News & Events</a></li>
                    </ul>
                    <button>Connect With An Advisor</button>
                </div>
            </div>
        </div>
    );
  }
  
export default RegionalWidget;
  
import styles  from './UserCardQuote.module.css'
import Image from 'next/image';

function UserCardQuote() {
    return (
        <div className={styles.userCard}>            
            <Image src='/AdamChristofferson.jpg' width={120} height={120} className={styles.headshot} alt='Adam Christofferson Photo' />
            <div className={styles.userInfoContainer}>
                <h1 className={styles.name}>Adam Christofferson</h1>
                <p className={styles.title}>Senior Vice Prsident / Division Manager, Pacific Northwest Division</p>
                <p className={styles.email}><a href="#">Email Adam Christofferson</a></p>
            </div>
        </div>
    );
  }
  
export default UserCardQuote;
  
import styles  from './UserCardQuote.module.css'
import Image from 'next/image';

function UserCardQuote() {
    return (
        <div className={styles.userCard}>            
            <Image src='https://www.marcusmillichap.com/-/media/Images/MM/MM%20Leadership/Thumbnails/a-christofferson-small%20jpg.jpg?h=120&w=120&rev=bcd5f6bc93ab4521a528dfecdaa2b028&hash=5A58114C4E84376E7523BC8F77537CF4' width={120} height={120} className={styles.headshot} alt='Adam Christofferson Photo' />
            <div className={styles.userInfoContainer}>
                <h1 className={styles.name}>Adam Christofferson</h1>
                <p className={styles.title}>Senior Vice Prsident / Division Manager, Pacific Northwest Division</p>
                <p className={styles.email}><a href="#">Email Adam Christofferson</a></p>
            </div>
        </div>
    );
  }
  
export default UserCardQuote;
  
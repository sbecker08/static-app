import styles  from './CallToActionCard.module.css'
import ButtonSemiTransparent from '../../Buttons/ButtonSemiTransparent/ButtonSemiTransparent';

function CallToActionCard({ backgroundUrl, text, buttonText, link }) {

    const bgStyle = {
        backgroundImage: 'url(' + backgroundUrl + ')'
    }

    return (
        <div className={styles.ctaCard}>                  
            <div className={styles.ctaCardBg} style={bgStyle}> 
            
            </div>
            <div className={styles.innerBox}>
                <div className="my-auto flex items-center flex-col">
                    <h2 className={styles.innerText}>
                        {text}
                    </h2>
                    <ButtonSemiTransparent link={link} text={buttonText} ></ButtonSemiTransparent>
                </div>
            </div>
        </div>
    );
  }
  
export default CallToActionCard;

/*

background-image:url('https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-to-sell-background%20jpg.jpg?rev=2c79b6b10f5a4c1aa066f964bcddce43&hash=D3810DD78DDECDE410A4245C97500529');
background-image:url('https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-to-buy-background%20jpg.jpg?rev=53455200e755459f8f04afabd424d40b&hash=D98617E8FAEBE80474BA13FEE5CD5293');
background-image:url('https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-for-debt-financing-background%20jpg.jpg?rev=cbb86ce786eb48679729b04ad9b1b7da&hash=49750DCF7C29C474EC7244405C03AD09');

*/
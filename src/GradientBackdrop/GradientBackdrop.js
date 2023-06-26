import styles  from './GradientBackdrop.module.css'

function GradientBackdrop({ children, backgrounGradientStyle, backgroundImage }) {
    /*
            <div className={styles.vimeoOuterWrapper}>
                <div className={styles.vimeoInnerWrapper}>
                <iframe className={styles.vimeoVideo} id="vim-cf15651f-5ddb-4465-9cc3-50565fa3b299" data-video-id="427061317" class="embed-responsive-item" type="text/html" title="Vimeo Video" src="//player.vimeo.com/video/427061317?badge=0&amp;background=1" data-ready="true"></iframe>
                </div>
            </div>
    */

    const bgImageStyle = backgroundImage ?{
        backgroundImage: `url(${backgroundImage.src})`
    } : {}

    const bgGradientSpan = backgrounGradientStyle ? 
        <span style={{background: backgrounGradientStyle}} className={styles.bgGradient}></span> :
        <></>

    return (
        <div style={bgImageStyle} className={styles.widgetBackdrop}>            
            {bgGradientSpan}
            <div className="z-10">
                { children }
            </div>
        </div>
    );
  }
  
export default GradientBackdrop;
  
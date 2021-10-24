import Paper from '@mui/material/Paper';
import styles from './Definitions.module.css'

const Definitions = ({ word, meanings, category }) => {

  const heading = "Start by typing a word into Search!";

  return (
    <div className={styles.meanings}>
      {/* audio---------------------------- */}
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}
      {word === "" ? (
        <div className={styles.subTitle}>{heading}</div>
      ) : (
meanings.map((mean) => mean.meanings.map((item) => ( 
          item.definitions.map((def, index) => (
            <Paper elevation={3} className={styles.singleMean} key={index}>
              <div className={styles.definition}>{def.definition}</div>
              <div className={styles.break}></div>
              {def.example && (
                <div className={styles.example}>
                  Example: 
                  <div>{ '"'+ def.example + '"' }</div>
                </div>
              )}
              {def.synonyms && (
                <div 
                  className={`${styles.example} ${styles.synonym}`}
                >
                  Synonyms: 
                  <div>{def.synonyms.map((s) => ` ${s}, `)}</div>
                </div>
              )}
            </Paper>
          ))
        )))
      )}
    </div>
  )
}

export default Definitions

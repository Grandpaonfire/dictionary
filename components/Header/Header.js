import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import categories from '../../data/categoryData'
import styles from './Header.module.css';

const Header = ({ title, word, setWord, category, setCategory }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{word ? word :  title}</div>
      <div className={styles.inputs}>
        <TextField 
          className={styles.search}
          label="Search for a word" 
          variant="standard"
          value={word}
          onChange={(e) => setWord(e.target.value)} 
        />
        <FormControl className={styles.select}>
        <InputLabel id="lang-select">Language</InputLabel>
        <Select
          labelId="lang-select"
          id="lang-select"
          value={category}
          label="Language"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
  )
}

export default Header

import PropTypes from 'prop-types';
import {useState} from "react";
import css from 'components/Searchbar/Searchbar.module.css'

const Searchbar = ({handleFormSubmit}) => {
  const [search, setSearch]= useState('')

  const handleChange = ev => {
    setSearch(ev.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if(search.trim()===''){
        return alert('An empty line')
    }
  
    handleFormSubmit(search)
    setSearch('')
  }

    return ( 
    <header className={css.Searchbar}>
    <form onSubmit={handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      // autoСomplete="off"
      // autoFocus
      placeholder="Search images and photos"
      value={search}
      onChange={handleChange}
    />
  </form>
</header>
    )
  
}

Searchbar.propTypes={
  search:PropTypes.string,
}

export default Searchbar;
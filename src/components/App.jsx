import PropTypes from 'prop-types';
import {useState, useEffect} from "react";
import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
import Loader from './Loader/loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';


 const App =()=>{
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')
  const [total,setTotal] = useState(null)
  const [queryPage, setQueryPage] = useState(1)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({showModal:false, largeImageURL:''})

  let loadMore=false;

  useEffect(()=>{
    if(!search) return
      setLoading(true)

      APIfetch( search, queryPage).then(({hits, totalHits}) => { 

      return (
        setImages(prev=>[...prev, ...hits]),
        setTotal(totalHits)
      )
      })
      .catch(error=>setError(error))
      .finally(()=>setLoading(false))
  },[search, queryPage])

  const onLoadMore=()=>{   
    setQueryPage(prev=>prev + 1)
  }

  const handleFormSubmit = (search) => {
    setSearch(search);
    setImages([]);
    setQueryPage(1);
  }

  const clickImages=(largeImageURL)=>{
    setModal({largeImageURL, showModal:true})
  }

  const closeModal=()=>{
    setModal({largeImageURL:'', showModal:false})
  }

    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr',
        gridGap: 16, paddingBottom: 24}}
      > 
      {modal.showModal && (<Modal 
      closeModal={closeModal} 
      largeImageURL={modal.largeImageURL} />)}
        
        <Searchbar handleFormSubmit={handleFormSubmit}/>     
        {error && <h1>{error.message}</h1>}
        {loading && <Loader/>}

        { images.length>0 && !loading && ( <ImageGallery 
        images={images}   
        clickImages={clickImages}
        loadMore={loadMore}
        /> )} 

          {(images.length < total)?( <Button onLoadMoreClick={onLoadMore}/>)
          :(loadMore=false)}
        
      </div>
    )
  
}


App.propTypes={
  images:PropTypes.array,
  search:PropTypes.string,
  queryPage:PropTypes.number,
  lordMore:PropTypes.bool,
  error:PropTypes.bool,
  loading:PropTypes.bool,
  modal:PropTypes.shape({
    showModal:PropTypes.bool,
    largeImageURL:PropTypes.string,
  })
}
export default App;

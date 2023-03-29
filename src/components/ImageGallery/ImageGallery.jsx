import PropTypes from 'prop-types';

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from 'components/ImageGallery/ImageGallery.module.css'

export default function ImageGallery ({ images, clickImages }) {
        
        return (
            <>
            <ul className={css.ImageGallery}>

              {images.map(({id, webformatURL, largeImageURL}) => {
      
              return  <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                clickImages={clickImages}
                />
                
              })}
            </ul> 
            
        </>
        )
}

ImageGallery.propTypes= {
  loading:PropTypes.bool,
  images:PropTypes.array,
  clickImages:PropTypes.func,
  loadMore:PropTypes.bool,
  onLoadMoreClick:PropTypes.func,
}
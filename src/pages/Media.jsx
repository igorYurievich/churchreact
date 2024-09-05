import React, { useEffect, useState } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../firebase';
import LazyLoad from 'react-lazyload'; // Импортируем LazyLoad
import PhotoModal from './photomodal';
import './gallery.css';

const Media = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const galleryRef = ref(storage, 'gallery_unsorted');
      try {
        const result = await listAll(galleryRef);
        const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(urlPromises);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="corpo">
      <div className="container">
        <h1 id="titull" className="container pt-4 text-center">Фотографии</h1>
        <p className="container py-4" style={{ textAlign: 'justify' }} id="intro">
          Приветствуем вас на нашей странице с фотографиями! Здесь вы найдете яркие моменты с наших богослужений, встреч и других мероприятий.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              onClick={() => openModal(index)}
            >
              <div className="square">
                <LazyLoad height={200} offset={100}>
                  <img src={url} alt={`Gallery item ${index + 1}`} className="img-fluid img-cropped" />
                </LazyLoad>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PhotoModal
        isOpen={modalOpen}
        currentIndex={currentImageIndex}
        images={imageUrls}
        onClose={closeModal}
      />
    </div>
  );
};

export { Media };

import React, { useEffect, useState, useCallback } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../firebase';
import LazyLoad from 'react-lazyload';
import PhotoModal from './PhotoModal';
import './gallery.css';

const Media = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchImages = useCallback(async () => {
    const galleryRef = ref(storage, 'gallery_webp');
    try {
      const result = await listAll(galleryRef);
      const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="corpo">
      <h1 id="titull" className="container py-4 text-center">Видео</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-2">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7p7PSTqobiQ?si=8ucnmj0OyrC7SeSG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 py-2">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/giOXGaxqCqo?si=pA0ZUwtHl2zeNK52"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <h1 id="titull" className="container py-4 text-center">Фотографии</h1>
      <div className="container">
        <div className="row">
          {imageUrls.map((url, index) => (
            <div key={index} className="col-md-4 mb-4" onClick={() => openModal(index)}>
              <div className="square">
                <LazyLoad height={200} offset={350}>
                  <img src={url} alt={`Gallery item ${index + 1}`} className="img-fluid img-cropped" />
                </LazyLoad>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PhotoModal isOpen={modalOpen} currentIndex={currentImageIndex} images={imageUrls} onClose={closeModal} />
    </div>
  );
};

export { Media };

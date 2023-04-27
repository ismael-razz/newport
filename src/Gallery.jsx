import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';


const images = [
  { id: 1, src: 'path/to/image1.jpg', title: 'Image 1' },
  { id: 2, src: 'path/to/image2.jpg', title: 'Image 2' },
  { id: 3, src: 'path/to/image3.jpg', title: 'Image 3' },
  { id: 4, src: 'path/to/image4.jpg', title: 'Image 4' },
  { id: 5, src: 'path/to/image5.jpg', title: 'Image 5' },
  { id: 6, src: 'path/to/image6.jpg', title: 'Image 6' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Html center>
          {selectedImage && (
            <div className="gallery-overlay" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="gallery-title">{selectedImage.title}</div>
            </div>
          )}
        </Html>
      </Canvas>

      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .gallery-item {
          cursor: pointer;
          flex: 0 0 calc(33.33% - 10px);
          margin-bottom: 20px;
        }

        .gallery-item img {
          width: 100%;
          height: auto;
        }

        .gallery-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
        }

        .gallery-overlay img {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .gallery-title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Gallery;

import React from 'react';
import './Project.css';
import Cards from './Cards';
import Modal from 'react-modal';
import image3 from './s3.png';
import image4 from './s4.png';


export const Project = () => {
  let value = [
    {
      title: 'TRIP WEBSITE',
      img: image3,
      githubUrl: 'https://bhavyavk20.github.io/travel/',
    },
    {
      title: 'MOVIES',
      img: image4,
      githubUrl: 'https://movies-moudr93d9-bhavya-v-ks-projects.vercel.app',
    },
  ];

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: '',
    img: '',
    githubUrl: '',
  });

  const openModal = (title, img, videoUrl, githubUrl) => {
    setModalContent({ title, img, videoUrl, githubUrl });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="name">Project</h1>
      </div>
      <div className="container">
        <div className="project">
          {value.map((li) => (
            <Cards
              title={li.title}
              img={li.img}
              onClick={() => openModal(li.title, li.img, li.videoUrl, li.githubUrl)}
            />
          ))}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Project Modal">
          {modalContent.videoUrl ? (
            <div className="iframe-container">
              <iframe
                title={modalContent.title}
                src={modalContent.videoUrl}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ) : (
            <a href={modalContent.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={modalContent.img} alt="project" />
            </a>
          )}
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </>
  );
};

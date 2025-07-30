import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  const projects = [
    {
      title: 'ARCHITECT CABINET',
      description: "Page d'un cabinet d'architecture.",
      imageUrl: 'img/website1.png',
      link: '#'
    },
    {
      title: 'HOMEDESIGN SHOP',
      description: 'boutique homedesign',
      imageUrl: 'img/website2.png',
      link: '#'
    },
    {
      title: 'COOKING HOMEDESIGN',
      description: 'boutique #cookinghomedesign',
      imageUrl: 'img/website3.png',
      link: '#'
    },
    {
      title: 'Project 4',
      description: 'A short description of project 4.',
      imageUrl: '/img/website1.png',
      link: '#'
    }, 
    {
      title : 'Project 5',
      description : 'A short description of project 5.',
      imageUrl : 'img/website2.png',
      link : '#'
    },
    {
      title : 'Project 6',
      description : 'A short description of project 6.',
      imageUrl : 'img/website3.png',
      link : '#'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="App vh-100 d-flex flex-column">
      <header className="text-white text-center py-3">
        <h1 className="display-4">@ybdn _ portfolio</h1>
      </header>
      <main className="container-fluid flex-grow-1 d-flex align-items-center">
        <div className="w-100">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div className="px-3" key={index}>
                <div className="card bg-dark text-white project-card">
                  <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-outline-light">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default App;

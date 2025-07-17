import '../assets/TestimonialsSection.css';

import svgclientImage1 from'../assets/svg/svgclientImage1.svg';
import svgclientImage2 from'../assets/svg/svgclientImage2.svg';
import svgclientImage3 from'../assets/svg/svgclientImage3.svg';


function TestimonialsSection() {

  // Array des témoignages pour faciliter le mapping
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      image: svgclientImage1,
      rating: 5, // Nombre d'étoiles
      theme: 'light' // Pour le fond blanc/clair
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      image: svgclientImage2,
      rating: 5,
      theme: 'dark' // Pour le fond vert
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      image: svgclientImage3,
      rating: 5,
      theme: 'light' // Pour le fond blanc/clair
    },
    // Ajoutez plus de témoignages ici si nécessaire
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className="star"
          style={{ color: i < rating ? 'gold' : '#ccc' }} // Or en fonction du rating, gris sinon
        >
          &#9733; {/* Unicode pour une étoile pleine */}
        </span>
      );
    }
    return <div className="rating">{stars}</div>;
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>Découvrez l'avis de nos clients</h2>
        <div className="underline"></div>
      </div>

      <div className="testimonials-carousel-container">
        <button className="carousel-arrow left-arrow">&#8249;</button> {/* Flèche gauche Unicode */}
        
        <div className="testimonials-wrapper">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={`testimonial-card ${testimonial.theme}`}>
              <div className="quote-icon">❝</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="separator"></div>
              <div className="client-info">
                
                <div className="client-details">
                  <span className="client-name">{testimonial.name}</span>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right-arrow">&#8250;</button> {/* Flèche droite Unicode */}
      </div>
    </section>
  );
    }

export default TestimonialsSection;
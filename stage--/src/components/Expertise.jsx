import '../assets/Expertise.css';

import svgxpertisesImage from'../assets/svg/svgxpertisesImage.svg';

function Expertise() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Vos besoins, Nos solutions</h1>
      </header>
      <main className="main-content">
        <h2 className="section-title">NOTRE EXPERTISE</h2>

        <div className="expertise-grid">
          {/* Bloc 1: Gestion des investissements */}
          <div className="expertise-card card-01">
            <span className="card-number">01</span>
            <h3>Gestion des investissements</h3>
            <p>
              Exploitez la puissance du soleil et adoptez une énergie propre et renouvelable
              grâce à nos solutions solaires.
            </p>
          </div>

          {/* Bloc image centrale */}
          <div className="expertise-image-container">
           <img src={svgxpertisesImage} alt="Notre Expertise" />
          </div>

          {/* Bloc 2: Optimisation fiscale */}
          <div className="expertise-card card-02">
            <span className="card-number">02</span>
            <h3>Optimisation fiscale</h3>
            <p>
              Nous sommes fiers d'obtenir d'excellentes offres et promotions pour nos
              clients.
            </p>
          </div>

          {/* Bloc 3: Gestion de patrimoine */}
          <div className="expertise-card card-03">
            <span className="card-number">03</span>
            <h3>Gestion de patrimoine</h3>
            <p>
              Restez connecté avec des services de câble de haute qualité qui offrent
              un internet fiable et rapide, et la télévision.
            </p>
          </div>

          {/* Bloc 4: Planification financière */}
          <div className="expertise-card card-04">
            <span className="card-number">04</span>
            <h3>Planification financière</h3>
            <p>
              Nous comprenons que naviguer dans le paysage du solaire et du câble
              peut être accablant.
            </p>
          </div>

          {/* Bloc 5: Consultation et accompagnement */}
          <div className="expertise-card card-05">
            <span className="card-number">05</span>
            <h3>Consultation et accompagnement</h3>
            <p>
              Nous comprenons que naviguer dans le paysage du solaire et du câble
              peut être accablant.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Expertise;
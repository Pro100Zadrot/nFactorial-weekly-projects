import React, { useEffect } from 'react';
import './Home.css';
import pic1 from '../pics/pic1.jpg';

function Home() {
  useEffect(() => {
    const aboutSection = document.querySelector('.about-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('show');
        }
      });
    });

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div data-scroll-container>
      <div className="MC" data-scroll-section>
        <h2>Hello, My name is Kassymkhan and this is my portfolio website!</h2>
        <p> My first time working on portfolio website.</p>
        <button>My CV</button>
      </div>
      <div className="about-experience-container" id="about" data-scroll-section>
        <div className="about-section">
          <h2>About me</h2>
          <p>
            Hello! I am aspiring frontend programmer, which wishes to became proficient enough to make good
            sites! Without procrastinating and any laziness! Yep yep. After getting enough experience, I will
            be able to make magnificent websites with great design and minimum bugs. Pretty average words, you
            might say. Well... Yeah, I am your average guy who recently started to learn CSS, JS, and HTML in
            order to do that. What good and bad points do I have?
          </p>
          <ul>
            <li>I procrastinate a lot</li>
            <li>I have super concentration!</li>
            <li>I have interest in programming and develop my skills</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={pic1} alt="Profile" />
        </div>
      </div>
      <div className="contacts-section" id="contacts" data-scroll-section>
        <h2>Hello hello!</h2>
        <p>I'm begginer at programming, here you can contact me!.</p>
        <button>Get contact</button>
      </div>
      <footer className="footer" data-scroll-section>
        <p>Made with ❤ at nFactorial in 2022.</p>
        <p>Credits: photos from Unsplash.com, icons from Icons8.</p>
        <p>© 2024 Kassymkhan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

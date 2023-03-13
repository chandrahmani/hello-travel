import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="about-wrapper"> </div>
      <h1>About Us</h1>
      <div className="about-section">
        <div className="about-container">
          Fusce venenatis ex quis massa convallis hendrerit nec eu diam. Proin dapibus rhoncus arcu
          eget tristique. Pellentesque pretium justo vitae pellentesque tempus. Suspendisse auctor
          ex id tristique pharetra. Nulla quis metus eget leo placerat tincidunt non id arcu.
          Pellentesque sodales elit pharetra justo tincidunt, sed bibendum nunc tempor. Duis sed
          pulvinar sapien, ut fringilla leo. Morbi interdum enim ac tincidunt imperdiet.
        </div>

        <div className="about-container-tow">
          Ut eget laoreet libero. Curabitur ullamcorper sit amet purus hendrerit vestibulum.
          Maecenas quis tellus eget sem accumsan maximus non ut urna. Quisque volutpat mauris id
          odio malesuada, eleifend auctor lectus pellentesque. Quisque eget ex semper, dignissim
          ligula eu, malesuada neque. Mauris mattis odio id rhoncus pharetra. Duis iaculis libero eu
          sapien pharetra tristique. Quisque eu nunc ac massa sagittis dignissim. Donec in quam
          porttitor, imperdiet libero in, pharetra justo. Nunc id gravida metus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada
        </div>

        <div className="about-container-tow">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuu8gb_AfgX6hPpoTYTRUnX7alNrXKAUbnug&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default About;

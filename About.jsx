import React from 'react';

function About() {
  return (
    <div className=' bg-gradient-to-r from-green-200 to-lime-200'>
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-center text-green-900 mt-10">
          About SketchFlow
        </h1>
        <p className="text-2xl text-center mt-6">
          SketchFlow is dedicated to providing high-quality sketches within an hour. Our team of skilled artists works diligently to capture your ideas and bring them to life with precision and creativity.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center space-x-6">
          <img
            className="w-80 h-80 rounded-lg shadow-md"
            src="https://images.pexels.com/photos/26796663/pexels-photo-26796663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Artistic Sketch"
          />
          <img
            className="w-80 h-80 rounded-lg shadow-md"
            src="https://i.pinimg.com/originals/8b/51/bf/8b51bf24a10926307172a52613703a4e.png"
            alt="Creative Artwork"
          />
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-4xl font-semibold text-green-800">Our Mission</h2>
          <p className="text-xl mt-4">
            To revolutionize the world of art by delivering rapid, high-quality sketches to clients worldwide, ensuring satisfaction and fostering a love for art.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

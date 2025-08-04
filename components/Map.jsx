import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8587319095013!2d-117.05996272282084!3d32.769482784368535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9569297d9bd0d%3A0xe52c99d600e714e3!2s6560%20Montezuma%20Rd%2C%20San%20Diego%2C%20CA%2092115!5e0!3m2!1sen!2sus!4v1754186861667!5m2!1sen!2sus"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;

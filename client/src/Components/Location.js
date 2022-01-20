import React from "react";

const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7296.481808999906!2d90.40595773109219!3d23.881074747181465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1642387925341!5m2!1sen!2sbd"
        width="100%"
        height="380"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        title="location"
      ></iframe>
    </div>
  );
};

export default Location;

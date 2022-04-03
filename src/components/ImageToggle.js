import React, { useEffect, useRef, useState } from "react";

const ImageToggle = ({ primery, secondery }) => {
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView);
    setIsLoading(false);

    return (
      () => {
        window.removeEventListener("scroll", scrollHandler);
      },
      [isLoading]
    );
  });

  const isInView = () => {
    if (imageRef.current) {
      const imageLocation = imageRef.current.getBoundingClientRect();
      // console.log(imageRef.current.getBindingClientRect());
      return (
        imageLocation.top >= 0 && imageLocation.bottom <= window.innerHeight
      );
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <div>
      <img src={inView ? primery : secondery} alt="image" ref={imageRef} />
    </div>
  );
};

export default ImageToggle;

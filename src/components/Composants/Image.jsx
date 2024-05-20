import { useEffect, useState } from "react";

function Image({ src_image ,class_name}) {
  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };

  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      // iterate over each entry
      entries.forEach((entry) => {
        // process just the images that are intersecting.
        // isIntersecting is a property exposed by the interface
        if (entry.isIntersecting) {
          // custom function that copies the path to the img
          // from data-src to src
          loadImages(entry.target);
          // the image is now in place, stop watching
          self.unobserve(entry.target);
          setIsLoaded(true);
        }
      });
    }, config);

    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);
  useEffect(()=>{
    src_image
  },[src_image])

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };
  return (
    <>
      <img
        src={""}
        alt=""
        data-src={src_image}
        className={loaded ? `loaded ${class_name}` : `loading ${class_name} `}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
}
export default Image;

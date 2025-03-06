import { RiAccountCircleFill } from "react-icons/ri";

export default function About() {
  return (
    <div className="mt-3 mx-3">
      <h1>About Me</h1>
      <div>
      <RiAccountCircleFill className="fs-1" />
      </div>
      <p className="w-75">
        I am an aspiring Junior Full-Stack Developer. 
        I received my Bachelors of Science in Physiology and 
        Developmental Biology from Brigham Young university. 
        After graduating, I found my interest in software development and have 
        worked in obtaining a certificate from the University of Utah. I love developing 
        apps and software. In my free time, I enjoy outdoor activities such as running
        and camping. However, most of all I love spending time with my family.
      </p>
    </div>
  );
}

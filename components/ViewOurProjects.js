import Image from "next/image";
import React from "react";



const ViewOurProjects = () => {
  return (
    <div className="view__our__projects">
      <div className="projects__header">
        <h1>View our Projects</h1>
        <hr className="projects_hr"/>
      </div>
      <div className="projects">
        <div className="project">
          <div className="image">
            <Image
              className="img"
              src="/img/projectsImage.jpg"
              alt="Laundry with beatifull Vinyl Floor"
              width={1000}
              height={700}
              quality={100}
            />
          </div>
          <div className="project__info">
          <h1>Modern Home Transformation</h1>
            <p>
              This complete home renovation showcases our budget-first approach to interior design.
              We supplied premium floor and wall tiles while giving the client full control over material 
              selection and financial decisions. With transparent real-time expense tracking and direct
              vendor payments, this project delivered exceptional value without compromising on quality.
            </p>
            <div className="project__buttons">
              {/* <a href='#' className='blue__link'>
								Case Study
							</a> */}
              <a href="/gallery" className="red__button">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <Image
              className="img"
              src="/img/projectsImage2.jpg"
              alt="Livingroom with beatifull Vinyl Floor"
              width={800}
              height={700}
              quality={100}
            />
          </div>
          <div className="project__info">
          <h1>Luxury Residence Interior</h1>
            <p>
              This residential project showcases our transparent, client-first approach to interior design. 
              Working as consultants rather than contractors, we collaborated closely with the homeowner, 
              putting them in control both creatively and financially. The result is a personalized space 
              that perfectly reflects the client's vision and lifestyle.
            </p>
            <div className="project__buttons">
              {/* <a href='#' className='blue__link'>
								Case Study
							</a> */}
              <a href="/gallery" className="red__button">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOurProjects;

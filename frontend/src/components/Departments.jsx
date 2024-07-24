import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "https://hartfordhealthcaremedicalgroup.org/image%20library/454d1e19-686c-40bf-b978-1a0502016bc9/unassigned/hhcmg-pediatric-care-banner.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "https://suryahospitals.com/speciality/6565e06f07d93Pediatric-Orthopedics.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "https://www.dashospital.com/myimages/services/cardiology-1.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_Mvofop59vZ2ngOwf3QN4hm8EfsdjaNOQd2YqqTv8G7PfgSkL43YXq96_6DE331WLp0&usqp=CAU",
    },
    {
      name: "Oncology",
      imageUrl: "https://www.psghospitals.com/wp-content/uploads/2022/08/oncology-banner.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvE7hKVLHJ0RStkLK0zNqXmlAIMLM533Xl4JSZzRjPuZuDfN7ScHwTaJ-s8g97bUMSE8&usqp=CAU",
    },
    {
      name: "Physical Therapy",
      imageUrl: "https://images.ctfassets.net/yixw23k2v6vo/ppm_patient_article_fid12595_asset/32532463f6928f9d6a20505035c80caa/iStock-1147930007.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "https://www.shutterstock.com/image-photo/young-woman-cosmetologist-dermatologist-directing-260nw-1864119439.jpg",
    },
    {
      name: "ENT",
      imageUrl: "https://zoiclinics.com/img/ENT-intro-icon.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
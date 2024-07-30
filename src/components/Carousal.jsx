import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="container-fluid">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white "
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100 objectFit-cover"
              style={{ filter: "brightness(50%)" ,objectFit: "cover" }}
              width="100%"
              
              alt="..."
            />
          </div>
          <div
            className="carousel-item active"
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              filter: "brightness(50%)",
            }}
          >
            <video
              style={{
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              autoPlay
              loop
              muted
            >
              <source
                src="https://videos.pexels.com/video-files/3195650/3195650-sd_640_360_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="carousel-item active"
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              filter: "brightness(50%)",
            }}
          >
            <video
              style={{
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              autoPlay
              loop
              muted
            >
              <source src="https://videos.pexels.com/video-files/2620043/2620043-sd_640_360_25fps.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" ,objectFit: "cover"}}
              width="100%"
              
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              style={{ filter: "brightness(40%)",objectFit: "cover"}}
              width="100%"
              
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

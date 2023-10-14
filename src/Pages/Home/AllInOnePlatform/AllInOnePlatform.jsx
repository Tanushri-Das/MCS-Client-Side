import React from "react";
import search from "../../../assets/icon-park-twotone_search.png";
import connect from "../../../assets/icon-park-twotone_enquire.png";
import research from "../../../assets/icon-park-twotone_table-report.png";
import hat from "../../../assets/icon-park-twotone_degree-hat.png";
import teacher from "../../../assets/Teacher.png";
import student from "../../../assets/Student.svg";
import "./AllInOnePlatform.css";

const AllInOnePlatform = () => {
  return (
    <div className="px-4 xl:px-32 mt-[132px] lg:flex justify-center mb-[135px] w-100">
      <div className="w-full lg:w-[55%]">
        <p className="banner-text 2xl:whitespace-nowrap mb-4">
          <span className="partners">All-in-One</span> platform
          <br /> that Makes Easier
        </p>
        <p className="joinus-paragraph mb-8">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex mb-16">
            <img
              className="icon-img me-4"
              src={search}
              alt=""
            />
            <p className="search-text">
              <span className="font-bold">SEARCH</span> for vital <br /> company
              information
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4"
              src={connect}
              alt=""
            />
            <p className="search-text">
              <span className="font-bold">CONNECT</span> with the <br />{" "}
              resources to meet your business needs
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4"
              src={research}
              alt=""
            />
            <p className="search-text">
              <span className="font-bold">RESEARCH </span> and
              <br /> generate reports <br /> that drive growth
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4"
              src={hat}
              alt=""
            />
            <p className="search-text">
              <span className="font-bold">ACADEMY </span> to give you <br />
              the skills for success <br /> in your career
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-[45%]">
          <div className="w-[55%] mt-[55px]">
            <p className="all-in-one-first-div mb-2">
              Hey, check out lorem ipsum services.
            </p>
            <p className="all-in-one-first-div mb-2">
              I learned from their videos, got my first job.
            </p>
            <p className="all-in-one-first-div mb-[35px]">
              You won't be disappointed with their services.
            </p>
            <p className="all-in-one-four mb-2 ml-[50px]">
            I got a perfect analysis report from them too
            </p>
            <div className="flex">
              <div className="">
                <img src={teacher} className="teacher" alt="" />
              </div>
              <div>
                <p className="all-in-one-four">Oh, that's great.</p>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img src={student} className="teacher" alt="" />
          </div>
        </div>
    </div>
  );
};

export default AllInOnePlatform;

import React from "react";
import search from "../../../assets/icon-park-twotone_search.png";
import connect from "../../../assets/icon-park-twotone_enquire.png";
import research from "../../../assets/icon-park-twotone_table-report.png";
import hat from "../../../assets/icon-park-twotone_degree-hat.png";
import teacher from "../../../assets/Teacher.png";
import student from "../../../assets/Student.png";
import "./AllInOnePlatform.css";

const AllInOnePlatform = () => {
  return (
    <div className="px-4 xl:px-32 mt-[132px] grid grid-cols-1 lg:grid-cols-2 justify-center mb-[135px]">
      <div className="border border-red-500">
        <h2 className="banner-text xl:whitespace-nowrap mb-4">
          <span className="partners">All-in-One</span> platform<br /> that Makes Easier
        </h2>
        <p className="joinus-paragraph mb-8">
          We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex mb-16">
            <img
              className="icon-img me-4 border border-red-500"
              src={search}
              alt=""
            />
            <p className="search-text border border-red-500">
              <span className="font-bold">SEARCH</span> for vital <br /> company information
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4 border border-red-500"
              src={connect}
              alt=""
            />
            <p className="search-text border border-red-500">
              <span className="font-bold">CONNECT</span> with the <br /> resources to meet your business needs
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4 border border-red-500"
              src={research}
              alt=""
            />
            <p className="search-text border border-red-500">
              <span className="font-bold">RESEARCH </span> and
              <br /> generate reports <br /> that drive growth
            </p>
          </div>
          <div className="flex mb-16">
            <img
              className="icon-img me-4 border border-red-500"
              src={hat}
              alt=""
            />
            <p className="search-text border border-red-500">
              <span className="font-bold">ACADEMY </span> to give you <br />
              the skills for success <br /> in your career
            </p>
          </div>
        </div>
      </div>
      <div className="border border-red-500">
        <div className="flex">
          <div className="text-start mt-10">
            <div className="flex">
              <div className="mt-[285px]">
                <img src={teacher} className="teacher" alt="" />
              </div>
              <div>
                <p className="all-in-one-first-div mb-2">
                  Hey, check out lorem ipsum services.
                </p>
                <p className="all-in-one-first-div mb-2">
                  I learned from their videos, got my first job.
                </p>
                <p className="all-in-one-first-div mb-[35px]">
                  You won't be disappointed with their services.
                </p>
                {/* <p className="all-in-one-four mb-2">
                  You won't be disappointed with their services.
                </p>
                <p className="all-in-one-four">Oh, that's great.</p> */}
                <div>
                <p className="all-in-one-four mb-2">
                  You won't be disappointed with their services.
                </p>
                <p className="all-in-one-four">Oh, that's great.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Set text-end to move this div to the right */}
            <img src={student} className="student" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOnePlatform;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPage.css";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import anti from "../../assets/anti.png";
import Spinner from "../../Components/Spinner/Spinner";

const DetailsPage = () => {
  const { _id } = useParams();
  const [selectedResult, setSelectedResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://mcs-server-fzsoqscmr-tanushri-das.vercel.app/accountants/${_id}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setSelectedResult(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id]);

  return (
    <div className="px-4 xl:px-32 mt-[100px] mb-[132px]">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner/>
        </div>
      ) : (
        <div className="mb-[132px]">
          {selectedResult && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="border border-red-500">
                <h3 className="accountant-name mb-4">{selectedResult.name}</h3>
                <p className="intro mb-8">{selectedResult.intro}</p>
                <div className="flex items-center mb-8">
                  <FaStar className="star" />
                  <p className="star mx-2 rating">{selectedResult.rating}</p>
                  <p className="review-count">({selectedResult.reviewCount})</p>
                </div>
                <div className="basic-to-complex p-7 mb-8">
                  <div className="mb-8 flex justify-between">
                    <h4 className="intro">Basic to complex tasks</h4>
                    <p className="rupee">₹4,370</p>
                  </div>
                  <p className="intro flex items-center mb-6">
                    <MdDateRange className="me-1" />
                    Delivers the job within 2 days
                  </p>
                  <div className="flex justify-between">
                    <a href="/" className="proposal">
                      <span className="button-text">Request Proposal</span>
                    </a>
                    <a href="/" className="chat ms-3 md:ms-0">
                      <span className="chat-text">Chat with me</span>
                    </a>
                  </div>
                </div>
                <div className="basic-to-complex p-7">
                  <h2 className="accountant-name mb-4">What people say?</h2>
                  <p className="intro">{selectedResult.testimonial.text}</p>
                </div>
              </div>
              <div className="border border-red-500">
                <img
                  className="candidate-img mb-8"
                  src={selectedResult?.image}
                  alt={selectedResult.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "block";
                  }}
                />
                <span
                  className="image-not-found-text text-lg ms-4 font-medium my-5"
                >
                 Image not found. Image stored on Unsplash may be kept private.
                </span>

                <div>
                  <h3 className="accountant-name mb-[22px]">
                    About {selectedResult.name}
                  </h3>
                  <div className="grid grid-cols-3">
                    <div>
                      <h5 className="candidate-about-details">FROM</h5>
                      <p>{selectedResult.about.from}</p>
                    </div>
                    <div>
                      <h5 className="candidate-about-details">PARTNER SINCE</h5>
                      <p>{selectedResult.about.partnerSince}</p>
                    </div>
                    <div>
                      <h5 className="candidate-about-details">
                        AVERAGE RESPONSE TIME
                      </h5>
                      <p>{selectedResult.about.averageResponseTime}</p>
                    </div>
                  </div>
                </div>
                <div className="my-8">
                  <h5 className="candidate-about-details">ABOUT</h5>
                  <p className="about-desc">{selectedResult.about.description}</p>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h5 className="candidate-about-details mb-2">
                      SERVICES I OFFER
                    </h5>
                    <ul className="ml-[19px]">
                      {selectedResult.about.services.map((service) => (
                        <li className="list-disc services-li">{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <h5 className="candidate-about-details mb-2">WHY ME?</h5>
                    <ul className="ml-[19px]">
                      {selectedResult.about.benefits.map((benefit) => (
                        <li className="list-disc services-li">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div>
        <h3 className="accountant-name mb-8">Recommended for you</h3>
        <div>
          {selectedResult && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="recomended-card">
                <img src={anti} alt="" />
                <div className="p-6">
                  <div className="flex justify-between mt-4 mb-[5px]">
                    <p className="recomended-name">{selectedResult.name}</p>
                    <p className="rupee">₹4,370</p>
                  </div>
                  <p className="recomended-text mb-3">
                    I will do business evaluation and corporate services
                  </p>
                  <div className="flex items-center mb-8">
                    <FaStar className="star" />
                    <p className="star mx-2 rating">{selectedResult.rating}</p>
                    <p className="review-count">
                      ({selectedResult.reviewCount})
                    </p>
                  </div>
                  <a href="/" className="proposal w-full">
                    <span className="button-text">View services</span>
                  </a>
                </div>
              </div>
              <div className="recomended-card">
                <img src={anti} alt="" />
                <div className="p-6">
                  <div className="flex justify-between mt-4 mb-[5px]">
                    <p className="recomended-name">{selectedResult.name}</p>
                    <p className="rupee">₹4,370</p>
                  </div>
                  <p className="recomended-text mb-3">
                    I will do business evaluation and corporate services
                  </p>
                  <div className="flex items-center mb-8">
                    <FaStar className="star" />
                    <p className="star mx-2 rating">{selectedResult.rating}</p>
                    <p className="review-count">
                      ({selectedResult.reviewCount})
                    </p>
                  </div>
                  <a href="/" className="proposal w-full">
                    <span className="button-text">View services</span>
                  </a>
                </div>
              </div>
              <div className="recomended-card">
                <img src={anti} alt="" />
                <div className="p-6">
                  <div className="flex justify-between mt-4 mb-[5px]">
                    <p className="recomended-name">{selectedResult.name}</p>
                    <p className="rupee">₹4,370</p>
                  </div>
                  <p className="recomended-text mb-3">
                    I will do business evaluation and corporate services
                  </p>
                  <div className="flex items-center mb-8">
                    <FaStar className="star" />
                    <p className="star mx-2 rating">{selectedResult.rating}</p>
                    <p className="review-count">
                      ({selectedResult.reviewCount})
                    </p>
                  </div>
                  <a href="/" className="proposal w-full">
                    <span className="button-text">View services</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link to="/">
          <button className="chat chat-text">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;

import React, { useState, useEffect } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import Spinner from "../../../Components/Spinner/Spinner";

const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl =
    "https://mcs-server-fzsoqscmr-tanushri-das.vercel.app/accountants";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

         // Filter results based on the search text

        const filteredResults = data.filter(
          (item) => item.name.toLowerCase() === searchText.toLowerCase()
        );

        setSearchResults(filteredResults);

        if (filteredResults.length === 0) {
          setSelectedResult(null); // Clear selected result
        } else {
          setSelectedResult(filteredResults[0]); // Set selected result if found
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchText) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  return (
    <div className="mt-[126px] mb-[237px] px-4 xl:ps-32 grid grid-cols-1 lg:grid-cols-2 justify-center gap-[68px]">
      <div className="">
        <h2 className="banner-text mb-4">
          Find <span className="partners pl-[10px]">Partners</span> (CAs)
          available online
        </h2>
        <p className="banner-paragraph mb-[60px]">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA’s for
          compliance support
        </p>
        <div className="search-container">
          <input
            type="text"
            id="enter"
            className="search-input"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button id="clear" className="search">
            <span className="search-btn-text">Search</span>
          </button>
        </div>
         {/* Show loading spinner while fetching data */}
        {loading && <Spinner/>}
        {/* Display error message if there's an error */}
        {error && <p>Error: {error.message}</p>}
        {/* Display search results if found */}
        {searchResults.length > 0 && selectedResult && !loading && (
          <ul className="mt-4">
            <div>
              <Link
                className="text-xl ms-3 font-semibold"
                to={`/details/${selectedResult._id}`}
              >
                {selectedResult.name}
              </Link>
            </div>
          </ul>
        )}
        {/* Display a message if no results found */}
        {!loading && searchText && !selectedResult && (
          <p className="text-red-500 mt-4 text-lg ms-3 font-medium">Name not found</p>
        )}
      </div>
      <div className="hidden xxl:flex">
        <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
        <img src={img2} alt="" className="mr-4" />
        <img src={img3} alt="" className="mt-[41.98px]" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
        <img src={img2} alt="" className="mr-4" />
        <img src={img3} alt="" className="mt-[41.98px]" />
      </div>
    </div>
  );
};

export default Banner;

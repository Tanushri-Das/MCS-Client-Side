// import React, { useState, useEffect } from "react";
// import "./Banner.css";
// import { Link } from "react-router-dom";
// import img1 from "../../../assets/img1.png";
// import img2 from "../../../assets/img2.png";
// import img3 from "../../../assets/img3.png";

// const Banner = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null); // State for selected result

//   // Your API endpoint (assuming JSON Server is running on port 3000)
//   const apiUrl = "data.json";

//   useEffect(() => {
//     // Define a function to fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();

//         // Filter the data to only include items with names that exactly match the search query
//         const filteredResults = data.filter(
//           (item) => item.name.toLowerCase() === searchText.toLowerCase()
//         );

//         setSearchResults(filteredResults);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     // Fetch data when the searchText changes
//     if (searchText) {
//       console.log(searchText);
//       fetchData();
//     } else {
//       setSearchResults([]); // Clear results when search text is empty
//     }
//   }, [searchText]);

//   return (
//     <div className="mt-[126px] mb-[237px] ps-4 xl:ps-32 grid grid-cols-1 lg:grid-cols-2 justify-center gap-[68px]">
//       <div className="border border-red-500">
//         <h2 className="banner-text mb-4">
//           Find <span className="partners pl-[10px]">Partners</span> (CAs) available online
//         </h2>
//         <p className="banner-paragraph mb-[60px]">
//           <span className="font-bold">CONNECT</span> with us where your services
//           are listed and visible to a myriad of businesses seeking CA’s for
//           compliance support
//         </p>
//         <div className="search-container">
//           <input
//             type="text"
//             id="enter"
//             className="search-input"
//             placeholder="Search by name"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button id="clear" className="search">
//             Search
//           </button>
//         </div>
//         {/* Display search results */}
//         {searchResults.length > 0 && (
//           <ul>
//             {searchResults.map((result) => (
//               <div key={result.id}>
//                 <Link className="text-lg ms-3 font-semibold"
//                   to={`/details/${result.id}`}
//                   onClick={() => {
//                     console.log("Selected result:", result);
//                     setSelectedResult(result);
//                   }}
//                 >
//                   {result.name}
//                 </Link>
//               </div>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="border border-red-500 hidden xxl:flex">
//         <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
//         <img src={img2} alt="" className="mr-4" />
//         <img src={img3} alt="" className="mt-[41.98px]" />
//       </div>

//       <div className="border border-red-500 grid grid-cols-3 gap-4">
//         <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
//         <img src={img2} alt="" className="mr-4" />
//         <img src={img3} alt="" className="mt-[41.98px]" />
//       </div>
//     </div>
//   );
// };

// export default Banner;





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
      <div className="border border-red-500">
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
        {loading && <Spinner />}
        {error && <p>Error: {error.message}</p>}
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
        {!loading && searchText && !selectedResult && (
          <p className="text-red-500 mt-4 text-lg ms-3 font-medium">Name not found</p>
        )}
      </div>
      <div className="border border-red-500 hidden xxl:flex">
        <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
        <img src={img2} alt="" className="mr-4" />
        <img src={img3} alt="" className="mt-[41.98px]" />
      </div>
      <div className="border border-red-500 grid grid-cols-3 gap-4">
        <img src={img1} alt="" className="mr-4 mt-[83.97px]" />
        <img src={img2} alt="" className="mr-4" />
        <img src={img3} alt="" className="mt-[41.98px]" />
      </div>
    </div>
  );
};

export default Banner;

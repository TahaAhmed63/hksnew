"use-client";
import { useState, useEffect } from "react";

const ProductTabs = ({ productData,additionalinfo }) => {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const [activeTab, setActiveTab] = useState("description");
  const [parsedContent, setParsedContent] = useState({}); // Store parsed data as an object

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);
  function parseDescriptionToObject(description) {
    console.log(description,"")
    if (!description) {
      return {
        descriptionContent: "",
        technicalDetails: "",
      };
    }
  
    // Extract content up to the next <h2> or <table> tag for Description
    const descriptionContent = description.match(/<h2[^>]*>Description<\/h2>[\s\S]*?(?=<h2|<table)/i)?.[0] || "";
    
    // Extract content for the first <table> as Technical Details
    const technicalDetails = description.match(/<table[\s\S]*?<\/table>/i)?.[0] || "";
  
    return {
      descriptionContent,
      technicalDetails,

    };
  }
  useEffect(() => {
    if (productData) {
      setParsedContent(parseDescriptionToObject(productData)); // Parse only once
    }
  }, [productData]);

  // Function to parse description HTML and extract the main description and technical details as separate sections


  const tabs = [
    {
      id: "description",
      title: "Description",
      content: (
        <div
          className="custom-tab-content"
          dangerouslySetInnerHTML={{ __html: parsedContent.descriptionContent }}
        />
      ),
    },
    {
      id: "technical-details",
      title: "Technical Detail",
      content: (
        <div className="technical-details">
          <div
            className="technical-details-table"
            dangerouslySetInnerHTML={{ __html: parsedContent.technicalDetails }}
          />
        </div>
      ),
    },
    {
      id: "additional-information",
      title: "Additional Information",
      content: (
        <div>
          <h2>Additional information</h2>
          <table className="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
            <tbody>
              <tr>
                { additionalinfo.map((e,i)=>(
<>
<th scope="row" key={i}>{e?.name}</th>

<td><p>{e?.options.map((j)=>(j+','))}</p></td>

</>
                ))
               
              }
              </tr>
              
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div className="singleproduct-tabs">
      <ul className="tabs wc-tabs py-md-4" role="tablist">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            role="tab"
            aria-controls={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
          >
            <button onClick={() => setActiveTab(tab.id)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`singleproduct-tabs ${activeTab === tab.id ? "active" : "hidden"}`}
          id={`tab-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-title-${tab.id}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default ProductTabs;

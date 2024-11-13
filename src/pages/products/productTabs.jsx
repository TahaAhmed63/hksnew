"use-client";
import { useState, useEffect } from "react";

const ProductTabs = ({ productData }) => {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const [activeTab, setActiveTab] = useState("description");
  const [parsedDescription, setParsedDescription] = useState(null); // Start with null to avoid hydration issues
  const [isDataReady, setIsDataReady] = useState(false); // Track if data is ready

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  useEffect(() => {
    if (productData) {
      const parsedData = parseDescriptionToObject(productData);
      setParsedDescription(parsedData);
      setIsDataReady(true); // Data ready for rendering
    }
  }, [productData]);

  function parseDescriptionToObject(description) {
    // Extract content between tags using regular expressions
    const getTagContent = (tag) => {
      const regex = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, "is");
      const match = description.match(regex);
      return match ? match[1].trim() : "";
    };

    return {
      description: getTagContent("h2"),
      customerBenefits: getTagContent("h3"), // First <h3> tag content
      preservesPower: getTagContent("h3"), // Second <h3> tag content if needed
      savesOnMaintenance: getTagContent("h3"), // Third <h3> tag content if needed
      technicalDetails: getTagContent("table"), // Get entire table as plain content
    };
  }
const mainTable = `<table>${parsedDescription.technicalDetails}</table>`
  const tabs = [
    {
      id: "description",
      title: "Description",
      content: isDataReady && parsedDescription ? (
        <div className="custom-tab-content">
          <h3><strong>Customer benefits</strong></h3>
          <p      dangerouslySetInnerHTML={{ __html: parsedDescription.customerBenefits }} />
          <h3><strong>Preserves power & performance</strong></h3>
          <p>{parsedDescription.preservesPower}</p>
          <h3><strong>Saves on maintenance</strong></h3>
          <p>{parsedDescription.savesOnMaintenance}</p>
        </div>
      ) : (
        <div>Loading...</div> // Placeholder until data is ready
      ),
    },
    {
      id: "technical-details",
      title: "Technical Detail",
      content: isDataReady && parsedDescription ? (
        <div className="technical-details">
            <div
      className="technical-details-table"
      dangerouslySetInnerHTML={{ __html: mainTable }}
    />
        </div>
      ) : (
        <div>Loading...</div> // Placeholder until data is ready
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
                <th scope="row">Variations</th>
                <td><p>{productData.additionalInfo?.variations}</p></td>
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

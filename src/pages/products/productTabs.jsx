// components/ProductTabs.js
import { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="custom-tab-content">
          <h3><strong>Customer benefits</strong></h3>
          <p>Proven metal-organic anti-wear additive system protects engines under all operating conditions by providing excellent wear control in even the most sophisticated valve train mechanisms, including those with variable valve timing. Multi-grade viscosity provides additional protection against wear at start-up and under high temperature operating conditions.</p>
          <h3><strong>Preserves power & performance</strong></h3>
          <p>Metallic detergent and ashless dispersant additive system preserves power and performance by providing good control of piston and ring deposits.</p>
          <h3><strong>Saves on maintenance</strong></h3>
          <p>Good thermal and oxidation stability resists in-service oil degradation that contributes to filter blocking and sludge formation.</p>
        </div>
      ),
    },
    {
      id: 'technical-details',
      title: 'Technical Detail',
      content: (
        <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left font-bold">S.No</th>
            <th className="border border-gray-300 p-2 text-left font-bold">ASTM METHODS</th>
            <th className="border border-gray-300 p-2 text-left font-bold">ANALYSIS</th>
            <th className="border border-gray-300 p-2 text-left font-bold">Results</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">Appearance</td>
            <td className="border border-gray-300 p-2">Clear</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">ASTM D-1500</td>
            <td className="border border-gray-300 p-2">Color (ASTM)</td>
            <td className="border border-gray-300 p-2">L3.5</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">ASTM D-1298</td>
            <td className="border border-gray-300 p-2">Density @ 85 °F (29.5 °C)</td>
            <td className="border border-gray-300 p-2">0.8795</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">ASTM D-445</td>
            <td className="border border-gray-300 p-2">Kinematic Viscosity @100 °C.eSt</td>
            <td className="border border-gray-300 p-2">19.42</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5</td>
            <td className="border border-gray-300 p-2">ASTM D-445</td>
            <td className="border border-gray-300 p-2">Kinematic Viscosity @40 °C.eSt</td>
            <td className="border border-gray-300 p-2">165.35</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">6</td>
            <td className="border border-gray-300 p-2">ASTM D-2270</td>
            <td className="border border-gray-300 p-2">Viscosity Index</td>
            <td className="border border-gray-300 p-2">135</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">7</td>
            <td className="border border-gray-300 p-2">ASTM D-2896</td>
            <td className="border border-gray-300 p-2">TBN mg KOH/gm</td>
            <td className="border border-gray-300 p-2">4.61</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">8</td>
            <td className="border border-gray-300 p-2">ASTM D-92</td>
            <td className="border border-gray-300 p-2">Flash Point COC °C</td>
            <td className="border border-gray-300 p-2">232</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">9</td>
            <td className="border border-gray-300 p-2">ASTM D-97</td>
            <td className="border border-gray-300 p-2">Pour Point °C</td>
            <td className="border border-gray-300 p-2">-21</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">10</td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">Water by Crackle Test</td>
            <td className="border border-gray-300 p-2">Negative</td>
          </tr>
        </tbody>
      </table>
      ),
    },
    {
      id: 'additional-information',
      title: 'Additional Information',
      content: (
        <div>
          <h2>Additional information</h2>
          <table className="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
            <tbody>
              <tr>
                <th scope="row">Variations</th>
                <td><p>0.7L, 1L</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="singleproduct-tabs">
      <ul className="tabs wc-tabs py-md-4" role="tablist">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
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
          className={`singleproduct-tabs ${activeTab === tab.id ? 'active' : 'hidden'}`}
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

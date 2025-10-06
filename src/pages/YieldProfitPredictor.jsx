import React, { useState } from "react";
import "./YieldProfitPredictor.css";

const YieldProfitPredictor = () => {
  const [landSize, setLandSize] = useState("");
  const [cropType, setCropType] = useState("");
  const [yieldPerAcre, setYieldPerAcre] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [results, setResults] = useState(null);

  const calculateYieldAndProfit = (e) => {
    e.preventDefault();

    if (!landSize || !yieldPerAcre || !marketPrice) {
      alert("Please fill in all required fields!");
      return;
    }

    const totalYield = parseFloat(landSize) * parseFloat(yieldPerAcre);
    const totalProfit = totalYield * parseFloat(marketPrice);

    setResults({
      totalYield: totalYield.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
    });
  };

  const resetForm = () => {
    setLandSize("");
    setCropType("");
    setYieldPerAcre("");
    setMarketPrice("");
    setResults(null);
  };

  return (
    <section className="yield-profit-section">
      <div className="yield-container">
        <h2>📈 Yield & Profit Predictor</h2>
        <p>
          Estimate your potential harvest and profit before planting. Plan
          smarter, farm better!
        </p>

        <form className="yield-form" onSubmit={calculateYieldAndProfit}>
          <label>
            Land Size (acres)
            <input
              type="number"
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
              placeholder="e.g. 5"
              required
            />
          </label>

          <label>
            Crop Type
            <input
              type="text"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              placeholder="e.g. Maize"
            />
          </label>

          <label>
            Estimated Yield per Acre (kg)
            <input
              type="number"
              value={yieldPerAcre}
              onChange={(e) => setYieldPerAcre(e.target.value)}
              placeholder="e.g. 2000"
              required
            />
          </label>

          <label>
            Market Price per kg (KSh)
            <input
              type="number"
              value={marketPrice}
              onChange={(e) => setMarketPrice(e.target.value)}
              placeholder="e.g. 50"
              required
            />
          </label>

          <div className="form-buttons">
            <button type="submit">Predict</button>
            <button type="button" className="reset-btn" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>

        {results && (
          <div className="results">
            <h3>📊 Prediction Results</h3>
            <p>
              <strong>Crop Type:</strong> {cropType || "N/A"}
            </p>
            <p>
              <strong>Estimated Total Yield:</strong> {results.totalYield} kg
            </p>
            <p>
              <strong>Expected Profit:</strong> KSh {results.totalProfit}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YieldProfitPredictor;

// This service simulates backend API calls for the prototype.
// When integrating a real backend, replace these functions with actual fetch/axios calls.

// Utility to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const simulateCatalystDiscovery = async (reaction) => {
  await delay(2500); // Simulate processing time
  
  // Deterministic mock response based on input (just for demo consistency)
  return {
    reaction,
    candidates: [
      {
        id: "C-12",
        name: "MX-12 Variant",
        structure: "Cu-ZnO/Al2O3-Modified",
        activity: 88,
        stability: 94,
        selectivity: 85,
        sustainability: 92,
        get finalScore() {
          return (0.4 * this.activity) + (0.3 * this.stability) + (0.2 * this.selectivity) + (0.1 * this.sustainability);
        },
        confidence: 89,
        aiInsight: "Catalyst MX-12 ranked higher because of improved thermal stability under high-pressure conditions."
      },
      {
        id: "C-09",
        name: "MX-9 Baseline",
        structure: "Cu-ZnO/Al2O3",
        activity: 82,
        stability: 75,
        selectivity: 78,
        sustainability: 85,
        get finalScore() {
          return (0.4 * this.activity) + (0.3 * this.stability) + (0.2 * this.selectivity) + (0.1 * this.sustainability);
        },
        confidence: 95,
        aiInsight: "Baseline catalyst. Underperformed at high temperature conditions in previous simulations."
      },
      {
        id: "C-15",
        name: "MX-15 Experimental",
        structure: "Ag-Modified Cu-ZnO",
        activity: 95,
        stability: 68,
        selectivity: 92,
        sustainability: 80,
        get finalScore() {
          return (0.4 * this.activity) + (0.3 * this.stability) + (0.2 * this.selectivity) + (0.1 * this.sustainability);
        },
        confidence: 72,
        aiInsight: "High theoretical activity, but predicted stability is low. Unusual molecular pattern detected."
      }
    ].sort((a, b) => b.finalScore - a.finalScore)
  };
};

export const getExperimentFeedback = async () => {
  await delay(1500);
  
  return {
    history: [
      { epoch: 1, predicted: 60, actual: 55, accuracy: 91 },
      { epoch: 2, predicted: 65, actual: 64, accuracy: 98 },
      { epoch: 3, predicted: 75, actual: 68, accuracy: 90 },
      { epoch: 4, predicted: 80, actual: 72, accuracy: 90 },
      { epoch: 5, predicted: 85, actual: 83, accuracy: 97 },
    ],
    failureAnalysis: {
      catalystId: "MX-9 Baseline",
      reason: "Thermal instability at >250°C",
      details: "Prediction mismatch detected. Oxygen-binding affinity may be underweighted in the current model.",
      recommendation: "Suggesting structural modifications to strengthen Cu-O bonds."
    }
  };
};

export const getSustainabilityMetrics = async () => {
  await delay(1000);
  
  return {
    co2Reduction: "45%",
    greenChemistryScore: 88,
    energyEfficiency: 92,
    sustainabilityIndex: "A+"
  };
};

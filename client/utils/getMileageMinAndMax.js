const getMileageMinAndMax = (range) => {
  const minAndMax = ranges[range];
  return {
    min: minAndMax[0],
    max: minAndMax[1]
  }
};

const ranges = {
  '0-10,000': [0, 10000],
  '10,001-20,000': [10001, 20000],
  '20,001-30,000': [20001, 30000],
  '30,001-40,000': [30001, 40000],
  '40,001-50,000': [40001, 50000],
  '50,001-60,000': [50001, 60000],
  '60,001-70,000': [60001, 70000],
  '70,001-80,000': [70001, 80000],
  '80,001-90,000': [80001, 90000],
  '90,001-100,000': [90001, 100000],
  '100,001-120,000': [100001, 120000],
  '120,001-140,000': [120001, 140000],
  '140,001-160,000': [140001, 160000],
  '160-001-200,000': [160001, 200000],
  '200,000 and up!': [200001, 2043755555]
};

export default getMileageMinAndMax;
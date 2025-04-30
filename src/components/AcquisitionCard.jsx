import { useMemo, useState } from 'react';
import ImageModal from './ImageModal';

// Import images for Acquisition 1
import acquisition1Retention from '../assets/images/acquisition1-retention.png';
import acquisition1Monetization from '../assets/images/acquisition1-monetization.png';
import acquisition1Engagement from '../assets/images/acquisition1-engagement.png';

// Import images for Acquisition 2
import acquisition2Retention from '../assets/images/acquisition2-retention.png';
import acquisition2Monetization from '../assets/images/acquisition2-monetization.png';
import acquisition2Engagement from '../assets/images/acquisition2-engagement.png';

function AcquisitionCard({ number, data, showROI = false }) {
  const [modalImage, setModalImage] = useState(null);
  // Exchange rate: 1 Robux = 0.0035 USD
  const ROBUX_TO_USD = 0.0035;
  
  // Calculate USD values
  const dailyRevenueUSD = data.avgDailyRevenue * ROBUX_TO_USD;
  const annualRevenueUSD = dailyRevenueUSD * 365;
  const liveOpsCostUSD = annualRevenueUSD * (data.liveOpsExpenses / 100);
  const annualProfitUSD = annualRevenueUSD - liveOpsCostUSD;
  const projectedROI = (annualProfitUSD / data.purchasePrice) * 100;
  const maxPurchasePrice = annualProfitUSD / 3; // For 300% ROI

  // Use a memoized helper function to get the right image based on number and type
  const getImage = useMemo(() => {
    return (type) => {
      if (number === 1) {
        if (type === 'retention') return acquisition1Retention;
        if (type === 'monetization') return acquisition1Monetization;
        if (type === 'engagement') return acquisition1Engagement;
      } else if (number === 2) {
        if (type === 'retention') return acquisition2Retention;
        if (type === 'monetization') return acquisition2Monetization;
        if (type === 'engagement') return acquisition2Engagement;
      }
      return null;
    };
  }, [number]);

  return (
    <div className="bg-white shadow rounded-lg p-3 sm:p-4 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Acquisition {number}</h2>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Metrics</h3>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">Purchase Price</h4>
              <p className="text-base sm:text-lg">${data.purchasePrice.toLocaleString()}</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">LiveOps Expenses</h4>
              <p className="text-base sm:text-lg">{data.liveOpsExpenses}%</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">Day 1 Retention</h4>
              <p className="text-base sm:text-lg">{data.day1Retention}% {data.day1RetentionChange > 0 ? '↑' : '↓'}{Math.abs(data.day1RetentionChange)}%</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">First Session Retention</h4>
              <p className="text-base sm:text-lg">{data.firstSessionRetention}% {data.firstSessionRetentionChange > 0 ? '↑' : '↓'}{Math.abs(data.firstSessionRetentionChange)}%</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">Daily Active Users</h4>
              <p className="text-base sm:text-lg">{data.dailyActiveUsers.toLocaleString()} {data.dailyActiveUsersChange > 0 ? '↑' : '↓'}{Math.abs(data.dailyActiveUsersChange)}%</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">Average Daily Revenue</h4>
              <p className="text-base sm:text-lg">{data.avgDailyRevenue.toLocaleString()} R$ {data.avgDailyRevenueChange > 0 ? '↑' : '↓'}{Math.abs(data.avgDailyRevenueChange)}%</p>
              <p className="text-xs sm:text-sm text-gray-500">(${dailyRevenueUSD.toFixed(2)} USD)</p>
            </div>
            {showROI && (
              <>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-gray-700">Projected ROI</h4>
                  <p className={`text-base sm:text-lg ${projectedROI >= 300 ? 'text-success-500' : 'text-danger-500'}`}>
                    {projectedROI.toFixed(2)}% {projectedROI >= 300 ? '✅' : '❌'}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-gray-700">Max Price (300% ROI)</h4>
                  <p className="text-base sm:text-lg">${maxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Retention Analytics</h3>
              <img 
                src={getImage('retention')}
                alt={`Acquisition ${number} Retention Analytics`}
                className="w-full rounded border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({
                  src: getImage('retention'),
                  alt: `Acquisition ${number} Retention Analytics`
                })}
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Monetization Analytics</h3>
              <img 
                src={getImage('monetization')}
                alt={`Acquisition ${number} Monetization Analytics`}
                className="w-full rounded border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({
                  src: getImage('monetization'),
                  alt: `Acquisition ${number} Monetization Analytics`
                })}
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Engagement Analytics</h3>
              <img 
                src={getImage('engagement')}
                alt={`Acquisition ${number} Engagement Analytics`}
                className="w-full rounded border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({
                  src: getImage('engagement'),
                  alt: `Acquisition ${number} Engagement Analytics`
                })}
              />
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <ImageModal 
          imageSrc={modalImage.src}
          altText={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
}

export default AcquisitionCard;

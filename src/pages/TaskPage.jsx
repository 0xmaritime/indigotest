import TaskDescription from '../components/TaskDescription';
import AcquisitionCard from '../components/AcquisitionCard';
import SalesFunnelVisual from '../components/SalesFunnelVisual';

function TaskPage() {
  const acquisitionData = [
    {
      purchasePrice: 100000,
      liveOpsExpenses: 20,
      day1Retention: 12.53,
      day1RetentionChange: 14.0,
      firstSessionRetention: 58.13,
      firstSessionRetentionChange: 4.7,
      avgDailyRevenue: 228155,
      avgDailyRevenueChange: 2030.1,
      totalRevenue: 6388351,
      dailyActiveUsers: 243732,
      dailyActiveUsersChange: 2143.6
    },
    {
      purchasePrice: 120000,
      liveOpsExpenses: 17.5,
      day1Retention: 7.05,
      day1RetentionChange: 1.7,
      firstSessionRetention: 53.32,
      firstSessionRetentionChange: 37.1,
      avgDailyRevenue: 103248,
      avgDailyRevenueChange: 32.9,
      totalRevenue: 2890955,
      dailyActiveUsers: 221041,
      dailyActiveUsersChange: 214
    }
  ];

  return (
    <div>
      <TaskDescription />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AcquisitionCard number={1} data={acquisitionData[0]} />
        <AcquisitionCard number={2} data={acquisitionData[1]} />
      </div>
      
      <SalesFunnelVisual />
    </div>
  );
}

export default TaskPage;
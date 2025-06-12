import TeamHoursPieChart from './TeamHoursPieChart';
import IndividualLineChart from './IndividualLineChart';

const ResourceDetails = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamHoursPieChart />
        <IndividualLineChart />
      </div>
    </div>
  );
};

export default ResourceDetails;

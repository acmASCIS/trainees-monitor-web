import * as React from 'react';

interface ISolvingRateCardProps {
  solvingRate: any;
}

const SolvingRateCard = ({ solvingRate }: ISolvingRateCardProps) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-">Solving Rate</h5>
      <p className="card-text">Monthly Average: {solvingRate.monthlyAverage}</p>
      <p className="card-text">Weekly Average: {solvingRate.weeklyAverage}</p>
      <p className="card-text">Daily Average: {solvingRate.dailyAverage}</p>
      <hr />
      <p className="card-text">Past Month: {solvingRate.pastMonth}</p>
      <p className="card-text">Past Week: {solvingRate.pastWeek}</p>
      <p className="card-text">Past Day: {solvingRate.pastDay}</p>
      <p className="card-text">
        <small className="text-muted">Solving rate is based on accepted submissions only</small>
      </p>
    </div>
  </div>
);

export default SolvingRateCard;

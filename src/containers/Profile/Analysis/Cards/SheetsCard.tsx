import * as React from 'react';
import Timeline from 'antd/lib/timeline';

interface ISheetsCardProps {
  sheets: any;
}

const SheetsCard = ({ sheets }: ISheetsCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Past 5 Sheets</h5>
        {sheets.length ? (
          <Timeline>
            {sheets.map((sheet: any, index: number) => (
              <Timeline.Item>
                <p>{sheet.contestName}</p>
                <p>Rank: {sheet.rank}</p>
                <p>Solved Count: {sheet.solvedCount}</p>
                <p>Solved Problems: {`[${sheet.solvedProblems.join(',')}]`}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        ) : (
          <p className="cart-text">There are no sheets right now.</p>
        )}
        <p className="card-text">
          <small className="text-muted">
            Participation analysis is based on every submission, during contest time or after
          </small>
        </p>
      </div>
    </div>
  );
};

export default SheetsCard;

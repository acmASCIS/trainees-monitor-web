import * as React from 'react';
import Timeline from 'antd/lib/timeline';

interface IPastRoundsCardProps {
  pastRounds: any;
}

const PastRoundsCard = ({ pastRounds }: IPastRoundsCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Past Rounds</h5>
        <p className="card-text">Average Rank: {pastRounds.averageRank}</p>
        <p className="card-text">Average Rating Change: {pastRounds.averageRatingChange}</p>
        <hr />
        <h6 className="card-text">Past 5 Rounds Summary:</h6>
        <Timeline>
          {pastRounds.summary.map((round: any, index: number) => (
            <Timeline.Item key={index}>
              <p>{round.contestName}</p>
              <p>Rank: {round.rank}</p>
              <p>Rating Change: {round.ratingChange}</p>
              <p>Old Rating: {round.oldRating}</p>
              <p>New Rating: {round.newRating}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default PastRoundsCard;

import * as React from 'react';
import SolvingRateCard from './Cards/SolvingRateCard';
import TagsCard from './Cards/TagsCard';
import PastRoundsCard from './Cards/PastRoundsCard';
import SheetsCard from './Cards/SheetsCard';

interface IAnalysisCardsDeckProps {
  analysis: any;
}

const AnalysisCardsDeck = ({ analysis }: IAnalysisCardsDeckProps) => (
  <div className="card-columns align-self-start">
    <SheetsCard sheets={analysis.sheetsParticipation} />
    <SolvingRateCard solvingRate={analysis.solvingRate} />
    <TagsCard tags={analysis.tags} />
    <PastRoundsCard pastRounds={analysis.pastRounds} />
  </div>
);

export default AnalysisCardsDeck;

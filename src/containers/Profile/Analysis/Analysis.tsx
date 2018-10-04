import * as React from 'react';
import LoadableComponent from '../../../components/LoadableComponent/LoadableComponent';
import { getAnalysis } from '../../../services/AnalysisService';
import AnalysisCardsDeck from './AnalysisCardsDeck';

interface IAnalysisProps {
  handle: string;
}

interface IAnalysisState {
  isLoading: boolean;
  analysis: any;
}

class Analysis extends React.Component<IAnalysisProps, IAnalysisState> {
  constructor(props: IAnalysisProps) {
    super(props);
    this.state = {
      isLoading: false,
      analysis: undefined
    };
  }

  public loadAnalysis = async () => {
    const { handle } = this.props;
    try {
      await this.setState({ isLoading: true });
      const analysis = await getAnalysis(handle);
      this.setState({ analysis, isLoading: false });
    } catch (error) {
      // TODO: Handle 403, 401
      console.log(error);
    }
  };

  public render() {
    const { isLoading, analysis } = this.state;
    return (
      <LoadableComponent isLoading={isLoading}>
        <div className="d-flex flex-column py-3">
          {analysis === undefined ? (
            <button
              type="button"
              className="btn btn-outline-primary align-self-center"
              onClick={this.loadAnalysis}
            >
              Analyze Profile
            </button>
          ) : (
            <AnalysisCardsDeck analysis={analysis} />
          )}
        </div>
      </LoadableComponent>
    );
  }
}

export default Analysis;

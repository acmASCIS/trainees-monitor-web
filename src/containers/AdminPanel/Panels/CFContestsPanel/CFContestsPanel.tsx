import * as React from 'react';
import Popconfirm from 'antd/lib/popconfirm';

import { getCFContests, deleteCFContest, createCFContest } from 'src/services/CFContestsService';
import LoadableComponent from 'src/components/LoadableComponent/LoadableComponent';

interface ICFContestsPanelProps {
  label: string;
}

interface ICFContestsPanelState {
  contests: any[];
  contestId: string;
  isLoading: boolean;
}

class CFContestsPanel extends React.Component<ICFContestsPanelProps, ICFContestsPanelState> {
  constructor(props: ICFContestsPanelProps) {
    super(props);
    this.state = {
      contests: [],
      contestId: '',
      isLoading: true
    };
  }

  public async componentDidMount() {
    this.setState({
      contests: await getCFContests(),
      isLoading: false
    });
  }

  public deleteContest = async (contestId: number) => {
    const result = await deleteCFContest(contestId);
    if (result.success) {
      this.setState(prevState => ({
        contests: prevState.contests.filter(contest => contest._id !== contestId)
      }));
    }
  };

  public createContest = async () => {
    // TODO: contest already exists message
    const result = await createCFContest(+this.state.contestId);
    if (result.success) {
      const { name, _id } = result.contest;
      this.setState(prevState => ({
        contests: [{ name, _id }, ...prevState.contests]
      }));
    }
  };

  public contestIdChanged = (event: any) => {
    this.setState({ contestId: event.target.value });
  };

  public render() {
    const { contests, contestId } = this.state;
    return (
      <React.Fragment>
        <div className="container d-flex align-items-end flex-column py-3">
          <div className="input-group w-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Contest ID"
              value={contestId}
              onChange={this.contestIdChanged}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={this.createContest}>
                Add Contest
              </button>
            </div>
          </div>
          <LoadableComponent isLoading={this.state.isLoading}>
            <ul className="list-group list-group-flush align-self-stretch my-3">
              {contests.length === 0 ? (
                <p>There are no contests yet.</p>
              ) : (
                contests.map(contest => (
                  <Popconfirm
                    key={contest._id}
                    title="Are you sure delete this contest?"
                    onConfirm={() => this.deleteContest(contest._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button type="button" className="list-group-item list-group-item-action">
                      {contest.name}
                    </button>
                  </Popconfirm>
                ))
              )}
            </ul>
          </LoadableComponent>
        </div>
      </React.Fragment>
    );
  }
}

export default CFContestsPanel;

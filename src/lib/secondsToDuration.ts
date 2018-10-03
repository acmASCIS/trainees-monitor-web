import * as moment from 'moment';

export function secondsToDuration(seconds: number): number {
  const currentTime = moment();
  const lastSeenTime = moment.unix(seconds);
  const duration = moment.duration(currentTime.diff(lastSeenTime));
  return Math.floor(duration.asHours());
}

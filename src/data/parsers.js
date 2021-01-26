import moment from 'moment';
import { formatNumber } from './format';

function parseRawStats(rawStats) {
  return {
    cases: formatNumber(rawStats.positive),
    deaths: formatNumber(rawStats.death),
    recovered: formatNumber(rawStats.recovered),
    ventilator: formatNumber(rawStats.onVentilatorCurrently),
    hospitalized: formatNumber(rawStats.hospitalized),
    icu: formatNumber(rawStats.inIcuCurrently),
    tested: formatNumber(rawStats.totalTestResults),
    updated: moment(rawStats.lastModified).format('LLLL'),
  };
}

export function parseUsStats(data) {
  const [usStatRaw] = data;
  return parseRawStats(usStatRaw);
}

export function parseStateStats(state, data) {
  const rawStats = data.find((stateStats) => stateStats.state === state);

  return parseRawStats(rawStats);
}

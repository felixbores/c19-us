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

function parseChart(historicData, key, label, color) {
  const chartData = historicData.map((data) => ({
    x: moment(data.date, 'YYYYMMDD'),
    y: data[key] || 0,
  }));

  return { label, data: chartData, fill: false, borderColor: color };
}

function parseHistoric(historicData) {
  return [
    {
      label: 'Cases',
      key: 'positive',
      color: 'rgb(100, 0, 200)',
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rgb(100, 100, 200)',
    },
    {
      label: 'Total Tested',
      key: 'totalTestResults',
      color: 'rgb(10, 30, 100)',
    },
    {
      label: 'Hospitalized',
      key: 'hospitalizedCurrently',
      color: 'rgb(20, 100, 230)',
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rgb(250, 99, 132)',
    },
  ].reduce((prev, next) => {
    if (historicData.filter((d) => d[next.key] !== null).length > 4) {
      if (prev) {
        prev.push(parseChart(historicData, next.key, next.label, next.color));
      }
    }
    return prev;
  }, []);
}

export function parseHistoricUS(historicData) {
  return parseHistoric(historicData);
}

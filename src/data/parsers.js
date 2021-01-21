import moment from 'moment';
import { formatNumber } from './format';

export function parseUsStats(data) {
  const [usStatRaw] = data;
  return {
    cases: formatNumber(usStatRaw.positive),
    deaths: formatNumber(usStatRaw.death),
    recovered: formatNumber(usStatRaw.recovered),
    ventilator: formatNumber(usStatRaw.onVentilatorCurrently),
    hospitalized: formatNumber(usStatRaw.hospitalized),
    icu: formatNumber(usStatRaw.inIcuCurrently),
    tested: formatNumber(usStatRaw.totalTestResults),
    updated: moment(usStatRaw.lastModified).format('LLLL'),
  };
}

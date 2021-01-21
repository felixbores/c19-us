import axios from 'axios';
import { parseUsStats } from './parsers';

async function usStats() {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  );

  return parseUsStats(response.data);
}

export default {
  usStats,
};

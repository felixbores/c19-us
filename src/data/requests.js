import axios from 'axios';
import { parseUsStats, parseStateStats } from './parsers';

async function usStats() {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  );

  return parseUsStats(response.data);
}

async function stateStats(state) {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  );

  return parseStateStats(state, response.data);
}

export default {
  usStats,
  stateStats,
};

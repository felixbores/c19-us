<script context="module">
  import stateNames from '../data/stateNames';
  import requests from '../data/requests';

  export async function preload(page) {
    console.log({ page });

    try {
      const state = page.params['state'];

      if (!stateNames.find((s) => s.abbreviation === state)) {
        this.error(404);
        return;
      }

      const statesStats = await requests.stateStats(state);
      console.log({ statesStats });

      return { state, statesStats };
    } catch (e) {
      this.error(500, 'Something went wrong.');
      return;
    }
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';

  export let state;
  export let statesStats;
</script>

<svelte:head>
  <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container" />
  <h1>Covid 19 - {state}</h1>
</div>
<CovidStat {...statesStats} />
<CovidChart />

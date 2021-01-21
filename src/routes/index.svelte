<script context="module">
  import requests from '../data/requests';

  export async function preload() {
    try {
      const usStats = await requests.usStats();

      return { usStats };
    } catch (e) {
      this.error(500, 'Something went wrong.');
      return;
    }
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';

  export let usStats;
  console.log({ usStats });
</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container" />
  <h1>Covid 19 - US</h1>
</div>

<CovidStat {usStats} />
<CovidChart />
<TableContainer />

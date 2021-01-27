<script context="module">
  import requests from '../data/requests';

  export async function preload() {
    try {
      const stats = await requests.usStats();
      const historic = await requests.historicUS();

      return { stats, historic };
    } catch (e) {
      console.log(e);

      this.error(500, 'Something went wrong.');
      return;
    }
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';

  export let stats;
  export let historic;

  console.log({ stats, historic });
</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container" />
  <h1>Covid 19 - US</h1>
</div>

<CovidStat {...stats} />
<CovidChart />
<TableContainer />

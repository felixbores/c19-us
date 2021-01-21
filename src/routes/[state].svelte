<script context="module">
  import stateNames from '../data/stateNames';

  export async function preload(page) {
    console.log({ page });

    try {
      const state = page.params['state'];

      if (!stateNames.find((s) => s.abbreviation === state)) {
        this.error(404);
        return;
      }

      return { state };
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
</script>

<svelte:head>
  <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container" />
  <h1>Covid 19 - {state}</h1>
</div>
<CovidStat />
<CovidChart />

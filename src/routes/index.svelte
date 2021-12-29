<script lang="ts">
  import Calendar from '$lib/Calendar.svelte'
  import Clock from '$lib/Clock.svelte'
  import { DateDecimal, decimalMsToGregorianMs } from '$lib/decimal-time'
  import { onMount } from 'svelte'

  let date = new DateDecimal()

  onMount(() => {
    // Everything here in decimal time unless noted otherwise
    const tick = () => {
      date = new DateDecimal()
      const msUntilSecond = 1000 - date.getDecimalMilliseconds()
      setTimeout(tick, decimalMsToGregorianMs(msUntilSecond))
    }
    tick()
  })
</script>

<main>
  <center>
    <strong>{date.toDecimalString()}</strong>
  </center>

  <div class="clocks">
    <div class="clock">
      <h2>Decimal</h2>
      <Clock decimal />
    </div>

    <div class="clock">
      <Calendar />
      <!-- <Clock /> -->
    </div>
  </div>
</main>

<style>
  :global(body) {
    font-family: futura;
    padding: 5rem 1.5rem;
  }
  .clocks {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 4.5rem;
  }
  .clock {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>

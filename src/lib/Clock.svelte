<script lang="ts">
  import { DateDecimal, decimalMsToGregorianMs } from '$lib/decimal-time'
  import { onMount } from 'svelte'

  export let decimal = false

  /// Whether decimal clock should have midnight at the bottom
  export let invertedDecimal = false

  let date = decimal ? new DateDecimal() : new Date()
  let secondsRotation = 0
  let minutesRotation = 0
  let hoursRotation = 0

  const steps = decimal ? 10 : 12
  const subSteps = decimal ? 10 : 5

  const incrementalRotation = (prev: number, next: number): number => {
    if (prev % 1 > next) {
      return Math.ceil(prev) + next
    } else {
      return Math.floor(prev) + next
    }
  }
  const updateRotations = () => {
    if (date instanceof Date) {
      secondsRotation = incrementalRotation(secondsRotation, date.getSeconds() / 60)
      minutesRotation = incrementalRotation(minutesRotation, date.getMinutes() / 60)
      hoursRotation = incrementalRotation(hoursRotation, (date.getHours() % 12) / 12)
    } else {
      secondsRotation = incrementalRotation(secondsRotation, date.getDecimalSeconds() / 100)
      minutesRotation = incrementalRotation(minutesRotation, date.getDecimalMinutes() / 100)
      hoursRotation = incrementalRotation(
        hoursRotation,
        (date.getDecimalHours() +
          date.getDecimalMinutes() / 100 +
          date.getDecimalSeconds() / 10000) /
          10
      )
    }
  }

  updateRotations()

  onMount(() => {
    const tick = () => {
      if (decimal) {
        date = new DateDecimal()
        const msUntilSecond = 1000 - date.getDecimalMilliseconds()
        setTimeout(tick, decimalMsToGregorianMs(msUntilSecond))
      } else {
        date = new Date()
        const msUntilSecond = 1000 - date.getMilliseconds()
        setTimeout(tick, msUntilSecond)
      }
      updateRotations()
    }
    tick()
  })
</script>

<section class="clock" class:decimal class:inverted={decimal && invertedDecimal}>
  {#each Array(steps * subSteps) as _, step}
    <div
      class="step"
      class:major={step % subSteps === 0}
      class:minor={decimal && step % 5 === 0}
      style={`--rotation: ${(step / (steps * subSteps)) * 360}deg;`}
    />
  {/each}
  {#each Array(steps) as _, step}
    <div
      class="number"
      style={`--rotation: ${(step / steps) * 360 + (decimal && invertedDecimal ? 180 : 0)}deg;`}
    >
      <span>{step === 0 ? steps : step}</span>
    </div>
  {/each}
  <div class="hands">
    <div class="hours" style={`--rotation: ${hoursRotation * 360}deg;`} />
    <div class="minutes" style={`--rotation: ${minutesRotation * 360}deg;`} />
    <div class="seconds" style={`--rotation: ${secondsRotation * 360}deg;`} />
  </div>
</section>

<style lang="postcss">
  .clock {
    border-radius: 50%;
    background-color: #ddfffa;
    position: relative;
    height: 20em;
    width: 20em;
    &:after {
      background: #000;
      border-radius: 50%;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 5%;
      height: 5%;
      z-index: 10;
    }
    &.inverted .hands {
      transform-origin: 50% 50%;
      transform: rotateZ(180deg);
    }
  }
  .hands {
    position: absolute;
    inset: 0;
  }
  .step {
    --rotation: 0deg;
    --top: 1;
    --height: 3;
    --width: 0.4;

    position: absolute;

    top: calc(1% * var(--top));
    left: calc(50% - 1% * var(--width) / 2);
    width: calc(1% * var(--width));
    height: calc(1% * var(--height));

    transform: rotateZ(var(--rotation));
    transform-origin: 50% calc((50 - var(--top)) * 100% / var(--height));

    background: #000;
    border-radius: 2px;

    &.minor {
      --height: 5;
      --width: 0.6;
    }
    &.major {
      --top: 0.8;
      --height: 5;
      --width: 1.5;
    }
  }
  .number {
    --rotation: 0deg;
    --top: 7;
    --height: 10;
    --width: 10;

    position: absolute;
    top: calc(1% * var(--top));
    left: calc(50% - 1% * var(--width) / 2);
    height: calc(1% * var(--height));
    width: calc(1% * var(--width));

    text-align: center;

    transform: rotateZ(var(--rotation));
    transform-origin: 50% calc((50 - var(--top)) * 100% / var(--height));

    & span {
      position: relative;
      display: block;
      transform: rotateZ(calc(0deg - var(--rotation)));
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  .hours,
  .minutes,
  .seconds {
    --rotation: 0deg;
    transform: rotateZ(var(--rotation));
    transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44);
    border-radius: 10px;
  }
  .hours {
    background: #000;
    height: 20%;
    left: 48.75%;
    position: absolute;
    top: 30%;
    transform-origin: 50% 100%;
    width: 2.5%;
    transition: none;
  }
  .minutes {
    background: #000;
    height: 40%;
    left: 49%;
    position: absolute;
    top: 10%;
    transform-origin: 50% 100%;
    width: 2%;
  }
  .seconds {
    background: #000;
    height: 45%;
    left: 49.5%;
    position: absolute;
    top: 14%;
    transform-origin: 50% 80%;
    width: 1%;
    z-index: 8;
  }
</style>

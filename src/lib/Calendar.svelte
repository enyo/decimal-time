<script lang="ts">
  import { DateDecimal } from './decimal-time'

  const months = [
    'January',
    'February',
    'March',
    'April',
    'Mai',
    'June',
    'Sol',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  export let date: DateDecimal = new DateDecimal()
</script>

<div class="calendar">
  <div class="month">{months[date.getDecimalMonth()]}</div>
  <span class="weekday">Mon</span>
  <span class="weekday">Tue</span>
  <span class="weekday">Wed</span>
  <span class="weekday">Thu</span>
  <span class="weekday">Fri</span>
  <span class="weekday">Sat</span>
  <span class="weekday">Sun</span>
  <span class="weekday">YD</span>
  {#each Array(date.getDecimalDaysOfMonth()) as _, day}
    <span class={`day day-${day}`} class:current-day={day === date.getDecimalDate()}>{day + 1}</span
    >
  {/each}
</div>

<style lang="postcss">
  .calendar {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0.5rem;
  }
  .month {
    grid-column: 1 / 8;
    text-align: center;
  }
  .weekday {
    font-weight: 200;
    font-size: 0.875em;
    text-align: center;
  }
  .weekday:first-of-type {
    grid-column: 1;
  }
  .day {
    background: #eee;
    padding: 0.25em;
    text-align: center;
    color: #333;
  }
  .current-day {
    background: #cfc;
    color: #000;
  }
  .day-0,
  .day-7,
  .day-14,
  .day-21 {
    grid-column: 1;
  }
  .day-28 {
    grid-column: 8 !important;
  }
  /* .day:nth-child(1n) {
    grid-column: 1;
  } */
</style>

export * from './types'

import type { DateDecimalFormats, DateDecimalInterface } from './types'

const gregorianDayMs = 1000 * 60 * 60 * 24
const decimalDayMs = 1000 * 100 * 100 * 10

export const gregorianMsToDecimalMs = (gregorianMs: number): number =>
  Math.round(gregorianMs * (decimalDayMs / gregorianDayMs))

export const decimalMsToGregorianMs = (decimalMs: number): number =>
  Math.round(decimalMs * (gregorianDayMs / decimalDayMs))

export class DateDecimal implements DateDecimalInterface {
  date: Date

  constructor(date = new Date()) {
    this.date = date
  }

  private isLeapYear(): boolean {
    return new Date(this.date.getUTCFullYear(), 1, 29).getDate() === 29
  }

  private formatNum(num: number, prefix = '0', prefix2 = ''): string {
    if (num < 10) {
      return prefix + num
    } else if (num < 100) {
      return prefix2 + num
    }
    return String(num)
  }

  private formatDateString(date: number, month: number, year: number, separator: string): string {
    return `${this.formatNum(date)}${separator}${this.formatNum(month)}${separator}${this.formatNum(
      year
    )}`
  }

  /**
   * Returns the local milliseconds today.
   */
  private getMsToday(): number {
    return (
      this.date.getHours() * 60 * 60 * 1000 +
      this.date.getMinutes() * 60 * 1000 +
      this.date.getSeconds() * 1000 +
      this.date.getMilliseconds()
    )
  }
  /**
   * Returns the local decimal milliseconds today.
   */
  private getDecimalMsToday(): number {
    return gregorianMsToDecimalMs(this.getMsToday())
  }

  /**
   * Day of the year, between 0 and 365
   * 365 for leap years, otherwise 364
   * @returns {number}
   */
  getDayOfYear(): number {
    // Uses UTC to calculate but actually returns the local day of the year.
    return (
      (Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()) -
        Date.UTC(this.date.getFullYear(), 0, 0)) /
        24 /
        60 /
        60 /
        1000 -
      1
    )
  }

  /**
   * Days of a month, between 28 and 29
   * 29 for december or june in a leap year.
   * @returns {number}
   */
  getDecimalDaysOfMonth(): number {
    if ((this.isLeapYear() && this.getDecimalMonth() === 5) || this.getDecimalMonth() === 12)
      return 29
    else return 28
  }

  /**
   * Decimal day of the month, 0...28/29
   * From January to November this is 28, December always 29.
   * In a leap year, June always has 29 days.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
   * @returns {number}
   */
  getDecimalDate(): number {
    const day = this.getDayOfYear()
    const month = this.getDecimalMonth()

    // Since nearly every month has 28 days, we can simply remove 28 days for
    // each month that happened before.
    let date = day - 28 * month

    if (this.isLeapYear() && month > 5) {
      // If we're in a leap year, June has 29 days too
      date--
    }

    return date
  }

  /**
   * Decimal day of the week, 0...7
   * Every normal weekday is 0...6 (Mon - Sun) but 7 is Leap Day and Year Day
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
   * @returns {number}
   */
  getDecimalDay(): number {
    const date = this.getDecimalDate()
    if (date == 29) return 7
    else return date % 7
  }

  /**
   * Year, between 1000 and 9999
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
   * @returns {number}
   */
  getDecimalYear(): number {
    return this.date.getFullYear()
  }

  /**
   * Decimal hour, between 0 and 9
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
   * @returns {number}
   */
  getDecimalHours(): number {
    return Math.floor(this.getDecimalMsToday() / 10000000)
  }

  /**
   * Decimal milliseconds, between 0 and 999
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
   * @returns {number}
   */
  getDecimalMilliseconds(): number {
    return Math.floor(this.getDecimalMsToday() % 1000)
  }

  /**
   * Decimal minutes, between 0 and 99
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
   * @returns {number}
   */
  getDecimalMinutes(): number {
    return Math.floor((this.getDecimalMsToday() % 10000000) / 100000)
  }

  /**
   * Decimal month, 0...12
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
   * @returns {number}
   */
  getDecimalMonth(): number {
    let day = this.getDayOfYear()

    // Let's get Year Day out of the way right now.
    if (day > 350) return 12

    if (this.isLeapYear()) {
      // That basically means that we need to take care of Leap Day in June.
      // The easiest way to do this, is to pretend the year still has 365 days,
      // and offset it.
      if (day > 28 * 6) day--
    }
    return Math.floor(day / 28)
  }

  /**
   * Decimal seconds, between 0 and 99
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
   * @returns {number}
   */
  getDecimalSeconds(): number {
    return Math.floor((this.getDecimalMsToday() % 100000) / 1000)
  }

  /**
   * Decimal time, milliseconds since the Unix Epoch
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
   * @returns {number}
   */
  getDecimalTime(): number {
    return gregorianMsToDecimalMs(this.date.getTime())
  }

  /**
   * Decimal date string, returns DD/MM/YYYY or YYYY-MM-DD
   * @returns {string}
   */
  toDecimalDateString(format?: keyof DateDecimalFormats): string {
    if (format === 'ISO')
      return this.formatDateString(
        this.date.getFullYear(),
        this.getDecimalMonth() + 1,
        this.getDecimalDate() + 1,
        '-'
      )
    return this.formatDateString(
      this.getDecimalDate() + 1,
      this.getDecimalMonth() + 1,
      this.date.getFullYear(),
      '/'
    )
  }

  /**
   * Decimal time string, returns HH:MM:SS or THH:MM:SS.000Z
   * @returns {string}
   */
  toDecimalTimeString(format?: keyof DateDecimalFormats): string {
    const timeString: string = this.formatDateString(
      this.getDecimalHours(),
      this.getDecimalMinutes(),
      this.getDecimalSeconds(),
      ':'
    )
    if (format === 'ISO')
      return 'T' + timeString + '.' + this.formatNum(this.getDecimalMilliseconds(), '00', '0') + 'Z'
    return timeString
  }

  /**
   * Decimal datetime string, returns DD/MM/YYYY HH:MM:SS or  YYYY-MM-DDTHH:MM:SS.000Z
   * @returns {string}
   */
  toDecimalString(format?: keyof DateDecimalFormats): string {
    if (format === 'ISO') return this.toDecimalDateString(format) + this.toDecimalTimeString(format)
    return this.toDecimalDateString() + ' ' + this.toDecimalTimeString()
  }
}

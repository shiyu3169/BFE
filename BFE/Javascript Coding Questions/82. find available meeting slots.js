/* [start, end] is a time interval, with all integers from 0 to 24.

Given schedules for all team members,

[
  [[13,15], [11,12], [10,13]], //schedule for member 1
  [[8, 9]], // schedule for member 2
  [[13, 18]] // schedule for member 3
]
You need to create a function findMeetingSlots() to return the time slots available for all the members to have a meeting.

For the input above, below slots should be returned

[[0,8],[9,10],[18,24]]
Notes

the input schedule intervals might be unsorted
one member's schedule might have overlapping intervals. */

// type Interval = [number, number]

/**
 * @param {Interval[][]} schedules
 * @return {Interval[]}
 */

// naive
// [] =>[[0,24]]
// [13,15] => [[0,13],[15,24]]
// [11,12] => [[0,11],[12,13],[15,24]]
// [10,13] => [[0,10],[15,24]]
// [8,9] => [[0.8],[9,10],[15,24]]
// [13,18] => [[0,8], [9,10], [18,24]]

// flat and sort

function findMeetingSlots(schedules) {
  const result = []
  const sortSchedules = schedules.flat().sort((a, b) => a[0] - b[0])

  let prevEnd = 0
  for (const schedule of sortSchedules) {
    let [start, end] = schedule
    if (prevEnd < start) {
      result.push([prevEnd, start])
    }
    prevEnd = Math.max(end, prevEnd)
  }
  if (prevEnd !== 24) {
    result.push([prevEnd, 24])
  }

  return result
}

// const schedules = [
//   [[13,15], [11,12], [10,13]], //schedule for member 1
//   [[8, 9]], // schedule for member 2
//   [[13, 18]] // schedule for member 3
// ]

// findMeetingSlots(schedules)

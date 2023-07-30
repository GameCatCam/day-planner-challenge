// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display date at top
// 9-5 time slots
// Color coded based on past, present, and future
// Enter event on click
// Text storage
// Text render on load

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeBlock = $('.time-block')
  console.log($('#9').attr('id') > dayjs().format('H'))
  console.log(9 > dayjs().format('H'))
  console.log('true' > 15)

  timeBlock.each(function() {
    if ($(this).attr('id') < dayjs().format('H')) {
      $(this).addClass('past')
    } else if ($(this).attr('id') > dayjs().format('H')) {
      $(this).addClass('future')
    } else {
      $(this).addClass('present')
    }
  })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.

  window.onload = setInterval(function() {
    var currentDay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#currentDay').text(currentDay)
  }, 0)
});

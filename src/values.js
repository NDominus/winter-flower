const flowers = [ // 41 flowers
  "IMG_20231231_112728.jpg", // 17/03
  "IMG_20231231_112743.jpg", // 18/03
  "IMG_20240210_160251.jpg", // 19/03
  "IMG_20240319_164407.jpg", // 20/03
  "IMG-20240229-WA0001.jpg", // 21/03
  "IMG-20240311-WA0094.jpg", // 22/03
  "IMG_20240303_124938.jpg", // 23/03
  "IMG_20240303_124950.jpg", // 24/03
  "IMG_20240303_125005.jpg", // 25/03
  "IMG_20240325_181832.jpg", // 26/03
  "IMG_20240325_114442.jpg", // 27/03
  "IMG_20240325_114532.jpg", // 28/03
  "IMG_20240325_133730.jpg", // 29/03
  "IMG_20240325_133756.jpg", // 30/03
  "photo_2024-03-23_14-47-49.jpg", // 31/03
  "photo_2024-03-23_14-47-36.jpg", // 01/04
  "photo_2024-03-23_14-47-46.jpg", // 02/04
  "IMG_20240402_160813.jpg", // 03/04
  "2024-04-03_12.32.55_a8c186bb.jpg", // 04/04
  "2024-04-03_12.32.55_b40478b9.jpg", // 05/04
  "IMG-20240218-WA0040.jpg", // 06/04
  "IMG_20240402_182035.jpg", // 07/04
  "IMG_20240327_182933.jpg", // 08/04
  "IMG_20240403_173559.jpg", // 09/04
  "IMG_20240403_120804.jpg", // 10/04
  "IMG_20240403_120824.jpg", // 11/04
  "IMG-20240225-WA0003.jpg", // 12/04
  "IMG-20240306-WA0065.jpg", // 13/04
  "IMG-20240315-WA0006.jpg", // 14/04
  "IMG-20240315-WA0024.jpg",
  "IMG-20240315-WA0023.jpg",
  "IMG-20240118-WA0015.jpg",
  "IMG_20231227_151341.jpg",
  "IMG-20240317-WA0057.jpg",
  "A.jpg",
  "B.jpg",
  "C.jpg",
  "D.jpg",
  "E.jpg",
  "F.jpg",
]
const butterflies = [
  "borboletas-butterflies-beautiful-fly-gif-15280754.gif",
  "borboletas-butterflies-beautiful-fly-gif-15280821.gif",
  "borboletas-butterflies-beautiful-fly-gif-15280837.gif",
  "borboletas-butterflies-beautiful-fly-red-butterfly-gif-15280817.gif",
  "butterfly-blue-butterfly-freedom-pretty-nature-gif-14485854.gif",
  "butterfly-freedom-pretty-nature-fly-gif-14485860.gif",
  "butterfly-freedom-pretty-nature-fly-gif-14485864.gif",
  "butterfly-green-butterfly-freedom-pretty-nature-gif-14485847.gif",
  "butterfly-green-monarch-green-butterfly-freedom-gif-14485841.gif",
  "butterfly-orange-monarch-orange-butterfly-freedom-gif-14485837.gif",
  "butterfly-pink-butterfly-freedom-pretty-nature-gif-14485851.gif",
  "butterfly-pink-butterfly-freedom-pretty-nature-gif-14485855.gif",
  "butterfly-red-butterfly-freedom-pretty-nature-gif-14485856.gif",
  "butterfly-red-monarch-gif-14485842.gif",
  "butterfly-red-monarch-red-butterfly-freedom-gif-14485836.gif",
  "butterfly-teal-monarch-green-butterfly-freedom-gif-14485838.gif",
  "butterfly-violet-butterfly-freedom-pretty-nature-gif-14485840.gif",
  "butterfly-yellow-butterfly-freedom-pretty-nature-gif-14485859.gif",
  "butterfly-yellow-monarch-yellow-butterfly-freedom-gif-14485835.gif",
  "francais-butterfly-beautiful-colorful-gif-16722840.gif",
  "karinanevskaya-gif-23163002.gif",
  "kiss-gif-26269486.gif",
]

// const timeEnd = 1714176300000; // 27 April 2024
// const timeEnd = 1720810500000; // 12 July 2024
const timeEnd = 1734377400000; // 16 December 2024
const oneSecond = 1000; // milliseconds
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

const deco_dt = 16.66; // milliseconds it takes to update the decoration's position
const deco_dx_max = 3.0; // max value for deco_dx
const deco_dy_max = 3.0; // max value for deco_dy
const deco_change_wait_max = 5000; // max value for deco_change_wait
const deco_chance_stationary = 0.2; // probability that in a setRandomDisplacements call, deco_dx and deco_dy are set to 0

var deco_firstCycle = true; // whether it's the first time calling setRandomDisplacements
var deco_dx = 0; // rate of change on the X position
var deco_dy = 0; // rate of change on the Y position
var deco_change_wait = 0; // milliseconds it takes to call setRandomDisplacements and change deco_dx and deco_dy
var deco_active = false; // whether the decoration is currently active

var timeout_updatePos;
var timeout_setRandomDisplacements;

var test = 40 - Math.floor((timeEnd - Date.now()) / oneDay);

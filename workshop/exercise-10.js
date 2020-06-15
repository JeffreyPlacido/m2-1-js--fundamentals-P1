// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let x = 0; x < 7; x++) {
    let triangle = '#';
    for (let y = 1; y <= x; y++) {
    triangle += '#';
    }
    console.log(triangle);
}
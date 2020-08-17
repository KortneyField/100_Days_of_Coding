const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];


for (i = 0; i < burger.length; ++i) {
    console.log(burger[i]);
}
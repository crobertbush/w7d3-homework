//Functional Programming Exercises

//1.
const tea4TeamFCC = getTea(40);


//2.
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);


//3.
const tabsBeforeIndex = this.tabs.slice(0, index);
const tabsAfterIndex = this.tabs.slice(index + 1);

//4.
return fixedValue + 1;


//5.
function incrementer(argument) {
    return argument + 1;
}

//6.
function add(array, bookName) {
    let newBookList = [...array];
    newBookList.push(bookName);
    return newBookList;

function remove(array, bookName) {
    let newBookList = [...array];
    if (newBookList.indexOf(bookName) >= 0) {
      
    newBookList.splice(newBookList.indexOf(bookName), 1);
    return newBookList;


//7.
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));


//8.
this.forEach(a => newArray.push(callback(a)));


//9.
const filteredList = watchList
  .filter(movie => {
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  });


//10.
let newArray = [];
this.forEach(function(x) {
if (callback(x) == true) {
    newArray.push(x);
}
});

//11. 
return anim.slice(beginSlice, endSlice);

//12.
return cities.slice(0, 3);
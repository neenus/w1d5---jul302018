var list = [];

function pushToList(num){
list.push(num);
}

function sortFunction() {
  list.sort(function(a,b) {
    return a - b;
  });
}

function sortedList() {
  sortFunction();
  return list;
}


module.exports = {
  pushToList: pushToList,
  sortedList: sortedList
};
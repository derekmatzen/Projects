function buildArray(number) {
    var newArray = [];

    while (number !== newArray.length) {
        var i = Math.floor((Math.random() * 9) + 1);
        newArray.join(i);
    }
}


function findSimilarities() {
  var array1 = new buildArray(this.number);
  var array2 = new buildArray(this.number);
  var array3 = new buildArray(this.number);

  for (i = 0; i<array1.length; i++){
    for (j = 0; j<array2.length; j++){
      for (k = 0; k<array3.length; k++){
        if (array1[i] === array2[j] && array2[j] === array3[k]) {
            console.log(array3[k]);
        }
      }
    }
  }
}

callArray();

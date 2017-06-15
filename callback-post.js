const publish = (item, author, callback) => {
  console.log(item);
  let date = new Date();

  callback(author, date);
}

const articles = (author, date) => {
  let pubDate = date.toDateString();
  console.log(`Written by ${author}.`);
  console.log(`Published ${pubDate}.`);
}


publish('Callback Examples', 'Derek Matzen', articles);

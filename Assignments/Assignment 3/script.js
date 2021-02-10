//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var picture = '<input type="checkbox" id="check" /><br /><br /><img src="down.png" width="25px" />';

function HideTable() {
  // console.log("hello")
  document.getElementById('dropDownTextArea').style.display = "none";
  document.getElementById('button').disabled = true;
  document.getElementById('del').style.display = "none";
}

function addrow() {
  var tbl = document.getElementById('myTable');
  var row = tbl.insertRow(2);

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
  var cell8 = row.insertCell(8)

  cell0.innerHTML = picture;
  cell1.innerHTML = "Student 1";
  cell2.innerHTML = "Teacher 1";
  cell3.innerHTML = "Approved";
  cell4.innerHTML = "Fall";
  cell5.innerHTML = "TA";
  cell6.innerHTML = "12345";
  cell7.innerHTML = "100%";
  cell8.innerHTML = "";
}

document.getElementById('check').onclick = function () {

  var row = document.getElementById('row');
  if (this.checked) {
    console.log(row);
    row.style.backgroundColor = "orange";
    document.getElementById('del').style.display = "block";
    document.getElementById('button').disabled = false;
    document.getElementById('button').style.backgroundColor = 'orange';
  }
  else {
    row.style.backgroundColor = "white";
    document.getElementById('del').style.display = "none";
    document.getElementById('button').disabled = true;
    document.getElementById('button').style.backgroundColor = 'grey';
  }
}

document.getElementById('del').onclick = function () {
  var row = document.getElementById('row');
  document.de

}

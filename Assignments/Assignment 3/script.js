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

var picture = '<input type="checkbox" onclick="check(this) " /><br /><br /><a href="#" onclick="expand(this)"><img src="down.png" width="25px" />';

var dbtn = '<td><button id="del" onclick="del(this)">Delete</button></td>';



function HideTable() {
  document.getElementById('button').disabled = true;

}

function expand(drop) {

  var erow = drop.parentNode.parentNode;
  let sib = erow.nextElementSibling;
  console.log(sib);

  if (sib.style.display == "none") {
    sib.style.display = 'block';

  }
  else {
    sib.style.display = 'none';
  }

}


function addrow() {
  var tbl = document.getElementById('myTable');

  var trow = tbl.insertRow(1);
  row.setAttribute("id", "row");


  var cell0 = trow.insertCell(0);
  var cell1 = trow.insertCell(1);
  var cell2 = trow.insertCell(2);
  var cell3 = trow.insertCell(3);
  var cell4 = trow.insertCell(4);
  var cell5 = trow.insertCell(5);
  var cell6 = trow.insertCell(6);
  var cell7 = trow.insertCell(7);

  cell0.innerHTML = picture;
  cell1.innerHTML = "Student 1";
  cell2.innerHTML = "Teacher 1";
  cell3.innerHTML = "Approved";
  cell4.innerHTML = "Fall";
  cell5.innerHTML = "TA";
  cell6.innerHTML = "12345";
  cell7.innerHTML = "100%";

}

function check(chbox) {

  td1 = chbox.parentNode;
  row = td1.parentNode;
  var head = document.getElementById('mainrow');


  if (chbox.checked) {

    row.style.backgroundColor = "orange";

    // insert cell and delete button
    cell8 = document.createElement("TD");
    cell8.innerHTML = dbtn;
    row.appendChild(cell8);

    //delete heading

    col = document.createElement('TH');
    col.innerText = "Delete";
    if (document.querySelectorAll("input[type='checkbox']:checked").length == 1) {

      head.appendChild(col);
    }

    document.getElementById('button').disabled = false;
    document.getElementById('button').style.backgroundColor = 'orange';

  }
  else {

    row.style.backgroundColor = "white";
    row.removeChild(row.lastElementChild);
    //head.removeChild(col);


    if (document.querySelectorAll("input[type='checkbox']:checked").length == 0) {
      head.removeChild(col);
      document.getElementById('button').style.backgroundColor = 'grey';
      document.getElementById('button').disabled = true;
    }

  }
}

function del(dbtn) {

  var i = dbtn.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);

}

// function hello() {

//   document.getElementById('hel').innerHTML = "hello";
// }
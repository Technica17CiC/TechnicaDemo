
var titleArr   = [ ];
function addressfunc ( title ) {
var title   = document.getElementById("address").value;
  titleArr.push( title );
  console.log( "Titles: " + titleArr.join(", ") );
  document.getElementById("address").value = "";
}
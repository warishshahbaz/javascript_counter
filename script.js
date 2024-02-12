let count = 0;

function addFn() {
  count += 1;
  document.getElementById("count").innerHTML = count;

  clearToZero();
}
function minFn() {
  if (count > 0) {
    count -= 1;
    document.getElementById("count").innerHTML = count;
  } else {
    document.getElementById("count").innerHTML = 0;
  }

  clearToZero();
}
function clearFn() {
  document.getElementById("count").innerHTML = 0;
  count = 0;
  clearToZero();
}

function clearToZero() {
  if (count < 1) {
    document.getElementById("clearBtn").style.display = "none";
  } else {
    document.getElementById("clearBtn").style.display = "block";
  }
}
clearToZero();

function navBarMobile() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
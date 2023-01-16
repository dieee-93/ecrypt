function toggleDark() {
    let darkModeSwitch = document.querySelector("#dark-switch");
  
    if (darkModeSwitch.checked) {
      document.documentElement.style.setProperty("--primary-color", "#cca700");
      document.documentElement.style.setProperty("--secondary-color", "#ccbb00");
      document.documentElement.style.setProperty("--primary-bg-color", "#202020");
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#333533"
      );
      document.documentElement.style.setProperty(
        "--light-bg-color",
        "#b6b6b6"
      );
     
      document.documentElement.style.setProperty(
        "--icon-primary-color",
        "invert(60%) sepia(80%) saturate(614%) hue-rotate(11deg) brightness(92%) contrast(101%)"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#284B63");
      document.documentElement.style.setProperty("--secondary-color", "#3C6E71");
      document.documentElement.style.setProperty("--primary-bg-color", "#E0E0E0");
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#B8B8B8"
      );
      document.documentElement.style.setProperty(
        "--light-bg-color",
        "#333533"
      );
     
      document.documentElement.style.setProperty(
        "--icon-primary-color",
        "invert(25%) sepia(67%) saturate(361%) hue-rotate(160deg) brightness(89%) contrast(95%)"
      );
    }
  }
  
  let darkModeSwitch = document.querySelector("#dark-switch");
  darkModeSwitch.onchange = toggleDark;
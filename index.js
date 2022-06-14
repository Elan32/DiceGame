let roll1 = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let randomImages = "Images/dice" + randomNumber + ".png";
  let image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImages);
  return randomNumber;
};

let roll2 = () => {
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImages2 = "Images/dice" + randomNumber2 + ".png";
  let image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImages2);
  return randomNumber2;
};

let fullroll = async () => {
  let grab1 = roll1();
  let grab2 = roll2();
  let total = grab1 + grab2;
  setTimeout(() => {
    // Run code
    if (total < 7) {
      //   alert("Team A won the game");
      document.querySelector(".output").value =
        "Congratulation!!! Team A won the game";
      document.querySelector(".result").value = total;
    } else if (total > 7) {
      // alert("Team C won the game");
      document.querySelector(".output").value =
        "Hurray!!! Team C is the winner!";
      document.querySelector(".result").value = total;
    } else if (total === 7) {
      document.querySelector(".output").value = "The winner is Team B!";
      document.querySelector(".result").value = total;
      // alert("Team B won the game");
    }
  }, 300);
};

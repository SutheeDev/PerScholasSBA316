const statsContainer = document.querySelector(".stats");

const hideStats = () => {
  statsContainer.style.visibility = "hidden";
  statsContainer.style.zIndex = "-10";
};

export default hideStats;

  const tVoyager = document.getElementById('tVoyager');
  const tPlus = document.getElementById('tPlus');
  const voyagerCard = document.getElementById('voyagerCard');
  const plusCard = document.getElementById('plusCard');

  tVoyager.onclick = () => {
    tVoyager.classList.add('active','voyager');
    tPlus.classList.remove('active','plus');
    voyagerCard.classList.add('active');
    plusCard.classList.remove('active');
  };

  tPlus.onclick = () => {
    tPlus.classList.add('active','plus');
    tVoyager.classList.remove('active','voyager');
    plusCard.classList.add('active');
    voyagerCard.classList.remove('active');
  };
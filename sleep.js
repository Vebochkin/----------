function calculateSleep() {
    const bedtimeInput = document.getElementById('bedtime');
    const bedtime = bedtimeInput.valueAsDate;
  
    if (!bedtime) {
      alert('Please enter your bedtime.');
      return;
    }
  
    const now = new Date();
    const difference = bedtime - now;
  
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You should wake up at ${formatTime(now.getTime() + 8 * 60 * 60 * 1000)}.`;
  }
  
  function formatTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    if (hours < 10) {
      hours = '0' + hours;
    }
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  
    return `${hours}:${minutes}`;
  }
  let premiumEnabled = false;

function togglePremium() {
  premiumEnabled = !premiumEnabled;

  if (premiumEnabled) {
    addPremiumFeatures();
  } else {
    removePremiumFeatures();
  }
}

function addPremiumFeatures() {
  document.body.classList.add('dark-theme');
}

function removePremiumFeatures() {
 
  document.body.classList.remove('dark-theme');

}

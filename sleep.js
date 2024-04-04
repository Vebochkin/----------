function calculateSleep() {
  const wakeTime = document.getElementById('wakeTime').value;
  const sleepCycle = parseInt(document.getElementById('sleepCycle').value);
  
  // Рассчет времени засыпания
  // Здесь можно использовать более сложный алгоритм для расчета сна
  const bedtime = calculateBedtime(wakeTime, sleepCycle);

  // Отображение результата
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your recommended bedtime is ${bedtime}`;
}

function calculateBedtime(wakeTime, sleepCycle) {
  // Здесь можно добавить сложный алгоритм для расчета времени засыпания
  return '10:00 PM';
}

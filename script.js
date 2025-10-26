let count = 0;
    async function getAdvice() {
      let response = await fetch('https://api.adviceslip.com/advice');
      let result = await response.json();
      count++;
      document.getElementById('advice').innerHTML = result.slip.advice;
      document.getElementById('counter').innerHTML = `You have received ${count} advices`;
    }
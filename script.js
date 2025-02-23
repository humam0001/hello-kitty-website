function nextPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);
  
    if (!nextPage) {
      console.error(`Page with ID '${pageId}' not found.`);
      return;
    }
  
    currentPage.classList.remove('active');
    setTimeout(() => {
      nextPage.classList.add('active');
    }, 300);
  }
  
  function showResult(choice) {
    const currentPage = document.querySelector('.page.active');
    const resultPage = document.getElementById(`result-${choice}`);
  
    if (!resultPage) {
      console.error(`Page with ID 'result-${choice}' not found.`);
      return;
    }
  
    currentPage.classList.remove('active');
    setTimeout(() => {
      resultPage.classList.add('active');
    }, 300);
  }
  
  function restartQuiz() {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    setTimeout(() => {
      document.getElementById('question1').classList.add('active');
    }, 300);
  }
  
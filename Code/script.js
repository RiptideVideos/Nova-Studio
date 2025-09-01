const scrollToSectionBtn = document.getElementById('s10kitsbtn');
const targetSection = document.getElementById('boots');

if (scrollToSectionBtn && targetSection) {
  scrollToSectionBtn.addEventListener('click', function(e) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}
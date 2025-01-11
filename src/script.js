/**
 * fileName       : script
 * author         : Yeong-Huns
 * date           : 2025-01-12
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2025-01-12        Yeong-Huns       최초 생성
 */

const theme = document.documentElement.classList
function toggleTheme() {
  const button = document.querySelector('#dark-btn');
  const icon = button.querySelector('i');
  if(theme.contains('dark')) {
    localStorage.theme = 'light';
    icon.className = 'fas fa-moon text-gray-700';
  }
  else {
    localStorage.theme = 'dark';
    icon.className = 'fa-solid fa-sun text-yellow-400';
  }
  theme.toggle('dark');
}

const init = () => {
  if(localStorage.theme === 'dark') theme.add('dark')
  else theme.remove('dark');
};


init();


/**
 * HTML 이 로딩된 후 이벤트 추가
 */
document.addEventListener('DOMContentLoaded', () => {
  /**
   * @description {모바일 화면 메뉴 OPEN/CLOSE}
   * @type {HTMLElement}
   */
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
  });
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
  })
});
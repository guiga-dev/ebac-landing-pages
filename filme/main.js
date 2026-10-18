const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao');
toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('open');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
    }
});

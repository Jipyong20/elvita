const modals = [...document.querySelectorAll('.modal')];
const openModal = (id) => {
  const modal = document.getElementById(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.close-modal').focus();
};
const closeModal = (modal) => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};
document.querySelectorAll('[data-open]').forEach(card => card.addEventListener('click', () => openModal(card.dataset.open === 'letter' ? 'letterModal' : 'carModal')));
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => closeModal(el.closest('.modal'))));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') modals.filter(modal => modal.classList.contains('open')).forEach(closeModal);
});
const driveStage = document.querySelector('.drive-stage');
const driveButton = document.getElementById('startDrive');
driveButton.addEventListener('click', () => {
  const driving = driveStage.classList.toggle('driving');
  driveButton.innerHTML = driving ? '<span>↻</span> TAKE ANOTHER LAP' : '<span>▶</span> START THE ENGINE';
  document.querySelector('.drive-hint').textContent = driving ? 'Vroom... may this year take you somewhere wonderful ✳' : 'press the button to start';
});
const input = document.getElementById('photoInput');
document.getElementById('addPhotos').addEventListener('click', () => input.click());
input.addEventListener('change', () => {
  const files = [...input.files].filter(file => file.type.startsWith('image/')).slice(0, 4);
  if (!files.length) return;
  const memories = [...document.querySelectorAll('.memory')];
  files.forEach((file, index) => {
    const target = memories[index % memories.length];
    const reader = new FileReader();
    reader.onload = () => {
      target.querySelector('.memory-photo').src = reader.result;
      target.querySelector('small').textContent = file.name.replace(/\.[^.]+$/, '').slice(0, 28) || 'a favorite memory';
    };
    reader.readAsDataURL(file);
  });
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
  input.value = '';
});

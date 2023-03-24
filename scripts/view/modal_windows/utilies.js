export function closeBtn () {
  const closeModalWindow  = document.createElement('button');
    closeModalWindow.classList.add('close-modal-window');
    closeModalWindow.id = 'close_modal'
    closeModalWindow.innerText = "X";
    return closeModalWindow
}
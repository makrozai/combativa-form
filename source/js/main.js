(function(){
  // captura el formulario y detecta que evento usar para realizar las funciones correspondientes
  let form = document.querySelector('.c-form')

  if(form.attachEvent) {
    form.attachEvent('submit', processForm);
  }else {
    form.addEventListener('submit', processForm);
  }
  function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    /* acciones del formulario */
      activeModal()


    // Devuelve False para evitar el prevent del submit
    return false;
  }


  let modalConfirmation = document.querySelector('.c-confirmation') // selecciona el modal de confirmación
  let modalAlert = document.querySelector('.c-confirmation__alert') // selecciona la alerta dentro del modal de confirmación
  let closeModal = modalAlert.querySelector('.c-confirmation__button') // selecciona el boton dentro del modal de confirmación

  
  //Start function click in opened modal
  function activeModal() {
    modalConfirmation.classList.remove('fadeOut')
    modalConfirmation.classList.add('active')
    setTimeout(() => {
      modalAlert.classList.add('active')
    }, 100)
    setTimeout(() => {
      modalAlert.classList.add('active')
    }, 500)
  }
  //End function click in opened modal

  //Start function click in closed modal
  closeModal.onclick = () => {
    modalConfirmation.classList.add('fadeOut')

    setTimeout(() => {
      modalConfirmation.classList.remove('active')
      modalAlert.classList.remove('active')
    }, 500)
  }
  //End function click in closed modal

})()
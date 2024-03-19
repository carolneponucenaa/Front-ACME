const modalBotao = document.querySelector('.btn')
    modalBotao.addEventListener('click', function () {
      var myModal = new bootstrap.Modal(document.getElementById('modalExemplo'))
      myModal.show()
    })

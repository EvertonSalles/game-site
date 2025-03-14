function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validarSenha(senha) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\]!@#$%^&*()_+\-=[{};':"\\|,.<>/?])[A-Za-z\d\]!@#$%^&*()_+\-=[{};':"\\|,.<>/?]{6,}$/;
    return regex.test(senha);
  }
  
  function validarTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
  }
  
  document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres que não são dígitos
    if (value.length > 11) value = value.slice(0, 11); // Limita até 11 dígitos
  
    
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    e.target.value = value;
  });
  
  document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
   
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    
    
    let erros = [];
    
    if (!validarEmail(email)) {
      erros.push("Email Inválido");
    }
    
    if (!validarSenha(senha)) {
      erros.push("Senha precisa ter 6+ caracteres, 1 maiúscula, 1 número e 1 especial!");
    }
    
    if (!validarTelefone(telefone)) {
      erros.push("Telefone deve seguir o formato (00) 00000-0000");
    };
    
    
    const divErro = document.getElementById('mensagemErro');
    if (erros.length > 0) {
      divErro.innerHTML = erros.join('<br>');
      divErro.style.color = 'red';
    } else {
      divErro.innerHTML = "Formulário válido! Enviando...";
      divErro.style.color = 'black';
       this.submit(); 
    }
  });
  
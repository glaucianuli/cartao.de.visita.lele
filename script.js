document.addEventListener('DOMContentLoaded', function() {
    const email = document.querySelector('.contact-info p:nth-child(1)');
    const phone = document.querySelector('.contact-info p:nth-child(2)');

    email.addEventListener('click', function() {
        navigator.clipboard.writeText('seuemail@example.com').then(function() {
            alert('Email copiado para a área de transferência!');
        });
    });

    phone.addEventListener('click', function() {
        navigator.clipboard.writeText('(11) 98765-4321').then(function() {
            alert('Telefone copiado para a área de transferência!');
        });
    });
});
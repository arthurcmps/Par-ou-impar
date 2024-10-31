function gerarNumeros() {
    const numero1 = Math.floor(Math.random() * 10) + 1;
    const numero2 = Math.floor(Math.random() * 10) + 1;
    const soma = numero1 + numero2;
    const tipo = (soma % 2 === 0) ? "par" : "ímpar";

    document.getElementById("resultado").innerText = 
        `Números gerados: ${numero1} e ${numero2}. Soma: ${soma} (${tipo})`;
}

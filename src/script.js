//funcao para atualizar a pagina com os novos campos de cadastro de dados
function createInputFields() {
    // Limpa conteudo conteiner
    const inputFieldsContainer = document.getElementById('inputFieldsContainer');
    inputFieldsContainer.innerHTML = '';

    // Cria e da append nos campos criados
     const fieldDefinitions = [
        { type: 'text', placeholder: 'Nome' },
        { type: 'number', placeholder: 'ID' },
        { type: 'tel', placeholder: 'Telefone' },
        { type: 'email', placeholder: 'E-mail' }
    ];

    //cria um titulo para a nova sessao
    const title = document.createElement('h2');
    title.textContent = 'Cadastro de Dados';
    title.style.color = 'black'; 

    inputFieldsContainer.appendChild(title);
    
    // Cria e adiciona os campos ao container
    fieldDefinitions.forEach(definition => {
        const input = document.createElement('input');
        input.type = definition.type;
        input.placeholder = definition.placeholder;
        input.required = true;
        inputFieldsContainer.appendChild(input);

        inputFieldsContainer.appendChild(document.createElement('br'));

    });

    // Cria um botao de submissao
    const submitButton = document.createElement('button');
    submitButton.style.backgroundColor = 'green'; 
    submitButton.style.color = 'white'; 
    submitButton.textContent = 'Enviar';
    submitButton.type = 'submit'; 
    inputFieldsContainer.appendChild(submitButton);
}


//funcao para atualizar a pagina removendo elementos
function removeElements() {
    const container = document.getElementById('entrada');

    // remove todos os elementos filhos
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//funcao para alterar a visibilidade de uma sessao
function toggleVisibility() {
    const div = document.getElementById('shop');
    div.style.display = 'block';
}

//funcao propria do botao entrar
function entrar(){
    removeElements();
    toggleVisibility();
}
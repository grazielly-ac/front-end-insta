

export const divCadastroLoginContainer = document.createElement('div');
divCadastroLoginContainer.className = 'cadastro__login-container';

const divCadastroLoginParagrafo = document.createElement('p');
divCadastroLoginParagrafo.className = 'cadastro__login-paragrafo';
divCadastroLoginParagrafo.textContent = ' Não tem um conta?';

const divCadastroLoginLink = document.createElement('a');
divCadastroLoginLink.href = '#';
divCadastroLoginLink.className = 'cadastro__login-link';
divCadastroLoginLink.textContent = 'Cadastre-se';

divCadastroLoginParagrafo.appendChild(divCadastroLoginLink);
divCadastroLoginContainer.append(divCadastroLoginParagrafo);

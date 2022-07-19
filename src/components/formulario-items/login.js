import logoinsta from '../../assets/img/logoinsta.png';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare);
dom.watch();
/*-----------------*\
    LOGIN LOGO
\*-----------------*/


export const divLoginBorda = document.createElement('div');
divLoginBorda.className = 'login__borda';

const divLoginLogo = document.createElement('div');
divLoginLogo.className = 'login__logo';

const imgInsta = document.createElement('img');
imgInsta.src = logoinsta;
imgInsta.className = 'login__logo-img';


/*-----------------*\
    LOGIN CAMPOS
\*-----------------*/

const divLoginCampos = document.createElement('div');
divLoginCampos.className = 'login__campos';

const divCamposPreencher = document.createElement('div');
divCamposPreencher.className = 'campos__preencher';

const form = document.createElement('form');
form.setAttribute('action','#');
form.setAttribute('method','get');
form.setAttribute('class','campos');


/*------------------------------*\
    LOGIN CAMPOS USUARIO NOME
\*------------------------------*/

const divPreencherUsuario = document.createElement('div');
divPreencherUsuario.className = 'campos__preencher-usuario-senha';

const divLabelInputUsuario = document.createElement('div');
divLabelInputUsuario.className = 'label-input';

const inputNome = document.createElement('input');
inputNome.className = 'label-input__input';
inputNome.setAttribute('autocapitalize', 'off');
inputNome.setAttribute('maxlength', 75);
inputNome.setAttribute('name', 'username');
inputNome.setAttribute('placeholder', ' ');
inputNome.required = true;

const labelUsuario = document.createElement('label');
labelUsuario.className = 'label-input__label';
labelUsuario.textContent = 'Telefone, nome de usuário ou email';

const divLabelDetalheUsuario = document.createElement('div');
divLabelDetalheUsuario.className = 'label-input-detalhe';


/*------------------------------*\
    LOGIN CAMPOS USUARIO SENHA
\*------------------------------*/

const divPreencherSenha = document.createElement('div');
divPreencherSenha.className = 'campos__preencher-usuario-senha';

const divLabelInputSenha = document.createElement('div');
divLabelInputSenha.className = 'label-input';

const inputSenha = document.createElement('input');
inputSenha.className = 'label-input__input';
inputSenha.setAttribute('autocapitalize', 'off');
inputSenha.setAttribute('maxlength', 75);
inputSenha.setAttribute('name', 'password');
inputSenha.setAttribute('placeholder', ' ');
inputSenha.setAttribute('type', 'password');
inputSenha.required = true;


const labelSenha = document.createElement('label');
labelSenha.className = 'label-input__label';
labelSenha.textContent = 'Senha';

const divLabelDetalheSenha = document.createElement('div');
divLabelDetalheSenha.className = 'label-input-detalhe';

/*------------------------------*\
    LOGIN CAMPOS BOTAO
\*------------------------------*/

const divCamposBotao = document.createElement('div');
divCamposBotao.className = 'campos__botao';
divCamposBotao.setAttribute('type','submit');

const btnConfig = document.createElement('button');
btnConfig.className = 'campos__botao-config';
btnConfig.textContent = 'Entrar';


/*------------------------------*\
    LINHA OU LINHA
\*------------------------------*/

const divAlternativa = document.createElement('div');
divAlternativa.className = 'alternativa';

const divAlternativaLinhaUm = document.createElement('div');
divAlternativaLinhaUm.className = 'alternativa__linha';

const divAlternativaOu = document.createElement('div');
divAlternativaOu.className = 'alternativa__ou';
divAlternativaOu.textContent = 'OU';

const divAlternativaLinhaDois = document.createElement('div');
divAlternativaLinhaDois.className = 'alternativa__linha';

/*------------------------------*\
    FACEBOOK
\*------------------------------*/

const divFacebook = document.createElement('div');
divFacebook.className = 'facebook';

const btnFacebook = document.createElement('button');
btnFacebook.className = 'facebook__botao';
btnFacebook.setAttribute('type','button');

const faceIcone = document.createElement('span');
faceIcone.className = 'facebook__icone';

const faceIconeConfig = document.createElement('i');
faceIconeConfig.className = 'fab fa-facebook-square  facebook__icone-icone';

const faceEntrar = document.createElement('span');
faceEntrar.className = 'facebook__entrar';
faceEntrar.textContent = 'Entrar com o facebook';

const linkReset = document.createElement('a');
linkReset.className = 'reset-senha';
linkReset.textContent = 'Esqueceu a senha?';

/*------------------------------*\
    INCLUSÃO EM BODY
\*------------------------------*/
faceIcone.appendChild(faceIconeConfig);
btnFacebook.append(faceIcone, faceEntrar);
divFacebook.appendChild(btnFacebook);
divAlternativa.append(divAlternativaLinhaUm, divAlternativaOu, divAlternativaLinhaDois);
divCamposBotao.appendChild(btnConfig);
divLabelInputSenha.append(inputSenha, labelSenha, divLabelDetalheSenha);
divLabelInputUsuario.append(inputNome, labelUsuario, divLabelDetalheUsuario);
divPreencherSenha.appendChild(divLabelInputSenha);
divPreencherUsuario.appendChild(divLabelInputUsuario);
divCamposPreencher.append(divPreencherUsuario, divPreencherSenha, divCamposBotao, divAlternativa, divFacebook, linkReset);
form.appendChild(divCamposPreencher);
divLoginCampos.append(form);
divLoginLogo.appendChild(imgInsta);
divLoginBorda.append(divLoginLogo, divLoginCampos);
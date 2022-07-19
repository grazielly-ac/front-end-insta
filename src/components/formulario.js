import '../scss/_formulario.scss';
import { divCadastroLoginContainer} from './formulario-items/cadastrar';
import { divDownloadSistemaOp, downloadParagrafo } from './formulario-items/download';
import { divLoginBorda } from './formulario-items/login';


export const divFormulario = document.createElement('div');
divFormulario.className = 'formulario';

const divLogin = document.createElement('div');
divLogin.className = 'login';

const divCadastro = document.createElement('div');
divCadastro.className = 'cadastro';

const divDownload = document.createElement('div');
divDownload.className = 'download';

divDownload.append(downloadParagrafo, divDownloadSistemaOp);
divCadastro.appendChild(divCadastroLoginContainer);
divLogin.appendChild(divLoginBorda);
divFormulario.append(divLogin, divCadastro, divDownload);
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {library, dom} from '@fortawesome/fontawesome-svg-core';
 
library.add(faChevronUp);
dom.watch();

export const divFooterMenu = document.createElement('div');
divFooterMenu.className = 'footer-menu';


/*MENU CIMA INICIO*/
const divFooterMenuCima = document.createElement('div');
divFooterMenuCima.className = 'footer-menu__cima';

const divFooterMenuCimaConteudo = document.createElement('div');
divFooterMenuCimaConteudo.className = 'footer-menu__cima-conteudo';

/*CRIAR POSTERIORMENTE ARQUIVO JSON*/
const menuCima = [
    {div: 'divMeta', link: 'linkMeta', texto: 'Meta'},
    {div: 'divSobre', link: 'linkSobre', texto: 'Sobre'},
    {div: 'divBlog', link: 'linkBlog', texto: 'Blog'},
    {div: 'divCarreiras', link: 'linkCarreiras', texto: 'Carreiras'},
    {div: 'divAjuda', link: 'linkAjuda', texto: 'Ajuda'},
    {div: 'divAPI', link: 'linkAPI', texto: 'API'},
    {div: 'divPrivacidade', link: 'linkPrivacidade', texto: 'Privacidade'},
    {div: 'divTermos', link: 'linkTermos', texto: 'Principais Contas'},
    {div: 'divHashtags', link: 'linkHashtags', texto: 'Hashtags'},
    {div: 'divLocalizacoes', link: 'linkLocalizacoes', texto: 'Localizações'},
    {div: 'divInstagramLite', link: 'linkInstagramLite', texto: 'Instagram Lite'},
    {div: 'divCarregamentoContato', link: 'linkCarregamentoContato', texto: 'Carregamento de contatos e não usuários'},
];
/*CRIAR POSTERIORMENTE ARQUIVO JSON*/

menuCima.forEach((valor) => {

    valor.div = document.createElement('div');
    valor.div.className = 'footer-menu__cima-item';

    valor.link = document.createElement('a');
    valor.link.className = 'footer-menu__cima-link';
    valor.link.href = '#';
    valor.link.target = '_blank';
    valor.link.textContent = valor.texto;
       
    
    valor.div.appendChild(valor.link);
    divFooterMenuCimaConteudo.appendChild(valor.div);
});



const divFooterMenuCimaConteudoUm = document.createElement('div');
divFooterMenuCimaConteudoUm.className = 'footer-menu__cima-conteudo';


/*CRIAR POSTERIORMENTE ARQUIVO JSON*/
const menuCimaUm = [
    {div: 'divMeta', link: 'linkMeta', texto: 'Dança'},
    {div: 'divSobre', link: 'linkSobre', texto: 'Comida e Bebida'},
    {div: 'divBlog', link: 'linkBlog', texto: 'Casa e Jardim'},
    {div: 'divCarreiras', link: 'linkCarreiras', texto: 'Música'},
    {div: 'divAjuda', link: 'linkAjuda', texto: 'Artes Visuais'}
    
];
/*CRIAR POSTERIORMENTE ARQUIVO JSON*/

menuCimaUm.forEach((valor) => {

    valor.div = document.createElement('div');
    valor.div.className = 'footer-menu__cima-item';

    valor.link = document.createElement('a');
    valor.link.className = 'footer-menu__cima-link';
    valor.link.href = '#';
    valor.link.target = '_blank';
    valor.link.textContent = valor.texto;
       
    
    valor.div.appendChild(valor.link);
    divFooterMenuCimaConteudoUm.appendChild(valor.div);
});

/*MENU CIMA FIM*/



/*MENU BAIXO INICIO*/

const divFooterMenuBaixo = document.createElement('div');
divFooterMenuBaixo.className = 'footer-menu__baixo';

const divFooterMenuBaixoIdioma = document.createElement('div');
divFooterMenuBaixoIdioma.className = 'footer-menu__baixo-idioma';

const spanIdioma = document.createElement('span');
spanIdioma.className = 'idioma';

const divIdiomaTexto = document.createElement('div');
divIdiomaTexto.className = 'idioma__texto';

const spanPortugues = document.createElement('span');
spanPortugues.textContent = 'Português (Brasil)';

const divTextoFlag = document.createElement('div');
divTextoFlag.className = 'idioma__texto-flag';

const spanTextoConfig = document.createElement('span');
spanTextoConfig.className = 'idioma__texto-config';

const iconAngleDown = document.createElement('i');
iconAngleDown.className = 'fas fa-chevron-up idioma__icon';

const selectIdioma = document.createElement('select');
selectIdioma.className = 'idioma__opcoes';
selectIdioma.setAttribute('aria-label','Trocar idioma de exibição');

let options = [
    {option: 'optionFr', sigla: 'fr', pais: 'Français'},
    {option: 'optionEn', sigla: 'en', pais: 'English'},
    {option: 'optionEs', sigla: 'es', pais: 'Español (España)'},
    {option: 'optionIt', sigla: 'it', pais: 'Italiano'},
    {option: 'optionNl', sigla: 'nl', pais: 'Nederlands'},
    {option: 'optionPl', sigla: 'pl', pais: 'Polski'},
    {option: 'optionPt', sigla: 'pt', pais: 'Português (Portugal)'},
    {option: 'optionFrCa', sigla: 'fr-ca', pais: 'Français (Canada)'},
];

options.forEach((valor) => {
    valor.option = document.createElement('option');
    valor.option.textContent = valor.pais;
    valor.option.setAttribute('value', valor.sigla);
    selectIdioma.append(valor.option);
});


const divCopyright = document.createElement('div');
divCopyright.className = 'footer-menu__baixo-copyright';
divCopyright.textContent = '2022 Instagram from Meta';

/*MENU BAIXO FIM*/


/*INCLUSÕES*/

spanTextoConfig.appendChild(iconAngleDown);
divTextoFlag.append(spanTextoConfig);
divIdiomaTexto.append(spanPortugues, divTextoFlag);
spanIdioma.append(divIdiomaTexto,selectIdioma);
divFooterMenuBaixoIdioma.appendChild(spanIdioma);
divFooterMenuBaixo.append(divFooterMenuBaixoIdioma, divCopyright);
divFooterMenuCima.append(divFooterMenuCimaConteudo, divFooterMenuCimaConteudoUm);
divFooterMenu.append(divFooterMenuCima, divFooterMenuBaixo);
import '../scss/styles.scss';
import {divCelular, Image} from '../components/celular';
import { divFormulario } from '../components/formulario';
import { divFooterMenu } from '../components/footer';


/*SECTION CELULAR E FORMULARIO*/ 
const main = document.createElement('main');
main.className = 'principal';
const article = document.createElement('article');
article.className = 'instagram';

article.append(divCelular, divFormulario);
main.appendChild(article);


/*FIM SECTION CELULAR E FORMULARIO*/ 

/*INICIO FOOTER*/ 
const footer = document.createElement('footer');
footer.className = 'footer';

footer.appendChild(divFooterMenu);

document.body.append(main,footer);
const showImages = new Image();
showImages.slideDisplay();

/*FIM FOOTER*/ 

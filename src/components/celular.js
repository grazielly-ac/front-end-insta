import '../scss/styles.scss';


import slideUm from '../assets/img/slide/batepapo.png';
import slideDois from '../assets/img/slide/mulherecachorro.png';
import slideTres from '../assets/img/slide/perfil.png';
import slideQuatro from '../assets/img/slide/reels.png';

export const divCelular = document.createElement('div');
divCelular.className = 'celular';

const divSlideshow = document.createElement('div');
divSlideshow.id = 'slideshow';

const divCelularLista = document.createElement('div');
divCelularLista.className = 'celular__lista';

export const arrayImages = [slideUm,slideDois,slideTres,slideQuatro];

export class Image{
    insertImage(arrayPictures){
        
        arrayPictures.forEach(element => {
            const img = document.createElement('img');
            img.src = element;
            img.className = 'slide slide-config';
            
            divCelularLista.appendChild(img);
            
        });      
        
    }  

    slideDisplay(){
        const slides = document.querySelectorAll('.slide');
    
        let time = 3000, index = 0;
        
        for(let i = 1; i < slides.length; i++){            
            slides[0].classList.add('active');
            
            setInterval(() => {
            slides[index].classList.remove('active');
            index++;
        
            if(index === slides.length) index = 0;
        
            slides[index].classList.add('active');
        }, time);
        }
    
    }
   
    
}

const useImage = new Image();
useImage.insertImage(arrayImages);


divSlideshow.appendChild(divCelularLista);
divCelular.appendChild(divSlideshow);


















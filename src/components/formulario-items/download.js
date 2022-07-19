import appStoreImg from '../../assets/img/apple.png';
import googlePlayImg from '../../assets/img/android.png';


export const downloadParagrafo = document.createElement('p');
downloadParagrafo.className = 'download__paragrafo';
downloadParagrafo.textContent = 'Obtenha o aplicativo.';

export const divDownloadSistemaOp = document.createElement('div');
divDownloadSistemaOp.className = 'download__sistemaop';

const linkAppStore = document.createElement('a');
linkAppStore.className = 'download__sistemaop-app';
linkAppStore.href = '#';
linkAppStore.setAttribute('aria-label','Baixar na App Store');

const imgAppStore = document.createElement('img');
imgAppStore.src = appStoreImg;
imgAppStore.className = 'download__sistemaop-img';

const linkGooglePlay = document.createElement('a');
linkGooglePlay.className  = 'download__sistemaop-app';
linkGooglePlay.href = '#';
linkGooglePlay.setAttribute('aria-label','Baixar no Google Play');

const imgGooglePlay = document.createElement('img');
imgGooglePlay.src = googlePlayImg;
imgGooglePlay.className = 'download__sistemaop-img';

linkGooglePlay.append(imgGooglePlay);
linkAppStore.append(imgAppStore);
divDownloadSistemaOp.append(linkAppStore, linkGooglePlay);
import React, {useState} from 'react';
import MensajeIngles from './../language/en.json';
import MensajeEspañol from './../language/es.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    let localePorDefecto = 'en-US';
	let mensajesPorDefecto = MensajeIngles;
	
	// Safely access localStorage (may not be available during SSR)
	let lang = null;
	try {
		lang = localStorage.getItem('lang');
	} catch (e) {
		// localStorage not available
	}

	if(lang){
		localePorDefecto = lang

		if(lang === 'es-ES'){
			mensajesPorDefecto = MensajeEspañol;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = MensajeIngles;
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = MensajeIngles;
		}
	}

    const [mensaje, setMensaje] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    const selectLanguage = (language) =>{
        switch (language) {
            case 'es-ES':
                setMensaje(MensajeEspañol);
                setLocale('es-ES');
                localStorage.setItem('lang', 'es-ES');
                break;
            case 'en-US':
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};
import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'+25779343813'} 
			accountName={'EB-COMPANY'}
			avatar={'iconwhatsapp.png'}
			statusMessage={'EB-COMPANY en ligne'}
			chatMessage={'Bonjour, si vous voulez une de nos applications pour recevoir un mot de passe ou une autre question contactez-nous  merci!'}
			notification={true}
			notificationSound={true}
		/>
	)
}
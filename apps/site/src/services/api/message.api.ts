import { betterFetch } from "@better-fetch/fetch";

const messageEndpoint = `${import.meta.env.PUBLIC_SERVER_URL}/services/send-message`;

export const messageApi = {
    sendMessage: (name: string, contactInfo: string, message: string, isPhone: boolean) => {
        const fullMessage = `From: ${name} (<a href="${isPhone ? 'tel:' : 'mailto:'}${contactInfo}">${contactInfo}</a>):<br/> ${message}`
        return betterFetch(messageEndpoint, {
            method: 'POST',
            body: { message: fullMessage },
            headers: {
                'x-api-key': import.meta.env.PUBLIC_API_KEY
            }
        })
    }
}
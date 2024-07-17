import { addKeyword, createBot, createFlow, createProvider, MemoryDB } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";

const flowBienvenida = addKeyword('hola').addAnswer('Buenas!! Bien venido hahaha')

const main = async () => {

    const provider = createProvider(BaileysProvider)

    provider.initHttpServer(3002)

    provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
        await bot.sendMessage('573015892535', 'mensaje!', {})
        res.end('este es mi mensaje kkkkkk')
    }))

    await createBot({
        flow: createFlow([]),
        database: new MemoryDB(),
        provider
    })
}

main();
const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


//-------------------------------------------------------------------
const submenu = new Composer()

submenu.action('10dias', Stage.enter('cursoSoftskills'))

submenu.action('curso', async ctx => {
  await ctx.reply(`-=- O que você vai aprender? -=-\n\naqui você aprenderá sobre softskills`)
})

submenu.action('sobre', async ctx => {
  await ctx.reply(`Acesse o site do Senac PR!”\n\nhttps://www.pr.senac.br/principal/`)
})

submenu.action('creditos', async ctx => {
  ctx.reply('em breve...')
  await ctx.reply(`Para voltar ao menu clique aqui → /start`)
  ctx.scene.leave()
})
submenu.action('sair', async ctx => {
  await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
  await ctx.reply(`Para voltar ao menu clique aqui → /start`)
  ctx.scene.leave()
})


submenu.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply(`Ecolha uma opção abaixo:`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Curso Soft Skills', '10dias'),
        Markup.callbackButton('Sobre o Curso', 'curso'),
        Markup.callbackButton('Sobre o Senac', 'sobre'),
        Markup.callbackButton('Créditos', 'creditos'),
        Markup.callbackButton('❎ Sair', 'sair'),
      ], {
        columns: 2
      })))
})

module.exports = submenu
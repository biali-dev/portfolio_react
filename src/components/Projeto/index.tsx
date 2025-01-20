import React from 'react'
import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundaria">Lista de Tarefas feita com VueJS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto

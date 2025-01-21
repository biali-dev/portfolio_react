import React from 'react'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Ricardo Biali</Titulo>
      <Paragrafo tipo="secundaria" fontSize={16}>
        biali-dev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Frontend
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

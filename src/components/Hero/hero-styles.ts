import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    content: '';
    opacity: 0.1;
  }

  div {
    position: relative;
    color: ${(props) => props.theme.CorTextoHero};
    font-family: Gloock, serif;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    div {
      font-size: 32px;
    }
  }
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`

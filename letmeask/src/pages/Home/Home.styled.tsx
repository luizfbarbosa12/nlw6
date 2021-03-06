import styled from 'styled-components'
import {theme} from '../../styles/Theme/theme'

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    background: #835afd;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 8rem;

    img {
      max-width: 32rem;
    }

    strong {
      font: 700 3.6rem "Poppins", sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 1.6rem;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;
    padding: 0 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.darkBackground};
    color: ${theme.darkFont}
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    align-items: stretch;
    text-align: center;
    

    > img {
      align-self: center;
    }

    h2 {
      font-size: 2.4rem;
      margin: 6.4rem 0 2.4rem;
      font-family: "Poppins", sans-serif;
    }
    form {
      input {
        height: 5rem;
        border-radius: .8rem;
        padding: 0 1.6rem;
        background: #fff;
        border: .1rem solid #a8a8b3;
      }

      button {
        margin-top: 1.6rem;
      }

      button,
      input {
        width: 100%;
      }
    }
    p {
      font-size: 1.4rem;
      color: #737380;
      margin-top: 1.6rem;

      a {
        color: #e559f9;
      }
    }
  }

  .create-room {
    margin-top: 6.4rem;
    height: 5rem;
    border-radius: .8rem;
    font-weight: 500;
    background: #ea4335;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    transition: filter 0.2s ease;
    img {
      margin-right: .8rem;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
  .separator {
    font-size: 1.4rem;
    color: #fff;
    margin: 3.2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: .1rem;
      background: #fff;
      margin-right: 1.6rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: .1rem;
      background: #fff;
      margin-left: 1.6rem;
    }
  }
`
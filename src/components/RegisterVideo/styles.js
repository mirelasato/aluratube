import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: white;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  }
  form {
    position: fixed;
    z-index: 100;
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    padding: 5%;


      & > div {
        height: fit-content;
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      position: relative;
      padding: 16px;
      padding-top: 40px;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;

    }

  }
  input {
    width: 100%;

    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  img {
    margin-top:36px;
    width: 100%;
    margin-bottom:36px;


  }
`;

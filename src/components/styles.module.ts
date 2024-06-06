import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: linear-gradient( #87ceeb, #ffffff);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    max-width: 400px;
    width: 100%;
  }

  .searchArea {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: 1px solid grey;
    padding: 0.5rem;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
    transition: all 0.3s ease;
  }

  .searchArea > input:focus {
    border-color: #007bff;
  }

  .searchCircle {
    border: 1px solid grey;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    > .searchIcon {
      font-size: 20px;
      color: grey;
    }
  }

  .searchCircle:hover {
    border-color: #007bff;
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    text-align: center;

    > .icon {
      font-size: 8rem;
    }

    > h1 {
      font-size: 3rem;
      font-family: "Bebas Neue", sans-serif;
      margin: 0;
    }

    > span {
      font-family: "Inter", sans-serif;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
    margin-top: 20px;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 12px;
    padding: 1rem;
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }

    p {
      font-size: 1.5rem;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .home {
    font-size: 2.2rem;
    color: black;
    transition: color 0.3s ease;
    cursor: pointer; 
}

.home:hover {
    color: blue; 
}

`;

import styled from "styled-components";

export const FormBox = styled.div`
    border: 1px rgba(255, 255, 255, 0.5) solid;
    border-radius: 1.5rem;
    padding: 13px 12px;
    display: flex;
    flex-direction: column;

    input {
        background: rgba(255, 255, 255, 0.1);
        color: var(--white);
        padding: 15px 25px;
        border-radius: 1.5rem;
        border: 1px rgba(255, 255, 255, 0.5) solid;
        width: 300px;
        margin-bottom: 40px;

        &:first-child {
            margin-top: 20px;
        }

        &::placeholder {
            color: var(--white);
            font-weight: 500;
        }
    }
`;

export const LoginButton = styled.button`
    width: 330px;
    padding: 15px 0;
    margin-top: 25px;
    color: var(--white);
    border-radius: 1rem;
    border: 0;
    background: linear-gradient(
        92.47deg,
        #7388ff 6.26%,
        #8714ce 52.1%,
        #b102cd 94.21%
    );

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }
`;

export const RegisterButton = styled.button`
    width: 330px;
    padding: 15px 0;
    color: var(--white);
    border-radius: 1rem;
    border: 1px #fff solid;
    background: transparent;

    &:hover {
        background: rgba(54, 55, 69, 0.8);
    }
`;

export const ContentForm = styled.section`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h4 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 20px;
    }

    a {
        margin-top: 25px;
    }

    img {
        margin-top: 25px;
    }

    @media (max-width: 1050px) and (min-height: 1000px) {
        width: 100%;
        justify-content: flex-start;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    @media (max-width: 900px) {
        width: 100%;
        justify-content: flex-start;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    @media (max-width: 300px) {
        form {
            width: 80%;
        }
        ${FormBox} {
            input {
                width: 200px;
            }
        }

        ${LoginButton} {
            width: 100%;
        }

        ${RegisterButton} {
            width: 230px;
        }
    }
`;

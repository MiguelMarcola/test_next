import styled from "styled-components";

export const ReturnButton = styled.div`
    display: inline-block;
`;

export const RegisterButton = styled.button`
    width: 330px;
    padding: 15px 0;
    margin: 25px 0 10px;
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

export const FormBox = styled.div`
    border: 1px rgba(255, 255, 255, 0.5) solid;
    border-radius: 1.5rem;
    padding: 13px 12px;

    input {
        background: rgba(255, 255, 255, 0.1);
        color: var(--white);
        padding: 15px 25px;
        border-radius: 1.5rem;
        border: 1px rgba(255, 255, 255, 0.5) solid;
        width: 300px;
        margin-bottom: 20px;

        display: flex;
        flex-direction: column;

        &::placeholder {
            color: var(--white);
            font-weight: 500;
        }
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

    img {
        margin-top: 25px;
    }

    a {
        font-size: 1.2rem;
    }

    svg {
        vertical-align: bottom;
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: flex-start;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

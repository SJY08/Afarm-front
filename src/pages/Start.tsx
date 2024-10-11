import styled from "styled-components"
import { Colors } from "../design/colors"
import Logo from "../assets/Logo"

function Start() {
    return (
        <>
            <Background>
                <Container>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>

                    <ToStart>아니</ToStart>
                </Container>
            </Background>
        </>
    )
}

export default Start

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    border-bottom: 2px;
    border-top: 2px;
    border-color: ${Colors.Green500};
    border-style: solid;
`

const ToStart = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    background-color: ${Colors.Green500};
    color: ${Colors.White};
`

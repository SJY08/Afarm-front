import styled from "styled-components"
import { useState } from "react"
import { Colors } from "../design/colors"
import { IoMail } from "react-icons/io5"
import { MdLock } from "react-icons/md"
import { IoMdEyeOff } from "react-icons/io"
import { IoEye } from "react-icons/io5"

interface Props {
    width?: number
    label?: string
    placeholder?: string
    type?: string
}

function Input({ width, label, placeholder, type = "text" }: Props) {
    const [show, setShow] = useState<Boolean>(false)

    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer width={width}>
                <Icon>
                    {type == "password" ? (
                        <MdLock />
                    ) : type == "email" ? (
                        <IoMail />
                    ) : undefined}
                </Icon>

                <InputWrapper
                    placeholder={placeholder}
                    type={
                        type == "password" ? (show ? "text" : "password") : type
                    }
                />
            </InputContainer>
        </Container>
    )
}

export default Input

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Black};
`

const InputContainer = styled.div`
    width: ${({ width }) => `${width}px`};
    height: 50px;

    background-color: ${Colors.White};
    border: 1px solid ${Colors.Gray500};
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.div`
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: ${Colors.Gray500};
`

const InputWrapper = styled.div`
    height: 50px;
    width: 80%;
    padding: 0 10px;
    color: ${Colors.Black};
    cursor: pointer;

    &::placeholder {
        color: ${Colors.Gray100};
    }
`
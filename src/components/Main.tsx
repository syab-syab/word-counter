import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(4, 202, 255, 1), rgba(144, 245, 154, 1));
`

const Wrapper = styled.main`
  ${backgroundStyle}
  padding: 5rem 40rem;
  height: 90vh;
  @media (max-width: 1100px) {
    padding: 5rem 30rem;
  }
  @media (max-width: 1000px) {
    padding: 5rem 25rem;
  }
  @media (max-width: 900px) {
    padding: 5rem 20rem;
  }
  @media (max-width: 800px) {
    padding: 5rem 15rem;
  }
  @media (max-width: 700px) {
    padding: 5rem 10rem;
  }
  @media (max-width: 600px) {
    padding: 5rem;
  }
`

const CountNum = styled.h1`
  font-size: 3rem;
`

const BtnWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const Btn = styled.div`
  font-size: 2rem;
  border: 0.1rem solid black;
  background: #5CE1E6;
  flex-grow: 1;
  padding: 1rem 0;
  font-weight: bold;
`

const SAALink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 2rem;
`

const TextCountArea = styled.textarea`
  width: 100%;
  height: 50%;
  border: 0.3rem solid black;
  border-radius: 1rem;
  resize: none;
`

const Main = () => {
  const [word, setWord] = useState<string>("")

  const toggleWord = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setWord(e.target.value)
  }

  const pasteWord = (): void => {
    navigator.clipboard.readText()
    .then(text => {
      setWord(text)
    })
    .catch(err => {
      alert('Error');
    })
  }

  const deleteWord = (): void => {
    setWord("")
  }

  return (
    <Wrapper>
      <CountNum>
      {word.length}字
      </CountNum>
      <BtnWrapper>
        <Btn>
          <SAALink href='https://homemade-apps.vercel.app/' target='_blank'>リンク</SAALink>
        </Btn>
        <Btn onClick={pasteWord}>ペースト</Btn>
        <Btn onClick={deleteWord}>クリア</Btn>      
      </BtnWrapper>
      <TextCountArea onChange={(e) => toggleWord(e)} value={word} />
    </Wrapper>
  )
}

export default Main
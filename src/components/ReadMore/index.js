// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Paragraph,
  Image,
  ReactHooksDescription,
  Button,
} from './styledComponents'

const ReadMore = reactHooksDescription => {
  const [readLess, setReadLess] = useState(false)
  const text = reactHooksDescription
  const description = text.reactHooksDescription
  const des = description.slice(0, 170)
  const buttonText = readLess ? 'Read Less' : 'Read More'

  const onChangeButton = () => setReadLess(prevState => !prevState)
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReactHooksDescription>
        {readLess ? description : des}
      </ReactHooksDescription>
      <Button type="button" onClick={onChangeButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default ReadMore

import { Container, Icon, Name } from './SocialLoginButtons-styles'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import Cookies from 'js-cookie'
import GoogleIcon from 'public/assets/images/google.svg'
import { auth } from 'lib/clientApp'
import { useRouter } from 'next/router'

export const SocialLoginButtons: React.FC = () => {
  const provider = new GoogleAuthProvider()
  const router = useRouter()

  const handleLoginWithGoogle = async () => {
    const { user }: any = await signInWithPopup(auth, provider)
      const token = user.accessToken
      Cookies.set('token', token ? token : '')

      router.push('/')
    }


  return (
    <>
      <Container onClick={() => handleLoginWithGoogle()}>
        <Icon src={GoogleIcon} width="28" height="28" />
        <Name>Google</Name>
      </Container>
    </>
  )
}

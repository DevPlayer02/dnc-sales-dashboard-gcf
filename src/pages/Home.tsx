import { AvatarsList, Header, CardComponent } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2500.99),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(1993.78),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> Card </CardComponent>
        <CardComponent>
          <AvatarsList ListData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home

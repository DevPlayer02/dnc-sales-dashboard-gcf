import {
  AvatarsList,
  Header,
  CardComponent,
  CustomChart,
  CustomTable,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span> Nome 1 </span>,
        <span> nome1@email.com </span>,
        <button> ACTION </button>,
      ],
      [
        <span> Nome 2 </span>,
        <span> nome2@email.com </span>,
        <button> ACTION </button>,
      ],
      [
        <span> Nome 3 </span>,
        <span> nome3@email.com </span>,
        <button> ACTION </button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> Card </CardComponent>
        <CardComponent>
          <AvatarsList ListData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2564.54, 948.3, 654.89, 2364.64, 1324.44]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home

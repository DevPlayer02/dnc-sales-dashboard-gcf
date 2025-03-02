import styled from 'styled-components'

const ResgistrationArea = styled.div`
  background: #333;
`

const ResgistrationImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Resgistration() {
  return (
    <>
      <ResgistrationArea>Resgistration</ResgistrationArea>
      <ResgistrationImage />
    </>
  )
}

export default Resgistration

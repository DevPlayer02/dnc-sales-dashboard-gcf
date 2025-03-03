import styled from 'styled-components'
import { typographiesProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<typographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => pxToRem(props.weight || 600)};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineHeight || 36)};
`

export const StyledH2 = styled.h2<typographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.weight || 600)};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledP = styled.p<typographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledSpan = styled.span<typographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledUl = styled.ul<typographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.weight || 400)};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxToRem(15)};
  }
`

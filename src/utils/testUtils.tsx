import { render as tlRender } from '@testing-library/react'
import { ReactElement } from 'react'
import { MutableSnapshot, RecoilRoot } from 'recoil'

export function render(
  elements: ReactElement,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void
) {
  return tlRender(
    <RecoilRoot initializeState={initializeState}>{elements}</RecoilRoot>
  )
}

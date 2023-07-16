import React from 'react'
import {SessionProvider} from "next-auth/react"

type Props = {
    children: React.ReactNode
};

const Provider: React.FC<Props>  = ({children, ...props}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Provider
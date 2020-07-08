import React from 'react'
import Head from 'next/head'
import { useFoods } from '../graphql/api'

const Index = (props) => {
  const { data, errorMessage } = useFoods();
  const [entries, setEntries] = React.useState([])

  // React.useEffect(() => {
  //   if (!entries.length) {
  //     setEntries(data)
  //   }
  // }, [data, entries.length])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <div>
        <p>Hello World</p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          font-family: sans-serif, sans;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Index

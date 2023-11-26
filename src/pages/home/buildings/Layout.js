import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Discover a world of architecture and real estate with our diverse collection of buildings. Whether you're looking for a cozy home, a modern apartment, or a spacious commercial property, our listings cater to all. Explore the beauty of construction and find your dream space today."
        />
        <title>Buildings</title>
      </Head>
      {children}
    </>
  )
}

export default Layout

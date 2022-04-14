function Index() {
  return null
}

export default Index

export const getStaticProps = () => {
  return {
    redirect: {
      destination: '/main',
    },
  }
}

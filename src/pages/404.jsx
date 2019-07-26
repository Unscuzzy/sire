import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Pas de résultat...</h1>
    <p>Veuillez-nous excuser, il semblerait que la page que vous cherchez n'existe pas.</p>
  </Layout>
)

export default NotFoundPage

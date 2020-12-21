import React from 'react'

import { Button, Layout } from '../components'

const NotFoundPage = () => (
  <Layout>
    <div className="container" style={{ paddingTop: '8em' }}>
      <div style={{ margin: '3em 0' }}>
        <h1>
          404
          <span role="img" aria-label="404 face">
            🙄
          </span>
        </h1>
        <p style={{ fontFamily: 'monospace', fontSize: '1.6em' }}>*tumbleweed*</p>
        <p>
          if you think there's supposed to be something here, please contact us via{' '}
          <a href="https://twitter.com/covhack">Twitter</a> or <a href="mailto:hello@covhack.org">email</a>
        </p>
        <p>
          <Button primary to="/">
            Home
          </Button>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

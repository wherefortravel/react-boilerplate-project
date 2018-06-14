import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: Helvetica, verdana, sans-serif;
`

const Header = styled.header``

const Title = styled.h1`
  text-align: center;
`

const GetStarted = styled.h3`
  padding: 10px;
  margin: 5px;
  color: #333;
  text-align: center;
`

const App = ({ ...props }) => (
  <Wrapper>
    <Header>
      <Title>Welcome</Title>
    </Header>

    <Wrapper>
      <GetStarted>To get started, take a look at src/index.js</GetStarted>
    </Wrapper>
  </Wrapper>
)

App.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react'
import PropTypes from 'prop-types'
import { UsesPageTemplate } from '../../templates/uses-page'

const UsesPagePreview = ({ entry, widgetFor }) => (
  <UsesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

UsesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default UsesPagePreview

import React from 'react'
import PropTypes from 'prop-types'

import ActionButton from 'react-native-action-button'
import Icon from '../Icon'

import styles from './styles'

const ActionButtonCustom = ({ actions }) => (
  <ActionButton buttonColor="rgba(231,76,60,1)">

    { actions.map(i => {
        let action = () => false
        
        if (i.action) {
          action = i.action
        }

        return (
          <ActionButton.Item 
            key={i.title}
            buttonColor={i.color} 
            textContainerStyle={{ color: 'pink' }}
            title={i.title}
            onPress={action}
          >
            <Icon 
              color={styles.iconColor}
              icon={i.icon} 
              style={styles.actionButtonIcon} 
              onClick={action}
            />
          </ActionButton.Item>    
        )
      })
    }

  </ActionButton>
)

ActionButtonCustom.propTypes = {
  actions: PropTypes.array
}

ActionButtonCustom.defaultProps = {
  actions: []
}

export default ActionButtonCustom
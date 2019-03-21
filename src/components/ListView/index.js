import React from 'react'
import PropTypes from 'prop-types'
import { 
  FlatList
} from 'react-native'

import {
  Evento,
  ListAction
} from './contents'

import ListTypes from './constants'

const ListComponent = ({ type, items, onItemClick, onDeleteClick }) => (
  <FlatList 
    data={items}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => 
      renderItem({ type, item, onItemClick, onDeleteClick })
    }
  />
)

const renderItem = ({ type, item, onItemClick, onDeleteClick }) => {
  switch (type) {
    case ListTypes.EVENTO: 
      return (
        <Evento
          {...item} 
          onItemClick={onItemClick} 
        />
      )
    case ListTypes.LIST_ACTION: 
      return (
        <ListAction
          {...item} 
          onDeleteClick={onDeleteClick} 
        />
      )
    default: 
      return null
  }
}

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
  onItemClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

ListComponent.defaultProps = {
  items: [],
  type: ListTypes.ARTIGO,
  onItemClick: () => false,
  onDeleteClick: id => false
}

const ListView = {
  View: ListComponent,
  Type: ListTypes
}

export default ListView

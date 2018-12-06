import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='all tasks' active={activeItem === 'all tasks'} onClick={this.handleItemClick} />
          {/* <Menu.Item
            name='Pending'
            active={activeItem === 'Pending'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='In Progress'
            active={activeItem === 'In Progress'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Completed'
            active={activeItem === 'Completed'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={this.props.logout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
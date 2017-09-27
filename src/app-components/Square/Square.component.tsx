import * as React from 'react'

import './Square.css'

type Props = {
  color: string,
  keyValue: string,
  removeId: string,
  onRemove: (index: string) => void,
}

export class Square extends React.Component<Props, object> {

  render() {
    const { color, keyValue, removeId } = this.props
    return (
      <div className="Square" style={{'backgroundColor': color}}>
        <p onClick={() => this.handleClick(removeId)}>X</p>
        <span>{keyValue}</span>
      </div>
    )
  }

  private handleClick(id: string) {
    const { onRemove } = this.props
    onRemove(id)
  }
}

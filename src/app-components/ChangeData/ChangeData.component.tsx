import * as React from 'react';

import './ChangeData.css'

type Props = {
  cubeNumber: number,
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export class ChangeData extends React.Component<Props, object> {
  render() {
    const { changeData, cubeNumber } = this.props
    return (
      <div className="ChangeData">
        <input type="number" onChange={changeData} value={cubeNumber}/>
      </div>
    )
  }
}

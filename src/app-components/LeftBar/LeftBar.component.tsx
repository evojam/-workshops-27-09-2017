import * as React from 'react';

import { ChangeData } from '../ChangeData'

import './LeftBar.css'

type Props = {
  cubeNumber: number,
  timeLogs: number[],
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export class LeftBar extends React.Component<Props, object> {
  render() {
    const { timeLogs, changeData, cubeNumber } = this.props
    return (
      <div className="LeftBar">
        <ChangeData changeData={changeData} cubeNumber={cubeNumber} />
        {timeLogs.map((time, index) =>
          <h3
            key={index}
            style={{
              fontSize: `calc(30px - ${index * 2}px)`,
              color: time < 17 ? 'green' : time >  42 ? 'red' : 'orange',
            }}
          >
            {/*{`${time} ms`}*/}
          </h3>)
        }
      </div>
    )
  }
}

import * as React from 'react'

import { Square } from '../Square'

import './Content.css'

import {
  CubeType,
  randId,
} from '../../utils'

type Props = {
  data: CubeType[],
  onRemove: (index: string) => void,
}

export class Content extends React.Component<Props, object> {

  constructor() {
    super()

    this.onRemove = this.onRemove.bind(this)
  }

  render() {
    const { data } = this.props

    return (
      <div className="Content">
        {data.map((cube) => {
          const index = randId()
          return (
            <Square
              color={cube.color}
              key={index}
              keyValue={index}
              removeId={cube.id}
              onRemove={this.onRemove}
            />
          )
        })}
      </div>
    )
  }

  private onRemove(index: string) {
    this.props.onRemove(index)
  }
}

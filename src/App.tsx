import * as React from 'react'

import { Content, Header, LeftBar } from './app-components'
import { INITIAL_CUBE_NUMBER } from './const'

import './App.css'

import { CubeType, generateData } from './utils'

interface State {
  timeLogs: number[],
  data: CubeType[],
  cubeNumber: number,
}

class App extends React.Component<object, State> {

  private timeLogs: number

  constructor() {
    super()
    this.state = {
      timeLogs: [],
      data: generateData(INITIAL_CUBE_NUMBER),
      cubeNumber: INITIAL_CUBE_NUMBER,
    }

    this.setNewTime = this.setNewTime.bind(this)
    this.setNewData = this.setNewData.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  render() {
    const { timeLogs, data, cubeNumber } = this.state
    return (
      <div className="App">
        <Header />
        <div style={{display: 'flex'}}>
          <LeftBar timeLogs={timeLogs} changeData={this.setNewData} cubeNumber={cubeNumber} />
          <Content onRemove={this.onRemove} data={data} />
        </div>
      </div>
    );
  }

  componentWillUpdate() {
    this.timeLogs = Date.now()
  }

  componentDidUpdate(prevProps: State, prevState: State) {
    this.refreshTimes(this.state.timeLogs === prevState.timeLogs)
  }

  private onRemove(id: string) {
    this.setState({
      data: this.state.data.filter(cube => cube.id !== id)
    })
  }

  private refreshTimes(hasTimeChanged: boolean) {
    if (hasTimeChanged) {
      this.setState({
        timeLogs: [Date.now() - this.timeLogs, ...this.state.timeLogs]
      })
    }
  }

  private setNewTime(time: number): void {
    this.setState({
      timeLogs: [...this.state.timeLogs, time]
    })
  }

  private setNewData(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      data: generateData(Number(event.target.value)),
      cubeNumber: Number(event.target.value),
    })
  }
}

export default App

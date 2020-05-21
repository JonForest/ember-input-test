import Component from '@glimmer/component'
import EmberArray from '@ember/array'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ExampleComponent extends Component {
  @tracked inputs = ['one', 'two']
  @tracked loading = false
  
  @action 
  async addItem() {
    this.loading = true
    const response = await window.fetch('https://random-word-api.herokuapp.com/word?number=1')
    const data = await response.json()
    this.inputs.push(data[0])
    this.inputs = this.inputs
    this.loading = false
  }

  @action removeItem() {
    const randomIndex = Math.floor(Math.random() * this.inputs.length)
    this.inputs.splice(randomIndex, 1)
    this.inputs = this.inputs
    console.log(this.inputs)
  }

}

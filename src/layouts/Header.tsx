import { Component, Vue } from 'vue-property-decorator'

import './Header.scss'

@Component({
  name: 'Header'
})
export default class Header extends Vue {
  public render() {
    return (
      <header>
      </header>
    )
  }
}
import { Component, Vue } from 'vue-property-decorator'

import Resume from './Resume'
import './index.scss'

@Component({
  name: 'Content'
})
export default class Content extends Vue {
  public render() {
    return (
      <div class="page">
        <Resume />
      </div>
    )
  }
}
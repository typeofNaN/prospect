import { Component, Vue } from 'vue-property-decorator'

import Content from '@/components'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

@Component({
  name: 'App'
})
export default class App extends Vue {
  public render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
import { Component, Vue } from 'vue-property-decorator'


@Component({
  name: 'Template1'
})
export default class Template1 extends Vue {
  public render() {
    return (
      <div class="template template1">
      </div>
    )
  }
}
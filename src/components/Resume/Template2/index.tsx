import { Component, Vue } from 'vue-property-decorator'


@Component({
  name: 'Template2'
})
export default class Template2 extends Vue {
  public render() {
    return (
      <div class="template template2">
      </div>
    )
  }
}
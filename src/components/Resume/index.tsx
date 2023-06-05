import { Component, Vue } from 'vue-property-decorator'

import { TemplateModule } from '@/store/modules/template'
import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'
import { ResumeModule } from '@/store/modules/resume'

@Component({
  name: 'Resume'
})
export default class Resume extends Vue {
  private get template() {
    return TemplateModule.template
  }

  private get resumeData() {
    return ResumeModule.resume
  }

  public render() {
    let Template: UNSET
    switch (this.template) {
      case 'template1':
        Template = <Template1 resumeData={this.resumeData} />
        break
      case 'template2':
        Template = <Template2 resumeData={this.resumeData} />
        break
      case 'template3':
        Template = <Template3 resumeData={this.resumeData} />
        break
      default:
        Template = <Template1 resumeData={this.resumeData} />
        break
    }

    return (
      <div class="resume">
        {Template}
      </div>
    )
  }
}
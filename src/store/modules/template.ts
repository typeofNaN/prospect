import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'

import { DefaultTemplate } from '@/config/appSetting'
import store from '@/store'

export interface ITemplateState {
  template: string
}

@Module({
  dynamic: true,
  store,
  name: 'template'
})
class Template extends VuexModule implements ITemplateState {
  public template = DefaultTemplate

  /**
   * @description 设置模板
   */
  @Mutation
  private SET_TEMPLATE(template: string) {
    this.template = template
  }

  /**
   * @description 设置模板
   */
  @Action
  public SetTemplate(template: string) {
    this.SET_TEMPLATE(template)
  }
}

export const TemplateModule = getModule(Template)

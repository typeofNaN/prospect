import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'

import { DefaultTheme } from '@/config/appSetting'
import store from '@/store'

export interface IThemeState {
  color: string
  tagColor: string
}

@Module({
  dynamic: true,
  store,
  name: 'theme'
})
class Theme extends VuexModule implements IThemeState {
  public color = DefaultTheme.color

  public tagColor = DefaultTheme.tagColor

  /**
   * @description 设置主题色
   */
  @Mutation
  private SET_COLOR(color: string) {
    this.color = color
  }

  /**
   * @description 设置标签色
   */
  @Mutation
  private SET_TAG_COLOR(color: string) {
    this.tagColor = color
  }

  /**
   * @description 设置主题色
   */
  @Action
  public SetColor(color: string) {
    this.SET_COLOR(color)
  }

  /**
   * @description 设置标签色
   */
  @Action
  public SetTagColor(color: string) {
    this.SET_TAG_COLOR(color)
  }
}

export const ThemeModule = getModule(Theme)

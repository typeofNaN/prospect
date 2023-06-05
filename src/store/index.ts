/**
 * @description vuex状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'

import { IResumeState } from './modules/resume'
import { ITemplateState } from './modules/template'
import { IThemeState } from './modules/theme'

Vue.use(Vuex)

export interface IRootState {
  resume: IResumeState
  templates: ITemplateState
  theme: IThemeState
}

export default new Vuex.Store<IRootState>({})

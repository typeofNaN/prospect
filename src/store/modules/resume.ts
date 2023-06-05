import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'

import store from '@/store'

export interface IResumeState {
  resume: any
}

@Module({
  dynamic: true,
  store,
  name: 'resume'
})
class Resume extends VuexModule implements IResumeState {
  public resume = {}
}

export const ResumeModule = getModule(Resume)

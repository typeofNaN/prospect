import { Component, Vue } from 'vue-property-decorator'

import './index.scss'
import { ResumeModule } from '@/store/modules/resume';

@Component({
  name: 'Template1'
})
export default class Template1 extends Vue {
  private get resumeData() {
    return ResumeModule.resume
  }
  public render() {
    return (
      <div class="template template1">
        <div class="basic-info">
          {
            !this.resumeData?.avatar?.hidden && (
              <el-avatar
                src={this.resumeData?.avatar?.src}
                class="avatar"
                shape={this.resumeData?.avatar?.shape}
              />
            )
          }
          <div class="profile">
            {
              this.resumeData?.profile?.name && (
                <div class="name">{this.resumeData?.profile.name}</div>
              )
            }
            <div class="profile-list">
            {
            this.resumeData?.profile?.mobile && (
              <div class="email">
                <svg-icon name="phone" />
                {this.resumeData?.profile.mobile}
              </div>
            )}
            {
            this.resumeData?.profile?.email && (
              <div class="email">
                <svg-icon name="email" />
                {this.resumeData?.profile.email}
              </div>
            )}
            {
            this.resumeData?.profile?.github && (
              <div class="github">
                <svg-icon name="github" />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.open(this.resumeData?.profile.github);
                  }}
                >
                  {this.resumeData?.profile.github}
                </span>
              </div>
            )}
            {
            this.resumeData?.profile?.zhihu && (
              <div class="github">
                <svg-icon name="zhihu" />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.open(this.resumeData?.profile.zhihu);
                  }}
                >
                  {this.resumeData?.profile.zhihu}
                </span>
              </div>
            )}
            {
            this.resumeData?.profile?.workExpYear && (
              <div class="work-exp-year">
                <svg-icon name="work" />
                <span>
                工作经验: {this.resumeData?.profile.workExpYear}
                </span>
              </div>
            )}
            {
            this.resumeData?.profile?.workPlace && (
              <div class="work-place">
                <svg-icon name="address" />
                <span>
                期望工作地: {this.resumeData?.profile.workPlace}
                </span>
              </div>
            )}
            {
            this.resumeData?.profile?.positionTitle && (
              <div class="expect-job">
                <svg-icon name="love" />
                <span>
                职位: {this.resumeData?.profile.positionTitle}
                </span>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
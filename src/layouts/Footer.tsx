import { Component, Vue } from 'vue-property-decorator'

import './Footer.scss'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
  public render() {
    return (
      <footer>
        <div class="footer-box">
          <div class="footer-main">
            <span class="">Made with ❤️</span>
            <span class="author">
              by
              <span
                style={{ marginLeft: '4px', cursor: 'pointer' }}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://github.com/typeofNaN');
                  }
                }}
              >
                typeofNaN
              </span>
            </span>
          </div>
          <a
            href={'https://github.com/typeofNaN/prospect.git'}
            target="_blank"
          >
            源码
          </a>
        </div>
      </footer>
    )
  }
}
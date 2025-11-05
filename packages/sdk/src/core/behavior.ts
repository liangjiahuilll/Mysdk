// 埋点 & 用户行为
import { report } from '../transport/send'

export function trackPV() {
  report({
    type: 'pv',
    url: window.location.href,
    timestamp: Date.now(),
  })
}

// JS 错误监控
import { report } from '../transport/send'

export function trackJSException() {
  window.onerror = (msg, source, line, col, error) => {
    report({
      type: 'js_error',
      message: msg,
      source,
      line,
      col,
      stack: error?.stack,
      timestamp: Date.now(),
    })
  }
}

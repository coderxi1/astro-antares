/// <reference types="mdast-util-to-hast" />
/// <reference types="mdast-util-directive" />
import type { RemarkPlugin } from '.'
import { visit } from 'unist-util-visit'
import remarkDirective from 'remark-directive'

const remarkDirectiveWidgets: RemarkPlugin = () => (tree, _) => {
  visit(tree, (node) => {
    const data = node.data || (node.data = {})
    if (node.type !== 'containerDirective' && node.type !== 'leafDirective' && node.type !== 'textDirective') return
    const attr = node.attributes || (node.attributes = {})

    if (node.name === "note") {
      const type = attr.type || 'info'
      data.hName = "div"
      data.hProperties = { class: `note ${type}`}
    }

    if (node.name === "btn") {
      if (attr.url) {
        data.hName = "button"
        data.hProperties = { "data-url":attr.url ,class:'btn', onclick: `window.open(this.dataset.url)`}
      }
    }
  })
}

export default [
  remarkDirective,
  remarkDirectiveWidgets
]
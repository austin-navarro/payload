import type {
  SerializedTableCellNode,
  SerializedTableNode,
  SerializedTableRowNode,
} from '../../../../../nodeTypes.js'
import type { HTMLConvertersAsync } from '../types.js'

export const TableHTMLConverterAsync: HTMLConvertersAsync<
  SerializedTableCellNode | SerializedTableNode | SerializedTableRowNode
> = {
  table: async ({ node, nodesToHTML, providedStyleTag }) => {
    const children = (
      await nodesToHTML({
        nodes: node.children,
      })
    ).join('')

    return `<div${providedStyleTag} class="lexical-table-container">
        <table class="lexical-table" style="border-collapse: collapse;">
          <tbody>${children}</tbody>
        </table>
      </div>`
  },

  tablecell: async ({ node, nodesToHTML, providedCSSString }) => {
    const children = (
      await nodesToHTML({
        nodes: node.children,
      })
    ).join('')

    const TagName = node.headerState > 0 ? 'th' : 'td'
    const headerStateClass = `lexical-table-cell-header-${node.headerState}`

    let style = 'border: 1px solid #ccc; padding: 8px;' + providedCSSString
    if (node.backgroundColor) {
      style += ` background-color: ${node.backgroundColor};`
    }

    const colSpanAttr = node.colSpan && node.colSpan > 1 ? ` colspan="${node.colSpan}"` : ''
    const rowSpanAttr = node.rowSpan && node.rowSpan > 1 ? ` rowspan="${node.rowSpan}"` : ''

    return `<${TagName}
        class="lexical-table-cell ${headerStateClass}"
        ${colSpanAttr}
        ${rowSpanAttr}
        style="${style}"
      >
        ${children}
      </${TagName}>
    `
  },

  tablerow: async ({ node, nodesToHTML, providedStyleTag }) => {
    const children = (
      await nodesToHTML({
        nodes: node.children,
      })
    ).join('')

    return `<tr${providedStyleTag} class="lexical-table-row">
        ${children}
      </tr>`
  },
}

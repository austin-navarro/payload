'use client'

import type { Column } from 'payload'

import './index.scss'

import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useListQuery } from '../../providers/ListQuery/index.js'
import { DraggableSortableItem } from '../DraggableSortable/DraggableSortableItem/index.js'
import { DraggableSortable } from '../DraggableSortable/index.js'

const baseClass = 'table'

export type Props = {
  readonly appearance?: 'condensed' | 'default'
  readonly columns?: Column[]
  readonly data: Record<string, unknown>[]
}

export const Table: React.FC<Props> = ({ appearance = 'default', columns, data: initialData }) => {
  const { data: listQueryData, handleSortChange, query } = useListQuery()
  // Use the data from ListQueryProvider if available, otherwise use the props
  const serverData = listQueryData?.docs || initialData

  // Local state to track the current order of rows
  const [localData, setLocalData] = useState(serverData)

  // id -> index for each column
  const [cellMap, setCellMap] = useState<Record<string, number>>({})

  // Update local data when server data changes
  useEffect(() => {
    setLocalData(serverData)
    setCellMap(
      Object.fromEntries(serverData.map((item, index) => [String(item.id ?? item._id), index])),
    )
  }, [serverData])

  const activeColumns = columns?.filter((col) => col?.active)

  if (
    !activeColumns ||
    activeColumns.filter((col) => !['_dragHandle', '_select'].includes(col.accessor)).length === 0
  ) {
    return <div>No columns selected</div>
  }

  const handleDragEnd = async ({ moveFromIndex, moveToIndex }) => {
    if (query.sort !== '_order' && query.sort !== '-_order') {
      toast.warning('To reorder the rows you must first sort them by the "Order" column')
      return
    }

    if (moveFromIndex === moveToIndex) {
      return
    }

    const movedId = localData[moveFromIndex].id ?? localData[moveFromIndex]._id
    const newBeforeRow =
      moveToIndex > moveFromIndex ? localData[moveToIndex] : localData[moveToIndex - 1]
    const newAfterRow =
      moveToIndex > moveFromIndex ? localData[moveToIndex + 1] : localData[moveToIndex]

    // Store the original data for rollback
    const previousData = [...localData]
    const orderColumn = activeColumns.find((col) => col.accessor === '_order')
    const originalRenderedCells = orderColumn?.renderedCells ? [...orderColumn.renderedCells] : null

    // Optimisitc update of local state to reorder the rows
    setLocalData((currentData) => {
      const newData = [...currentData]
      // Update the rendered cell for the moved row to show "pending"
      newData[moveFromIndex]._order = `pending`
      if (orderColumn?.renderedCells) {
        orderColumn.renderedCells[cellMap[movedId]] = <>pending</>
      }

      // Move the item in the array
      newData.splice(moveToIndex, 0, newData.splice(moveFromIndex, 1)[0])
      return newData
    })

    try {
      type KeyAndID = {
        id: string
        key: string
      }

      const target: KeyAndID = newBeforeRow
        ? {
            id: newBeforeRow.id ?? newBeforeRow._id,
            key: newBeforeRow._order,
          }
        : {
            id: newAfterRow.id ?? newAfterRow._id,
            key: newAfterRow._order,
          }

      const newKeyWillBe =
        (newBeforeRow && query.sort === '_order') || (!newBeforeRow && query.sort === '-_order')
          ? 'greater'
          : 'less'

      // Assuming we're in the context of a collection
      const collectionSlug = window.location.pathname.split('/').filter(Boolean)[2]
      const response = await fetch(`/api/${collectionSlug}/reorder`, {
        body: JSON.stringify({
          docsToMove: [movedId],
          newKeyWillBe,
          target,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (response.status === 403) {
        throw new Error('You do not have permission to reorder these rows')
      }

      if (!response.ok) {
        throw new Error(
          'Failed to reorder. This can happen if you reorder several rows too quickly. Please try again.',
        )
      }

      // This will trigger an update of the data from the server
      handleSortChange(query.sort as string).catch((error) => {
        throw error
      })
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err)
      // Rollback to previous state if the request fails
      setLocalData(previousData)

      // Also restore the original rendered cells
      if (orderColumn?.renderedCells && originalRenderedCells) {
        for (let i = 0; i < originalRenderedCells.length; i++) {
          orderColumn.renderedCells[i] = originalRenderedCells[i]
        }
      }

      toast.error(error)
    }
  }

  const rowIds = localData.map((row) => row.id ?? row._id)

  return (
    <div
      className={[baseClass, appearance && `${baseClass}--appearance-${appearance}`]
        .filter(Boolean)
        .join(' ')}
    >
      <DraggableSortable ids={rowIds} onDragEnd={handleDragEnd}>
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              {activeColumns.map((col, i) => (
                <th id={`heading-${col.accessor}`} key={i}>
                  {col.Heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {localData.map((row, rowIndex) => (
              <DraggableSortableItem id={rowIds[rowIndex]} key={rowIds[rowIndex]}>
                {({ attributes, listeners, setNodeRef, transform, transition }) => (
                  <tr
                    className={`row-${rowIndex + 1}`}
                    ref={setNodeRef}
                    style={{
                      transform,
                      transition,
                    }}
                  >
                    {activeColumns.map((col, colIndex) => {
                      const { accessor } = col

                      // Use the cellMap to find which index in the renderedCells to use
                      const cell = col.renderedCells[cellMap[row.id ?? row._id]]

                      // For drag handles, wrap in div with drag attributes
                      if (accessor === '_dragHandle') {
                        return (
                          <td className={`cell-${accessor}`} key={colIndex}>
                            <div {...attributes} {...listeners}>
                              {cell}
                            </div>
                          </td>
                        )
                      }

                      return (
                        <td className={`cell-${accessor}`} key={colIndex}>
                          {cell}
                        </td>
                      )
                    })}
                  </tr>
                )}
              </DraggableSortableItem>
            ))}
          </tbody>
        </table>
      </DraggableSortable>
    </div>
  )
}

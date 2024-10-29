'use client'

import type { ClientCollectionConfig } from 'payload'

import { getTranslation } from '@payloadcms/translations'
import LinkImport from 'next/link.js'
import { useRouter } from 'next/navigation.js'
import { formatFilesize, isNumber } from 'payload/shared'
import React, { Fragment, useEffect, useState } from 'react'

// import { ViewDescription } from '../../elements/ViewDescription/index.js'
import type { Column } from '../../elements/Table/index.js'
import type { ListPreferences } from './types.js'

import { useBulkUpload } from '../../elements/BulkUpload/index.js'
import { Button } from '../../elements/Button/index.js'
import { DeleteMany } from '../../elements/DeleteMany/index.js'
import { useDocumentDrawer } from '../../elements/DocumentDrawer/index.js'
import { EditMany } from '../../elements/EditMany/index.js'
import { Gutter } from '../../elements/Gutter/index.js'
import { ListControls } from '../../elements/ListControls/index.js'
import { useListDrawerContext } from '../../elements/ListDrawer/Provider.js'
import { ListHeader } from '../../elements/ListHeader/index.js'
import { ListSelection } from '../../elements/ListSelection/index.js'
import { useModal } from '../../elements/Modal/index.js'
import { Pagination } from '../../elements/Pagination/index.js'
import { PerPage } from '../../elements/PerPage/index.js'
import { PublishMany } from '../../elements/PublishMany/index.js'
import { StaggeredShimmers } from '../../elements/ShimmerEffect/index.js'
import { useStepNav } from '../../elements/StepNav/index.js'
import { RelationshipProvider } from '../../elements/Table/RelationshipProvider/index.js'
import { TableColumnsProvider } from '../../elements/TableColumns/index.js'
import { UnpublishMany } from '../../elements/UnpublishMany/index.js'
import { ViewDescription } from '../../elements/ViewDescription/index.js'
import { useAuth } from '../../providers/Auth/index.js'
import { useConfig } from '../../providers/Config/index.js'
import { useEditDepth } from '../../providers/EditDepth/index.js'
import { useListInfo } from '../../providers/ListInfo/index.js'
import { useListQuery } from '../../providers/ListQuery/index.js'
import { SelectionProvider } from '../../providers/Selection/index.js'
import { useServerFunctions } from '../../providers/ServerFunctions/index.js'
import { useTranslation } from '../../providers/Translation/index.js'
import { useWindowInfo } from '../../providers/WindowInfo/index.js'
import './index.scss'

const baseClass = 'collection-list'
const Link = (LinkImport.default || LinkImport) as unknown as typeof LinkImport.default

export type ListViewClientProps = {
  AfterList?: React.ReactNode
  AfterListTable?: React.ReactNode
  BeforeList?: React.ReactNode
  BeforeListTable?: React.ReactNode
  collectionSlug: string
  columnState: Column[]
  Description?: React.ReactNode
  listPreferences?: ListPreferences
  preferenceKey?: string
  renderedFilters?: Map<string, React.ReactNode>
  Table: React.ReactNode
}

export const DefaultListView: React.FC<ListViewClientProps> = (props) => {
  const {
    AfterList,
    AfterListTable,
    BeforeList,
    BeforeListTable,
    columnState,
    Description,
    listPreferences,
    preferenceKey,
    renderedFilters,
    Table: InitialTable,
  } = props

  const [Table, setTable] = useState(InitialTable)

  const { onSelect } = useListDrawerContext()

  useEffect(() => {
    if (InitialTable) {
      setTable(InitialTable)
    }
  }, [InitialTable])

  const payloadServerAction = useServerFunctions()

  const { user } = useAuth()

  const {
    beforeActions,
    collectionSlug,
    disableBulkDelete,
    disableBulkEdit,
    hasCreatePermission,
    Header,
    newDocumentURL,
  } = useListInfo()

  const { getEntityConfig } = useConfig()
  const router = useRouter()

  const { data, defaultLimit, handlePageChange, handlePerPageChange, params } = useListQuery()
  const { closeModal, openModal } = useModal()
  const { setCollectionSlug, setOnSuccess } = useBulkUpload()
  const { drawerSlug } = useBulkUpload()

  const [collectionConfig] = useState(
    () => getEntityConfig({ collectionSlug }) as ClientCollectionConfig,
  )

  const { admin: { description } = {}, fields, labels } = collectionConfig

  const { i18n, t } = useTranslation()

  useEffect(() => {
    if (!collectionConfig) {
      const getNewConfig = async () => {
        // @ts-expect-error eslint-disable-next-line
        const res = (await payloadServerAction('render-config', {
          collectionSlug,
          languageCode: i18n.language,
        })) as any as ClientCollectionConfig
      }

      void getNewConfig()
    }
  }, [payloadServerAction, collectionConfig, collectionSlug, data, i18n])

  const drawerDepth = useEditDepth()

  const { setStepNav } = useStepNav()

  const {
    breakpoints: { s: smallBreak },
  } = useWindowInfo()

  let docs = data.docs || []

  const isUploadCollection = Boolean(collectionConfig?.upload)

  if (isUploadCollection) {
    docs = docs?.map((doc) => {
      return {
        ...doc,
        filesize: formatFilesize(doc.filesize),
      }
    })
  }

  const openBulkUpload = React.useCallback(() => {
    setCollectionSlug(collectionSlug)
    openModal(drawerSlug)
    setOnSuccess(() => router.refresh())
  }, [router, collectionSlug, drawerSlug, openModal, setCollectionSlug, setOnSuccess])

  useEffect(() => {
    if (drawerDepth <= 1) {
      setStepNav([
        {
          label: labels?.plural,
        },
      ])
    }
  }, [setStepNav, labels, drawerDepth])

  const isBulkUploadEnabled = isUploadCollection && collectionConfig.upload.bulkUpload

  return (
    <Fragment>
      <TableColumnsProvider
        collectionSlug={collectionSlug}
        columnState={columnState}
        docs={data.docs}
        enableRowSelections
        listPreferences={listPreferences}
        preferenceKey={preferenceKey}
        setTable={setTable}
      >
        <div className={`${baseClass} ${baseClass}--${collectionSlug}`}>
          <SelectionProvider docs={data.docs} totalDocs={data.totalDocs} user={user}>
            {BeforeList}
            <Gutter className={`${baseClass}__wrap`}>
              {Header || (
                <ListHeader heading={getTranslation(labels?.plural, i18n)}>
                  {hasCreatePermission && (
                    <>
                      <Button
                        aria-label={i18n.t('general:createNewLabel', {
                          label: getTranslation(labels?.singular, i18n),
                        })}
                        buttonStyle="pill"
                        el={'link'}
                        Link={Link}
                        size="small"
                        to={newDocumentURL}
                      >
                        {i18n.t('general:createNew')}
                      </Button>

                      {isBulkUploadEnabled && (
                        <Button
                          aria-label={t('upload:bulkUpload')}
                          buttonStyle="pill"
                          onClick={openBulkUpload}
                          size="small"
                        >
                          {t('upload:bulkUpload')}
                        </Button>
                      )}
                    </>
                  )}
                  {!smallBreak && (
                    <ListSelection label={getTranslation(collectionConfig?.labels?.plural, i18n)} />
                  )}
                  {description || Description ? (
                    <div className={`${baseClass}__sub-header`}>
                      {Description ?? <ViewDescription description={description} />}
                    </div>
                  ) : null}
                </ListHeader>
              )}
              <ListControls collectionConfig={collectionConfig} renderedFilters={renderedFilters} />
              {BeforeListTable}
              {!data.docs && (
                <StaggeredShimmers
                  className={[`${baseClass}__shimmer`, `${baseClass}__shimmer--rows`].join(' ')}
                  count={6}
                />
              )}
              {data.docs && data.docs.length > 0 && (
                <RelationshipProvider>{Table}</RelationshipProvider>
              )}
              {data.docs && data.docs.length === 0 && (
                <div className={`${baseClass}__no-results`}>
                  <p>
                    {i18n.t('general:noResults', { label: getTranslation(labels?.plural, i18n) })}
                  </p>
                  {hasCreatePermission && newDocumentURL && (
                    <Button el="link" Link={Link} to={newDocumentURL}>
                      {i18n.t('general:createNewLabel', {
                        label: getTranslation(labels?.singular, i18n),
                      })}
                    </Button>
                  )}
                </div>
              )}
              {AfterListTable}
              {data.docs && data.docs.length > 0 && (
                <div className={`${baseClass}__page-controls`}>
                  <Pagination
                    hasNextPage={data.hasNextPage}
                    hasPrevPage={data.hasPrevPage}
                    limit={data.limit}
                    nextPage={data.nextPage}
                    numberOfNeighbors={1}
                    onChange={(page) => void handlePageChange(page)}
                    page={data.page}
                    prevPage={data.prevPage}
                    totalPages={data.totalPages}
                  />
                  {data?.totalDocs > 0 && (
                    <Fragment>
                      <div className={`${baseClass}__page-info`}>
                        {data.page * data.limit - (data.limit - 1)}-
                        {data.totalPages > 1 && data.totalPages !== data.page
                          ? data.limit * data.page
                          : data.totalDocs}{' '}
                        {i18n.t('general:of')} {data.totalDocs}
                      </div>
                      <PerPage
                        handleChange={(limit) => void handlePerPageChange(limit)}
                        limit={isNumber(params?.limit) ? Number(params.limit) : defaultLimit}
                        limits={collectionConfig?.admin?.pagination?.limits}
                        resetPage={data.totalDocs <= data.pagingCounter}
                      />
                      {smallBreak && (
                        <div className={`${baseClass}__list-selection`}>
                          <ListSelection
                            label={getTranslation(collectionConfig.labels.plural, i18n)}
                          />
                          <div className={`${baseClass}__list-selection-actions`}>
                            {beforeActions && beforeActions}
                            {!disableBulkEdit && (
                              <Fragment>
                                <EditMany collection={collectionConfig} />
                                <PublishMany collection={collectionConfig} />
                                <UnpublishMany collection={collectionConfig} />
                              </Fragment>
                            )}
                            {!disableBulkDelete && <DeleteMany collection={collectionConfig} />}
                          </div>
                        </div>
                      )}
                    </Fragment>
                  )}
                </div>
              )}
            </Gutter>
            {AfterList}
          </SelectionProvider>
        </div>
      </TableColumnsProvider>
    </Fragment>
  )
}

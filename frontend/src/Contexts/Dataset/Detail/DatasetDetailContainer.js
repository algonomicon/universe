import { inject, observer } from 'inferno-mobx'

const DatasetDetailContainer = ({ DatasetStore, match: {params} }) => {
  const dataset = DatasetStore.fetchDataset(params.slug)

  return (
    <div>
      { dataset && (
        <div>
          <h1>{dataset.name}</h1>
          <p>{dataset.content}</p>
        </div>
      )}
    </div>
  )
}

export default inject('DatasetStore')(observer(DatasetDetailContainer))
import { useStorageAsync } from '@vueuse/core'
import { reactive } from 'vue'

function useAutoBindStorage<T extends object>({
  data,
  id,
  key
}: {
  key: string
  id: string | number
  data: T
}) {
  useStorageAsync(`${id}-${key}`, data, undefined, {
    mergeDefaults: (storageValue, defaults) => {
      return Object.assign(reactive(defaults), storageValue)
    }
  })
}

export default useAutoBindStorage

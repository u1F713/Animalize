import { AdminAndResourceOptions } from 'cloudinary'
import { api } from './jdk.config'

export const fetchGallery = async (options: AdminAndResourceOptions): Promise<{ ids: []; resources: [] }> => {
  const { resources } = await api.resources(options)

  return {
    ids: resources.map((resource: any) => resource.asset_id),
    resources
  }
}
